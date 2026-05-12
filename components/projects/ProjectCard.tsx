"use client";

import Tag from "@/components/ui/Tag";
import type { Project } from "@/types/project";
import { statusLabels, statusColors } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border border-light-gray/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full pattern-ruyi">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-heading text-base font-semibold text-dark">
          {project.name}
        </h3>
        <span
          className={`inline-block px-2.5 py-0.5 text-xs font-mono rounded-sm shrink-0 ${statusColors[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <p className="text-dark/60 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="flex gap-3 pt-3 border-t border-light-gray/30">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mid-gray hover:text-dark text-sm font-mono transition-colors duration-200"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mid-gray hover:text-green text-sm font-mono transition-colors duration-200"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
