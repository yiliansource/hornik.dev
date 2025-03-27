import { FeaturedProject } from "@/components/featured-project";
import LoremIpsum from "react-lorem-ipsum";

export function ProjectsSection() {
    return (
        <section id="projects" className="flex flex-col gap-12">
            <h1 className="text-5xl font-semibold">Projects</h1>
            <FeaturedProject
                name="party.js"
                summary="A JavaScript library to brighten up your user's site experience with visual effects!"
                tags={["TypeScript", "HTML"]}
                bannerSrc={"/img/projects/partyjs.png"}
            >
                <LoremIpsum p={1} />
            </FeaturedProject>
            <FeaturedProject
                name="Tenacious Tanks"
                summary="A free-to-play, local-multiplayer, fast-paced arena brawler, where up to 4 players challenge each other in head-to-head tactical combat! This was my graduation project."
                tags={["Unity3D", "C#", "Wwise"]}
                bannerSrc={"/img/projects/tenacious-tanks.png"}
            >
                <LoremIpsum p={1} />
            </FeaturedProject>
        </section>
    );
}
