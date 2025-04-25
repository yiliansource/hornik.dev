export function AboutSection() {
    return (
        <section id="about" className="text-foreground-muted grid grid-cols-1 text-justify lg:grid-cols-[1fr_auto_1fr]">
            <div className="*:mb-4">
                <p>
                    I started out in school with media and game design, and quickly took a liking to the technical
                    aspect of interactive design, especially programming. After graduating, I briefly free-lanced as a
                    web developer, before I started studying at university. Always being fascinated by it, I chose
                    technical mathematics, and the deep theories and abstract problems quickly became both a challenge
                    and a passion.
                </p>
            </div>
            <div className="relative mx-6 hidden border-r border-zinc-800 lg:block">
                <div className="absolute -bottom-4 h-4 border-r border-dashed border-zinc-800"></div>
            </div>
            <div className="*:mb-4">
                <p>
                    Now I am pursuing my master&apos;s in technical mathematics, with a special interest in complex
                    analysis and functional analysis, while working on software, web and game projects. I take on
                    freelance work occasionally, but mostly build things for fun, experimenting with new ideas and
                    technologies.
                </p>
                <p>
                    <span className="block">
                        I also work as a student employee, mostly tutoring exercise classes, and sometimes I write
                        papers for seminars.
                    </span>
                    <span className="text-foreground-silent block text-sm">(A link will be coming soon-ish.)</span>
                </p>
                <p></p>
            </div>
        </section>
    );
}
