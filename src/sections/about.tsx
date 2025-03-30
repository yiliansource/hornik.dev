import LoremIpsum from "react-lorem-ipsum";

export function AboutSection() {
    return (
        <section
            id="about"
            className="text-foreground-muted flex flex-row flex-wrap gap-12 hyphens-auto lg:flex-nowrap"
        >
            <LoremIpsum p={2} />
        </section>
    );
}
