import { SectionHeading } from "@/components/sections";
import Markdown from "react-markdown";

export function AboutSection() {
    return (
        <section id="about">
            <SectionHeading>About</SectionHeading>
            <div className="grid grid-cols-1 gap-x-8 text-justify hyphens-auto md:grid-cols-2">
                {content.map((c, i) => (
                    <div key={i} className="prose dark:prose-invert">
                        <Markdown>{c}</Markdown>
                    </div>
                ))}
            </div>
        </section>
    );
}

const content = [
    `I started out in school with media and game design, and quickly took a liking to the technical 
aspect of interactive design, especially programming. After graduating, I briefly free-lanced as a 
web developer, before I started studying at university. Always being fascinated by it, I chose 
technical mathematics, and the deep theories and abstract problems quickly became both a challenge 
and a passion.`,
    `Now I am pursuing my master&apos;s in technical mathematics, with a special interest in complex 
analysis and functional analysis, while working on software, web and game projects. I take on 
freelance work occasionally, but mostly build things for fun, experimenting with new ideas and 
technologies.

I also work as a student employee, mostly tutoring exercise classes, and sometimes I write 
papers for seminars. A link will be coming soon-ish.`,
];
