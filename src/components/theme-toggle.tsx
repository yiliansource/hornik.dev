import { AnimatePresence, motion } from "motion/react";
import React, { useState, useEffect, useCallback } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const THEME_KEY = "THEME";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const readTheme = localStorage.getItem(THEME_KEY);
        if (readTheme) {
            if (readTheme !== "light" && readTheme !== "dark") return;
            setTheme(readTheme);
        } else {
            setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(THEME_KEY, theme);
        document.body.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(theme === "light" ? "dark" : "light");
    }, [theme]);

    return (
        <AnimatePresence mode="popLayout">
            <motion.button
                key={theme}
                onClick={toggleTheme}
                className="text-foreground-silent hover:text-foreground-muted cursor-pointer p-1 text-xl transition-colors"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </motion.button>
        </AnimatePresence>
    );
}
