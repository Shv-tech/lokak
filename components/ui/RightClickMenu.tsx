"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Summit", href: "/summit" },
  { label: "Contact", href: "/contact" },
];

export default function RightClickMenu() {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleClick = (e: MouseEvent) => {
      // Hide if clicking outside menu
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.7, x: pos.x, y: pos.y }}
          animate={{ opacity: 1, scale: 1, x: pos.x, y: pos.y }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ type: "tween", ease: [0.42, 0, 0.58, 1], duration: 0.22 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000,
            pointerEvents: "auto",
          }}
          className="rounded-xl card-rainbow no-rainbow bg-black/90 border border-white/10 shadow-soft min-w-[160px] py-2"
        >
          {MENU_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition"
              onClick={() => setVisible(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
