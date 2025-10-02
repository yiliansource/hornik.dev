import { AboutSection } from "./about";
import { AchievementsSection } from "./achievements";
import { ArtworksSection } from "./artwork";
import { EducationAndExperienceSection } from "./education-and-experience";
import { ProjectsSection } from "./projects";

const sections = [AboutSection, EducationAndExperienceSection, AchievementsSection, ProjectsSection, ArtworksSection];

export function SectionList() {
    return sections.map((Section, index) => <Section key={index} />);
}
