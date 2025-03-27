"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { ThemeToggle } from "./theme-toggle";

export function Sidebar() {
    return (
        <aside className="flex max-h-dvh flex-col justify-between pt-12 lg:sticky lg:top-0 lg:w-[410px] lg:pt-24">
            <header className="select-none">
                <p className="mb-1 text-xl text-zinc-600 dark:text-zinc-400">Hi, my name is</p>
                <h1 className="mb-8 text-6xl font-bold">
                    <Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            history.pushState(null, "", "/");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Ian Hornik.
                    </Link>
                </h1>
                <h2 className="text-2xl">
                    I&apos;m a <em className="em-v-1">mathematics student</em> and{" "}
                    <em className="em-v-2">web developer</em> from Vienna, Austria.
                </h2>
            </header>
            <div className="my-8 flex flex-col gap-4 lg:my-0 lg:gap-8">
                <div>
                    <p className="text-lg">
                        <em>I am currently ...</em>
                    </p>
                    <p>
                        getting my master&apos;s degree in Technical Mathematics at the Technical University of Vienna.
                    </p>
                </div>
                <div>
                    <p className="text-lg">
                        <em className="em-v-2">Want to reach out?</em>
                    </p>
                    <p className="flex flex-row items-center gap-2">
                        <span>
                            <MdEmail />
                        </span>
                        <span className="hover:underline">
                            <Link href="mailto:ian@hornik.dev">ian@hornik.dev</Link>
                        </span>
                    </p>
                </div>{" "}
            </div>
            <Navigation />
            <footer className="flex flex-row items-center justify-between py-2 leading-0 text-zinc-400 select-none dark:text-zinc-800">
                <div className="flex flex-row gap-2">
                    {footerIcons.map((f) => (
                        <div
                            key={f.href}
                            className="block text-xl transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
                        >
                            <Link href={f.href} className="block p-1" target="_blank">
                                {f.icon}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="text-sm transition-colors">&copy; {new Date().getFullYear()} Ian Hornik</div>
                <div className="">
                    <ThemeToggle />
                </div>
            </footer>
        </aside>
    );
}

function Navigation() {
    const [activeHref, setActiveHref] = useState<string | null>(null);

    useEffect(() => {
        const handleScrollChange = () => {
            const children = Array.from(document.querySelectorAll("section")) as HTMLElement[];
            const mostVisible = getMostVisible(children);
            if (!mostVisible) return;

            const newHref = "#" + mostVisible.id;
            if (activeHref === newHref) return;

            setActiveHref(newHref);
        };

        window.addEventListener("scroll", handleScrollChange);
        handleScrollChange();

        return () => {
            window.removeEventListener("scroll", handleScrollChange);
        };
    }, [activeHref]);

    return (
        <nav className="flex flex-col gap-2 select-none not-lg:hidden">
            {navigation.map((nav) => (
                <div key={nav.href}>
                    <span
                        className={clsx(
                            "font-semibold tracking-wider uppercase transition-all",
                            nav.href === activeHref
                                ? "ml-2 text-zinc-900 dark:text-zinc-300"
                                : "text-zinc-400 hover:ml-1 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400",
                        )}
                    >
                        <Link
                            href={nav.href}
                            onClick={(e) => {
                                e.preventDefault();
                                history.pushState(null, "", nav.href);
                                document.querySelector(nav.href)?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {nav.label}
                        </Link>
                    </span>
                </div>
            ))}
        </nav>
    );
}

const navigation: {
    label: string;
    href: string;
}[] = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Education & Experience",
        href: "#education-and-experience",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Artwork",
        href: "#artwork",
    },
];

const footerIcons: {
    label: string;
    href: string;
    icon: React.ReactNode;
}[] = [
    {
        label: "Github",
        href: "https://github.com/yiliansource",
        icon: <FaGithub />,
    },
    {
        label: "Linkedin",
        href: "https://www.linkedin.com/in/ian-hornik-271486212/",
        icon: <FaLinkedin />,
    },
];

function getMostVisible(elements: HTMLElement[]): HTMLElement | null {
    let element: HTMLElement | null = null;
    let max: number = 0;

    for (let i = 0; i < elements.length; i++) {
        const visiblePx = getVisibleHeightPx(elements[i]);
        if (visiblePx > max) {
            max = visiblePx;
            element = elements[i];
        }
    }

    return element;
}

function getVisibleHeightPx(element: HTMLElement) {
    const viewportHeight = window.innerHeight / 2;
    const rect = element.getBoundingClientRect();
    const height = rect.bottom - rect.top;
    const visible = {
        top: rect.top >= 0 && rect.top < viewportHeight,
        bottom: rect.bottom > 0 && rect.bottom < viewportHeight,
    };

    let visiblePx = 0;

    if (visible.top && visible.bottom) {
        // Whole element is visible
        visiblePx = height;
    } else if (visible.top) {
        visiblePx = viewportHeight - rect.top;
    } else if (visible.bottom) {
        visiblePx = rect.bottom;
    } else if (height > viewportHeight && rect.top < 0) {
        const absTop = Math.abs(rect.top);

        if (absTop < height) {
            // Part of element is visible
            visiblePx = height - absTop;
        }
    }

    return visiblePx;
}
