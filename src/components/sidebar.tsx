"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";

export function Sidebar() {
    return (
        <aside className="flex h-dvh flex-col justify-between pt-12 lg:sticky lg:top-0 lg:w-[410px] lg:pt-24">
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

            <div className="flex flex-col gap-4 lg:my-0 lg:gap-8">
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
                </div>
            </div>

            <div className="block lg:hidden">
                <p className="text-foreground-muted text-center">Scroll down to see more!</p>
            </div>

            <div className="hidden lg:block">
                <Navigation />
            </div>

            <footer className="text-foreground-silent flex flex-row items-center justify-between py-2 leading-0 select-none">
                <div className="flex flex-row gap-2">
                    {footerIcons.map((f) => (
                        <div key={f.href} className="hover:text-foreground-muted block text-xl transition-colors">
                            <Link href={f.href} className="block p-1" target="_blank">
                                {f.icon}
                            </Link>
                        </div>
                    ))}
                </div>
                <p className="text-foreground-silent text-sm">&copy; {new Date().getFullYear()} Ian Hornik</p>
                <div className="">
                    <ThemeToggle />
                </div>
            </footer>
        </aside>
    );
}

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
