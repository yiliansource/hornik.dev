import { Sidebar } from "@/components/sidebar";
import { AboutSection } from "@/sections/about";
import { ArtworksSection } from "@/sections/artwork";
import { ExperienceSection } from "@/sections/education-and-experience";
import { ProjectsSection } from "@/sections/projects";

export default function Home() {
    return (
        <div className="mx-auto grid max-w-7xl px-3 lg:grid-cols-[1fr_1.5fr] lg:gap-[150px]">
            <Sidebar />
            <main className="flex grow flex-col pb-24 *:pt-16 *:pb-8 lg:pb-40 [&>*:first-child]:pt-24">
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <ArtworksSection />
            </main>
        </div>
    );
}
