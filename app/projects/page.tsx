import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Abdul Kader Khan",
  description:
    "Explore practical web applications, e-commerce platforms, fitness loggers, and developer tools built by Abdul Kader Khan using React, Next.js, and Node.js.",
};

/**
 * Projects Showcase Index Route
 */
export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
      {/* Page Header */}
      <header className="mb-12 space-y-4 sm:mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-500">
          Featured Work &bull; Practical Showcase
        </span>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Projects
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-muted-foreground sm:text-lg">
          A showcase of real-world web applications built from scratch. Each project represents hands-on experience with modern frontend interfaces, state management, and full-stack integration.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
