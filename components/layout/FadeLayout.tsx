import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FadeLayout({ children, isFading }: { children: React.ReactNode; isFading: boolean }) {
    const pathname = usePathname();
    const [delayedFade, setDelayedFade] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        let fadeTimer: NodeJS.Timeout;
        let unmountTimer: NodeJS.Timeout;

        if (isFading) {
            fadeTimer = setTimeout(() => {
                setDelayedFade(true);
            }, 10000);

            unmountTimer = setTimeout(() => {
                setShouldRender(false);
            }, 10300);
        }

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(unmountTimer);
        };
    }, [isFading]);

    if (!shouldRender) return null;

    return (
        <AnimatePresence mode="wait" onExitComplete={() => setShouldRender(false)}>
            <motion.div
                key={pathname}
                initial={{ opacity: 1 }}
                animate={{ opacity: delayedFade ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
