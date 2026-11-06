import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "bazar-dor",
    slug: "bazar-dor",
    title: "BazarDor",
    category: "E-commerce / Marketplace",
    description: "E-commerce and marketplace web application. Detailed description and project overview are pending user verification.",
    technologies: [],
    liveUrl: "https://bazar-dor-pi-hazel.vercel.app/",
    githubUrl: "https://github.com/abdulkader02/B14-A7-Bazar-Dor",
    thumbnail: "/images/projects/bazar-dor.png",
    features: [],
    isPendingVerification: true,
  },
  {
    id: "fit-log",
    slug: "fit-log",
    title: "FitLog",
    category: "Fitness Tracking Application",
    description: "Fitness and workout tracking web application. Detailed description and project overview are pending user verification.",
    technologies: [],
    liveUrl: "https://a6-fit-log-roan.vercel.app/",
    githubUrl: "https://github.com/abdulkader02/A6-Fit-Log",
    thumbnail: "/images/projects/fit-log.png",
    features: [],
    isPendingVerification: true,
  },
  {
    id: "dev-stack",
    slug: "dev-stack",
    title: "DevStack",
    category: "Web Application",
    description: "Developer-focused web application. Detailed description and project overview are pending user verification.",
    technologies: [],
    liveUrl: "https://dev-stack-project-a-5.netlify.app/",
    githubUrl: "https://github.com/abdulkader02/Dev-stack-project",
    thumbnail: "/images/projects/dev-stack.png",
    features: [],
    isPendingVerification: true,
  },
  {
    id: "studio-space",
    slug: "studio-space",
    title: "StudioSpace",
    category: "Studio Booking Platform",
    description: "Studio space booking and management platform. Live deployment and project overview are pending user verification.",
    technologies: [],
    liveUrl: "https://studiospace-frontend.vercel.app/",
    githubUrl: "https://github.com/abdulkader02/A8-StudioSpace",
    thumbnail: "/images/projects/studio-space.png",
    features: [],
    isPendingVerification: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
