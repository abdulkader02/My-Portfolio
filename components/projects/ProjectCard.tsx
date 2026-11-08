import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { GithubIcon } from "@/components/shared/icons";
import { ExternalLink, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard Component
 * Displays project preview thumbnail, title, category, description, tech stack tags, and action CTAs.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md dark:border-border/80 dark:bg-card/60 dark:hover:bg-card">
      {/* 1. Project Thumbnail with Zoom Effect */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative aspect-video w-full overflow-hidden border-b border-border bg-slate-100 dark:bg-muted/30 block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} screenshot preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 512px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-xs px-3 py-1 text-xs font-medium text-foreground">
            <span>Explore Case Study</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>

      {/* 2. Project Information Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
          </div>

          <h3 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-muted-foreground">
            {project.description}
          </p>

          {/* Technology Badges */}
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 transition-colors group-hover:border-slate-300 dark:bg-muted/60 dark:text-foreground dark:group-hover:border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 3. Action Buttons & Direct Links */}
        <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={`View live deployment for ${project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-foreground dark:text-muted-foreground transition-colors"
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex items-center gap-1 text-slate-600 hover:text-blue-600 dark:text-muted-foreground dark:hover:text-foreground transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
