import clsx from "clsx";
import { useEffect, useState } from "react";

const navigation: {
    label: string;
    href: string;
}[] = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Education",
        href: "#education",
    },
    {
        label: "Experience",
        href: "#experience",
    },
    {
        label: "Achievements",
        href: "#achievements",
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

export function Navigation() {
    const [activeHref, setActiveHref] = useState<string | null>(null);

    useEffect(() => {
        const handleScrollChange = () => {
            const children = Array.from(document.querySelectorAll("section")) as HTMLElement[];
            const mostVisible = getActiveViewed(children);
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
        <nav className="flex flex-col gap-2 select-none">
            {navigation.map((nav) => (
                <div key={nav.href}>
                    <span
                        className={clsx(
                            "font-semibold tracking-wider uppercase transition-all duration-500",
                            nav.href === activeHref
                                ? "text-foreground ml-2"
                                : "text-foreground-silent hover:text-foreground-muted hover:ml-1",
                        )}
                    >
                        <a
                            href={nav.href}
                            onClick={(e) => {
                                e.preventDefault();
                                history.pushState(null, "", nav.href);
                                document.querySelector(nav.href)?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {nav.label}
                        </a>
                    </span>
                </div>
            ))}
        </nav>
    );
}

function getActiveViewed(elements: HTMLElement[]): HTMLElement | null {
    if (elements.length === 0) return null;

    const viewTop = window.scrollY;
    const viewHeight = window.innerHeight;
    const viewCutoff = viewTop + viewHeight / 4;

    const sortedElements = elements.slice().sort((a, b) => a.offsetTop - b.offsetTop);

    for (let i = 0; i < sortedElements.length - 1; i++) {
        if (sortedElements[i + 1].offsetTop >= viewCutoff) {
            return sortedElements[i];
        }
    }

    return sortedElements[sortedElements.length - 1];
}
