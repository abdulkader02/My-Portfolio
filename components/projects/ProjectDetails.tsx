import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { GithubIcon } from "@/components/shared/icons";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

/**
 * ProjectDetails Component (Phase 1 Structural Placeholder)
 * Planned responsibility:
 * - Detailed showcase of an individual project
 * - Displays verified attributes, preview image, links, tech stack, and pending disclosures
 */
export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article className="space-y-8">
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      <header className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {project.category}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {project.description}
        </p>
      </header>

      {/* Project Preview Image */}
      {project.thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      )}

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-4">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
          >
            Visit Live Project
            <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <span className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
            Live URL: Pending Deployment
          </span>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            Source Code
            <GithubIcon className="h-4 w-4" />
          </a>
        ) : (
          <span className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
            Repository: Pending User Input
          </span>
        )}
      </div>

      {/* Technologies & Features Placeholders */}
      <div className="grid grid-cols-1 gap-8 border-t border-border pt-8 md:grid-cols-2">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Technologies</h2>
          {project.technologies.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-muted/30 px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm italic text-muted-foreground">
              Tech stack details pending user verification.
            </p>
          )}
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Key Features</h2>
          {project.features.length > 0 ? (
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {project.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm italic text-muted-foreground">
              Feature specifications pending user verification.
            </p>
          )}
        </section>
      </div>
    </article>
  );
}

export default ProjectDetails;
