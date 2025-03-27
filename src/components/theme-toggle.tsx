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
        <button
            onClick={toggleTheme}
            className="cursor-pointer p-1 text-xl transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
        >
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    );
}
