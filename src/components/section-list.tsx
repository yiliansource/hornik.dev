import { AboutSection } from "@/sections/about";
import { AchievementsSection } from "@/sections/achievements";
import { ArtworksSection } from "@/sections/artwork";
import { EducationAndExperienceSection } from "@/sections/education-and-experience";
import { ProjectsSection } from "@/sections/projects";

const sections = [AboutSection, EducationAndExperienceSection, AchievementsSection, ProjectsSection, ArtworksSection];

export function SectionList() {
    return sections.map((Section, index) => <Section key={index} />);
}
