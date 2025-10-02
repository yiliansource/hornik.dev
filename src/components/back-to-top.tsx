"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function BackToTop() {
    const [scrollTop, setScrollTop] = useState(0);
    const [windowHeight, setWindowHeight] = useState(1080);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollTop(window.scrollY);
        });
        window.addEventListener("resize", () => {
            setWindowHeight(window.innerHeight);
        });

        setScrollTop(window.scrollY);
        setWindowHeight(window.innerHeight);
    }, []);

    return (
        <AnimatePresence>
            {scrollTop > windowHeight / 2 && (
                <motion.div
                    className={clsx(
                        "fixed right-4 bottom-4 z-20 flex size-10 cursor-pointer rounded-sm border shadow-md backdrop-blur-md",
                        "border-black/10 bg-white/50 hover:bg-white/70 dark:border-white/10 dark:bg-black/50 dark:hover:bg-black/70",
                    )}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ ease: "easeInOut" }}
                >
                    <FaArrowUp className="m-auto" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
