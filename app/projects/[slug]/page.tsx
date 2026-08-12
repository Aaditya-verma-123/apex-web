import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectTechStack from "@/components/project-detail/ProjectTechStack";
import ProjectFeatures from "@/components/project-detail/ProjectFeatures";
import ProjectChallenges from "@/components/project-detail/ProjectChallenges";
import ProjectLessons from "@/components/project-detail/ProjectLessons";
import RelatedProjects from "@/components/project-detail/RelatedProjects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectTechStack project={project} />

      <ProjectFeatures project={project} />

      <ProjectChallenges project={project} />

      <ProjectLessons project={project} />

      <RelatedProjects currentProject={project} />
    </main>
  );
}