import LoremIpsum from "react-lorem-ipsum";

export function AboutSection() {
    return (
        <section id="about" className="flex flex-row flex-wrap gap-12 text-zinc-400 lg:flex-nowrap">
            <LoremIpsum p={2} />
        </section>
    );
}
