import React from "react";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Abdul Kader Khan",
    };
  }

  return {
    title: `${project.title} — Case Study | Abdul Kader Khan`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Project Case Study`,
      description: project.description,
      images: [
        {
          url: project.thumbnail,
          alt: project.title,
        },
      ],
    },
  };
}

/**
 * Project Detail Dynamic Route
 */
export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
      <ProjectDetails project={project} />
    </div>
  );
}
