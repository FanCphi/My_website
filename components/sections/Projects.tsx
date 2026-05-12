import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-light-gray/20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Projects
          </h2>
          <p className="text-mid-gray mb-12 max-w-xl">
            我参与的项目，从探索到落地的过程。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
