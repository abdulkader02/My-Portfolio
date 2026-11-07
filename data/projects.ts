import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "bazar-dor",
    slug: "bazar-dor",
    title: "BazarDor",
    category: "E-commerce / Marketplace",
    description:
      "A daily commodity marketplace and market price tracker providing real-time commodity rates, price change percentages, and category-wise breakdowns for essentials.",
    overview:
      "BazarDor addresses daily market transparency by tracking daily commodity rates such as rice, lentils, produce, oil, fish, meat, and spices. It features an interactive price-ticker, category filters, and an intuitive product catalog.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://bazar-dor-pi-hazel.vercel.app/",
    githubUrl: "https://github.com/abdulkader02/B14-A7-Bazar-Dor",
    thumbnail: "/images/projects/bazar-dor.png",
    features: [
      "Daily market price ticker with real-time percentage change indicators",
      "Categorized catalog for daily essentials (Rice, Lentils, Oil, Produce, Fish, Dairy)",
      "Market overview displaying average, minimum, and maximum commodity rates",
      "Responsive user interface optimized for desktop and mobile shoppers",
    ],
    isPendingVerification: false,
  },
  {
    id: "fit-log",
    slug: "fit-log",
    title: "FitLog",
    category: "Fitness Tracking Application",
    description:
      "A modern, dark-themed workout companion and gym logger designed to help athletes select routines, structure daily training plans, and track set-by-set progress.",
    overview:
      "FitLog is built for focused training sessions. Athletes can browse a curated workout library, organize daily workout plans, and track their fitness momentum through an intuitive, distraction-free athletic dark mode interface.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://a6-fit-log-roan.vercel.app/",
    githubUrl: "https://github.com/abdulkader02/A6-Fit-Log",
    thumbnail: "/images/projects/fit-log.png",
    features: [
      "Workout library with categorized muscle-group targeting exercises",
      "Personal training planner to assemble and organize daily routines",
      "Interactive workout logging and set tracking mechanism",
      "Distraction-free high-contrast dark theme engineered for gym environments",
    ],
    isPendingVerification: false,
  },
  {
    id: "dev-stack",
    slug: "dev-stack",
    title: "DevStack",
    category: "Web Application",
    description:
      "An interactive developer toolkit and architectural decision platform for exploring, comparing, and assembling modern frontend, backend, and database technologies.",
    overview:
      "DevStack streamlines the technology selection process for modern software engineers. It enables developers to explore libraries, compare stacks side-by-side, and design tailored architecture blueprints for upcoming applications.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://dev-stack-project-a-5.netlify.app/",
    githubUrl: "https://github.com/abdulkader02/Dev-stack-project",
    thumbnail: "/images/projects/dev-stack.png",
    features: [
      "Technology explorer across frontend, backend, database, and DevOps tools",
      "Side-by-side stack comparison matrix for informed architectural decisions",
      "Interactive stack assembly builder for modern web application prototypes",
      "Clean, modern UI with visual technology breakdown cards",
    ],
    isPendingVerification: false,
  },
  {
    id: "studio-space",
    slug: "studio-space",
    title: "StudioSpace",
    category: "Studio Booking Platform",
    description:
      "A next-generation creative space booking platform connecting creators with pre-rigged cyclorama soundstages, 4K podcast lounges, and production suites.",
    overview:
      "StudioSpace redefines creative production bookings. Creators can browse multimedia studios, filter facilities by soundstage type or equipment, and reserve studio slots, while space owners can showcase and host their creative spaces.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
    liveUrl: "https://studiospace-frontend.vercel.app/",
    githubUrl: "https://github.com/abdulkader02/A8-StudioSpace",
    thumbnail: "/images/projects/studio-space.png",
    features: [
      "Interactive studio exploration with rich multimedia production showcase",
      "Detailed facility profiles covering soundstages, podcast setups, and gear",
      "Integrated host onboarding flow for listing production studios",
      "Dual light and dark theme experience tailored for creative professionals",
    ],
    isPendingVerification: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
