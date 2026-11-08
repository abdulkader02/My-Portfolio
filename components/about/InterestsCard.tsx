import React from "react";
import { Layers, LayoutGrid, ShieldCheck, Palette, Compass } from "lucide-react";

interface InterestItem {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const interests: InterestItem[] = [
  {
    title: "Full-Stack Web Development",
    description: "Bridging front-end component architectures with structured, robust back-end APIs.",
    Icon: Layers,
  },
  {
    title: "Component-Driven UI Architecture",
    description: "Crafting clean, reusable, and accessible design system components.",
    Icon: LayoutGrid,
  },
  {
    title: "Modern TypeScript Applications",
    description: "Leveraging static type safety to write predictable, maintainable software.",
    Icon: ShieldCheck,
  },
  {
    title: "Minimalist & Accessible Systems",
    description: "Building fast, high-contrast digital experiences prioritizing clarity and speed.",
    Icon: Palette,
  },
];

/**
 * InterestsCard Component
 * Displays verified engineering focus areas and development interests.
 */
export function InterestsCard() {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs transition-all duration-200 hover:border-slate-300 hover:shadow-sm dark:border-border/70 dark:bg-card/60 dark:hover:border-border">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-50 dark:border-border/80 dark:bg-muted/60 dark:text-blue-400 dark:group-hover:bg-blue-500/10">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
              Core Passions
            </span>
            <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Development Focus
            </h2>
          </div>
        </div>

        {/* Interests Grid / List */}
        <div className="space-y-3.5">
          {interests.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex items-start gap-3.5 rounded-xl border border-border bg-slate-50/80 p-3.5 transition-colors hover:border-slate-300 hover:bg-slate-100/80 dark:border-border/40 dark:bg-muted/20 dark:hover:border-border/80 dark:hover:bg-muted/40"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-blue-600 dark:border-border/60 dark:bg-background dark:text-blue-400">
                <Icon className="h-4 w-4" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default InterestsCard;
