export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  proficiencyLevel?: "Proficient" | "Working Knowledge" | "Foundational";
}

export interface SkillCategory {
  title: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    category: "Frontend",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "HTML", category: "Frontend", proficiencyLevel: "Working Knowledge" },
      { name: "CSS", category: "Frontend", proficiencyLevel: "Working Knowledge" },
      { name: "JavaScript", category: "Frontend", proficiencyLevel: "Working Knowledge" },
      { name: "TypeScript", category: "Frontend", proficiencyLevel: "Working Knowledge" },
      { name: "React.js", category: "Frontend", proficiencyLevel: "Working Knowledge" },
      { name: "Next.js", category: "Frontend", proficiencyLevel: "Working Knowledge" },
      { name: "Tailwind CSS", category: "Frontend", proficiencyLevel: "Working Knowledge" },
    ],
  },
  {
    title: "Backend Development",
    category: "Backend",
    description: "Developing RESTful APIs and server-side application logic.",
    skills: [
      { name: "Node.js", category: "Backend", proficiencyLevel: "Working Knowledge" },
      { name: "Express.js", category: "Backend", proficiencyLevel: "Working Knowledge" },
    ],
  },
  {
    title: "Database Management",
    category: "Database",
    description: "NoSQL data persistence and document modeling.",
    skills: [
      { name: "MongoDB", category: "Database", proficiencyLevel: "Working Knowledge" },
    ],
  },
  {
    title: "Tools & Workflow",
    category: "Tools",
    description: "Version control, code editing, and developer productivity tools.",
    skills: [
      { name: "Git", category: "Tools", proficiencyLevel: "Working Knowledge" },
      { name: "GitHub", category: "Tools", proficiencyLevel: "Working Knowledge" },
      { name: "VS Code", category: "Tools", proficiencyLevel: "Working Knowledge" },
    ],
  },
];
