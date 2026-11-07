import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { GithubIcon } from "@/components/shared/icons";
import { techIconMap } from "@/components/icons/tech-icons";
import { ArrowLeft, ExternalLink, CheckCircle2, Globe, Code2 } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

/**
 * ProjectDetails Component
 * Comprehensive deep-dive view for individual project case studies.
 */
export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article className="space-y-12">
      {/* 1. Back Navigation & Header */}
      <div className="space-y-6">
        <div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>
        </div>

        <header className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
          </div>

          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.description}
          </p>
        </header>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm hover:opacity-90 active:scale-95 transition-all"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <span className="rounded-full border border-border px-4 py-2.5 text-xs font-medium text-muted-foreground bg-muted/30">
              Live URL Pending Deployment
            </span>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-2xs hover:bg-muted active:scale-95 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View Source Code</span>
            </a>
          ) : (
            <span className="rounded-full border border-border px-4 py-2.5 text-xs font-medium text-muted-foreground bg-muted/30">
              Repository: Private / Pending
            </span>
          )}
        </div>
      </div>

      {/* 2. Full-Resolution Screenshot Hero Showcase */}
      {project.thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/80 bg-muted/20 shadow-xl">
          <Image
            src={project.thumbnail}
            alt={`${project.title} detailed interface showcase`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      )}

      {/* 3. Detailed Specifications Grid */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Overview & Features */}
        <div className="space-y-10 lg:col-span-8">
          {/* Project Overview */}
          {project.overview && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Project Overview
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
            </section>
          )}

          {/* Key Features */}
          {project.features.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Key Features &amp; Architecture
                </h2>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-4 transition-colors hover:border-border"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm leading-relaxed text-foreground font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column: Technologies & Meta */}
        <aside className="space-y-6 lg:col-span-4">
          {/* Tech Stack Box */}
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6 backdrop-blur-xs space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-heading text-lg font-bold text-foreground">
                Technologies Used
              </h3>
            </div>
            {project.technologies.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const iconData = techIconMap[tech];
                  const IconComp = iconData?.Icon;
                  const brandColor = iconData?.brandColor;

                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {IconComp && (
                        <IconComp
                          className="h-3.5 w-3.5"
                          style={{
                            color: brandColor !== "currentColor" ? brandColor : undefined,
                          }}
                        />
                      )}
                      <span>{tech}</span>
                    </span>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs italic text-muted-foreground">
                Technologies pending catalog confirmation.
              </p>
            )}
          </div>

          {/* Project Quick Facts */}
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6 backdrop-blur-xs space-y-3 text-xs">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Project Meta
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between border-b border-border/50 py-1.5">
                <span className="text-muted-foreground">Role:</span>
                <span className="font-medium text-foreground">Full-Stack Implementation</span>
              </div>
              <div className="flex justify-between border-b border-border/50 py-1.5">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium text-foreground">{project.category}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">Deployment:</span>
                <span className="font-medium text-foreground">Vercel / Netlify</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

export default ProjectDetails;
