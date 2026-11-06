import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects | Abdul Kader Khan",
  description: "Featured projects and web applications developed by Abdul Kader Khan.",
};

/**
 * Projects Index Page (Phase 1 Minimal Structural Placeholder)
 * Full UI implementation deferred to Phase 2.
 */
export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
      <header className="mb-10 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          Portfolio
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Showcase of web applications, personal experiments, and practical platforms.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
