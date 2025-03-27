import { AboutSection } from "@/sections/about";
import { ArtworksSection } from "@/sections/artwork";
import { ExperienceSection } from "@/sections/education-and-experience";
import { ProjectsSection } from "@/sections/projects";

const sections = [AboutSection, ExperienceSection, ProjectsSection, ArtworksSection];

export function SectionList() {
    return sections.map((Section, index) => <Section key={index} />);
}
