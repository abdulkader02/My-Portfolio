# Abdul Kader Khan — Developer Portfolio (Architecture & Knowledge Base)

A modern, high-performance, and minimalist developer portfolio web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Project Purpose

This repository houses the personal developer portfolio and project showcase of **Abdul Kader Khan**, an aspiring Full-Stack Web Developer based in Bangladesh.

The goal of Phase 1 is to establish a rock-solid, component-driven project architecture, standardized TypeScript data structures, and a centralized personal knowledge base in the [`context/`](./context/) directory. This ensures that any future AI coding agent or human contributor has a single source of truth without fabricating information.

---

## 2. Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode support)
- **Planned Animation:** Framer Motion (scoped strictly to subtle interactions in Phase 2)
- **Deployment Target:** [Vercel](https://vercel.com/)

---

## 3. Centralized Knowledge Base (`context/`)

The [`context/`](./context/) folder serves as the **Single Source of Truth (SSOT)** for all future development. AI coding assistants must consult these files before implementing UI changes or answering questions about the developer.

| Knowledge File | Focus & Verified Data |
| :--- | :--- |
| [`context/profile.md`](./context/profile.md) | Name, title, location, verified bio, development interests, career goals |
| [`context/education.md`](./context/education.md) | Chittagong Technical College — Diploma in Engineering (CST) |
| [`context/skills.md`](./context/skills.md) | Verified technology stack (Frontend, Backend, Database, Tools) |
| [`context/projects.md`](./context/projects.md) | Known projects (BazarDor, FitLog, DevStack, StudioSpace) & URLs |
| [`context/social-links.md`](./context/social-links.md) | Verified GitHub (`abdulkader02`) & pending contact channels |
| [`context/resume.md`](./context/resume.md) | Resume file specifications, route, and download handling |
| [`context/design-guidelines.md`](./context/design-guidelines.md) | Minimalist design system, editorial typography, color palette |
| [`context/agent-instructions.md`](./context/agent-instructions.md) | 14 mandatory operational rules for AI agents |

---

## 4. Directory & Folder Structure

```text
portfolio-frontend/
│
├── context/                        # Centralized knowledge base (Single Source of Truth)
│   ├── README.md                   # Knowledge base index and usage guidelines
│   ├── profile.md                  # Personal identity, introduction, focus, goals
│   ├── education.md                # Verified academic background and diploma details
│   ├── skills.md                   # Technical proficiencies grouped by category
│   ├── projects.md                 # Verified projects, live deployments, pending items
│   ├── social-links.md             # Online profiles, internal routes, contact status
│   ├── resume.md                   # Resume specifications and download handling
│   ├── design-guidelines.md        # Minimalist visual direction and color palette
│   └── agent-instructions.md       # Mandatory operating rules for all AI agents
│
├── app/                            # Next.js App Router (Routes & Layouts)
│   ├── layout.tsx                  # Root layout with ThemeProvider, Navbar, Footer
│   ├── page.tsx                    # Home page (Hero placeholder)
│   ├── globals.css                 # Global styling, Tailwind tokens, CSS variables
│   │
│   ├── about/                      # About page route
│   │   └── page.tsx                # Verified background & education summary
│   │
│   ├── projects/                   # Projects showcase route
│   │   ├── page.tsx                # Projects grid list
│   │   └── [slug]/                 # Dynamic project showcase
│   │       └── page.tsx            # Static params & project detail view
│   │
│   ├── resume/                     # Resume preview and download route
│   │   └── page.tsx                # CV download card and verified summary
│   │
│   └── contact/                    # Contact route
│       └── page.tsx                # Channels & contact form placeholder
│
├── components/                     # Reusable React components
│   ├── layout/                     # Layout shells
│   │   ├── Navbar.tsx              # Top navigation bar with theme toggle
│   │   └── Footer.tsx              # Footer with copyright and social links
│   │
│   ├── home/                       # Home page components
│   │   └── Hero.tsx                # Hero section (two-column layout placeholder)
│   │
│   ├── about/                      # About page component directory
│   │   └── .gitkeep
│   │
│   ├── projects/                   # Project showcase components
│   │   ├── ProjectCard.tsx         # Individual project preview card
│   │   └── ProjectDetails.tsx      # Comprehensive project showcase view
│   │
│   ├── resume/                     # Resume page component directory
│   │   └── .gitkeep
│   │
│   ├── contact/                    # Contact page component directory
│   │   └── .gitkeep
│   │
│   └── shared/                     # Cross-page shared components
│       ├── ThemeToggle.tsx         # Dark/Light mode switcher
│       └── SocialLinks.tsx         # Verified social profile links
│
├── data/                           # Centralized TypeScript data files
│   ├── profile.ts                  # Structured profile data (Profile interface)
│   ├── projects.ts                 # Verified projects list and slug getter
│   ├── skills.ts                   # Categorized skills matrix
│   └── links.ts                    # Navigation and social link configurations
│
├── public/                         # Static assets
│   ├── images/
│   │   ├── profile/                # Headshot portrait (portrait.png)
│   │   ├── projects/               # Project screenshots (bazar-dor.png, fit-log.png, dev-stack.png, studio-space.png)
│   │   └── icons/                  # Custom SVGs & badges (.gitkeep)
│   └── Abdul-Kader-CV.pdf          # [User Input Required] Genuine CV PDF
│
├── types/                          # Shared TypeScript interfaces
│   ├── profile.ts                  # Profile, Education, CareerGoals types
│   └── project.ts                  # Project definition interface
│
├── .env.example                    # Environment variable template
├── .gitignore                      # Git ignore patterns
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
├── next.config.ts                  # Next.js configuration
└── eslint.config.mjs               # ESLint configuration
```

---

## 5. Planned Application Routes

| Route | Purpose | Status in Phase 1 |
| :--- | :--- | :--- |
| `/` | Landing page featuring Hero and high-level introduction | Minimal Placeholder Shell |
| `/about` | Background, education details, and skills summary | Minimal Placeholder Shell |
| `/projects` | Showcase of completed and ongoing projects | Minimal Placeholder Shell |
| `/projects/[slug]` | Deep-dive dynamic showcase for individual projects | Minimal Placeholder Shell |
| `/resume` | Summary of experience and CV download trigger | Minimal Placeholder Shell |
| `/contact` | Contact information and form placeholder | Minimal Placeholder Shell |

---

## 6. Development Setup

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm

### Installation & Run

1. Clone or open the repository:
   ```bash
   cd portfolio-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Run code quality checks:
   ```bash
   npm run typecheck    # TypeScript compiler check
   npm run lint         # ESLint check
   ```

---

## 7. Current Project Phase Status

> [!IMPORTANT]
> **Phase 1 Complete:** Folder structure, knowledge base, types, and architecture placeholders are set up.
> **Phase 2 (Pending User Authorization):** Full visual design implementation, custom styling, responsive polish, and verified asset integration.
