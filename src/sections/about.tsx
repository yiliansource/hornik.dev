import LoremIpsum from "react-lorem-ipsum";

export function AboutSection() {
    return (
        <section id="about" className="text-foreground-muted grid grid-cols-1 gap-12 hyphens-auto lg:grid-cols-2">
            <LoremIpsum p={1} />
            <p>
                Today I am studying Technical Mathematics at the Technical University of Vienna, with a special interest
                in complex analysis and functional analysis.
            </p>
        </section>
    );
}
