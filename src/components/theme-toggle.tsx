import { applyIsDark, getInitialIsDark, IS_DARK_KEY } from "@/lib/theme";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState<boolean>(getInitialIsDark());

    useEffect(() => {
        localStorage.setItem(IS_DARK_KEY, String(isDark));
        applyIsDark(isDark);
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((d) => !d);
    };

    return (
        <AnimatePresence mode="popLayout">
            <motion.button
                key={String(isDark)}
                onClick={toggleTheme}
                className="text-foreground-silent hover:text-foreground-muted cursor-pointer p-1 text-xl transition-colors"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                {isDark ? <FaMoon /> : <FaSun />}
            </motion.button>
        </AnimatePresence>
    );
}
