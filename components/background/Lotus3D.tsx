"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Group, AnimationMixer } from "three";

function LotusModel() {
  
  const gltf = useGLTF("/gltf/scene.gltf") as any;
  
  const model = useRef<THREE.Group | null>(null);
  const ref = useRef<Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);
  const actionsRef = useRef<any[]>([]);
  const targetY = useRef(0);
  const currentY = useRef(0);
  const baseY = -0.6; 
  
  //Adjust these accordingly v
  const internalAnimation = useRef<number>(0);
  const internalAnimationFrame = useRef<number>(5);
  //Adjust these accordingly ^

  useEffect(() => {
    if (!gltf) return;

    
    const instance = gltf.scene.clone();
    instance.scale.setScalar(0.01);

    
    const texLoader = new THREE.TextureLoader();
    let diffuseTex: THREE.Texture | null = null;
    try {
      diffuseTex = texLoader.load("/models/textures/Lotus_Diffuse.png");
    } catch (e) {
      diffuseTex = null;
    }

    
    const meshes: THREE.Mesh[] = [];
    instance.traverse((c: any) => {
      if (c.isMesh) {
        c.castShadow = false;
        c.receiveShadow = false;
        meshes.push(c);
      }
    });

    if (meshes.length > 0) {
      const sizes = meshes.map((m) => {
        const box = new THREE.Box3().setFromObject(m);
        const size = new THREE.Vector3();
        box.getSize(size);
        return Math.max(0.0001, size.x * size.y * size.z);
      });

      
      const sizesSorted = [...sizes].sort((a, b) => a - b);
      const mid = Math.floor(sizesSorted.length / 2);
      const median = sizesSorted[mid];
      const maxVal = sizesSorted[sizesSorted.length - 1];

      
      
      if (median > 0 && maxVal / median > 8) {
        const largestIdx = sizes.indexOf(maxVal);
        meshes.forEach((m, idx) => {
          m.visible = idx !== largestIdx;
        });
      } else {
        
        meshes.forEach((m) => (m.visible = true));
      }

      
      if (diffuseTex) {
        meshes.forEach((m) => {
          try {
            if (m.material && !(m.material as any).map) {
              (m.material as any).map = diffuseTex;
              (m.material as any).needsUpdate = true;
            }
          } catch (e) {
            
          }
        });
      }
    }

    
    try {
      const clips = gltf.animations || [];
      if (clips.length > 0) {
        const mixer = new AnimationMixer(instance);
        mixerRef.current = mixer;

        
        try {
          mixer.setTime(0);
        } catch (e) {}

        
        const primaryClip = clips.reduce((a: any, b: any) => (a.duration >= b.duration ? a : b), clips[0]);
        try {
          const action = mixer.clipAction(primaryClip);
          action.reset();
          action.enabled = true;
          action.setEffectiveTimeScale(1);
          action.setEffectiveWeight(1);
          action.clampWhenFinished = false;
          action.setLoop(THREE.LoopRepeat, Infinity);
          try {
            action.fadeIn(0.01);
          } catch (e) {}
          try {
            action.time = 0;
          } catch (e) {}
          action.play();
          actionsRef.current = [action];
        } catch (e) {
          
        }
      }
    } catch (e) {
      
    }

    model.current = instance;

    
    const maxAngle = 0.5; 
    const handlePointer = (clientX: number) => {
      const w = window.innerWidth || 1;
      const nx = (clientX / w - 0.5) * 2; 
      
      targetY.current = -nx * maxAngle;
    };

    const onMouseMove = (e: MouseEvent) => handlePointer(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) handlePointer(e.touches[0].clientX);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      
      if (mixerRef.current) {
        try {
          mixerRef.current.stopAllAction();
        } catch (e) {}
        mixerRef.current = null;
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove as any);
    };
  }, [gltf]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    ref.current.position.x = 0;
    ref.current.position.y = baseY;
    ref.current.position.z = 0;
    ref.current.rotation.x = 0;
    ref.current.rotation.y = 0;
    ref.current.rotation.z = 0;

    
    const clampedDelta = Math.min(delta, 0.04);
    if (mixerRef.current) {
      if (internalAnimation.current === 1) {
        mixerRef.current.update(clampedDelta);
      } else {
        
        try {
          mixerRef.current.setTime(internalAnimationFrame.current);
        } catch (e) {}
      }
    }

    
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    currentY.current = lerp(currentY.current, targetY.current, 0.08);
    try {
      if (ref.current) ref.current.rotation.y = currentY.current;
    } catch (e) {}

    
    
    try {
      actionsRef.current.forEach((action) => {
        if (!action || !action.getClip) return;
        const clip = action.getClip();
        const dur = clip?.duration;
        if (!dur || dur <= 0) return;
        if (internalAnimation.current === 1) {
          const t = (action as any).time as number;
          
          if (t >= dur - 1e-4) {
            try {
              
              (action as any).time = t % dur + 1e-4;
            } catch (e) {}
          }
        } else {
          
          try {
            (action as any).time = internalAnimationFrame.current;
          } catch (e) {}
        }
      });
    } catch (e) {
     
    }
  });

  
  return model.current ? (
    <primitive ref={ref} object={model.current} position={[0, baseY, 0]} />
  ) : null;
}

export default function Lotus3D() {
  return (
    
    <div className="pointer-events-none">
      <Canvas
        orthographic={false}
        camera={{ position: [0, 0.5, 2.2], fov: 45 }}
        style={{ width: 520, height: 420 }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight intensity={0.6} position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <LotusModel />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}
