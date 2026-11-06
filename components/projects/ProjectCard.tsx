import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { ExternalLink, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard Component (Phase 1 Structural Placeholder)
 * Planned responsibility:
 * - Card view representing an individual project
 * - Displays category, title, description, thumbnail image, and navigation links
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-colors">
      {/* Project Thumbnail Image */}
      {project.thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
            {project.category}
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-medium">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-foreground hover:underline"
          >
            Details
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              Live Site
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
