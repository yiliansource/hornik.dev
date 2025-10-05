import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";

const contactOptions: {
    label: string;
    href: string;
    icon: React.ReactNode;
}[] = [
    {
        label: "Email",
        href: "mailto:ian@hornik.dev",
        icon: <FaEnvelope />,
    },
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

export function Sidebar() {
    return (
        <div className="flex h-screen flex-col justify-between pt-12 lg:sticky lg:top-0 lg:w-[420px] lg:pt-24">
            <header className="select-none">
                <p className="mb-1 text-xl text-zinc-600 dark:text-zinc-400">Hi, my name is</p>
                <h1 className="mb-8 text-6xl font-bold">
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            history.pushState(null, "", "/");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Ian Hornik.
                    </a>
                </h1>
                <h2 className="text-2xl leading-9">
                    I&apos;m a <em className="em-v-1">mathematics student</em> and{" "}
                    <em className="em-v-2">web developer</em> from Vienna, Austria.
                </h2>
            </header>

            <div className="flex flex-col gap-4 lg:my-0 lg:gap-8">
                <p className="leading-7">
                    <em>I am currently</em> getting my master&apos;s degree in Technical Mathematics at the Technical
                    University of Vienna.
                </p>
                <div>
                    <p className="mb-1 font-semibold">Want to reach out?</p>
                    <div className="flex flex-row items-center gap-2">
                        {contactOptions.map((c) => (
                            <a key={c.href} href={c.href} title={c.label} className="p-1 text-xl">
                                <span className="text-(--fancy-gradient-1)">{c.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="block lg:hidden">
                <p className="text-foreground-muted text-center">Scroll down to see more!</p>
            </div>

            <div className="hidden lg:block">
                <Navigation />
            </div>

            <footer className="text-foreground-silent flex flex-row items-center justify-between py-2 leading-0 select-none">
                <p className="text-foreground-silent text-sm">&copy; {new Date().getFullYear()} Ian Hornik</p>
                <div className="">
                    <ThemeToggle />
                </div>
            </footer>
        </div>
    );
}
