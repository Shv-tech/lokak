import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FadeLayout({ children, isFading }: { children: React.ReactNode; isFading: boolean }) {
    const pathname = usePathname();
    const [shouldUnmount, setShouldUnmount] = useState(false);

    if (shouldUnmount) return null;

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    };

    return (
        <motion.div
            key={pathname}
            initial="visible"
            animate={isFading ? "hidden" : "visible"}
            variants={variants}
            transition={{ 
                duration: 0.3,
                ease: "easeInOut",
                delay: isFading ? 10 : 0  // 10 second delay before fade starts
            }}
            onAnimationComplete={() => {
                if (isFading) {
                    setShouldUnmount(true);
                }
            }}
        >
            {children}
        </motion.div>
    );
}
