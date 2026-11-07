import React from "react";
import { skillCategories } from "@/data/skills";
import { techIconMap } from "@/components/icons/tech-icons";
import { Cpu } from "lucide-react";

/**
 * SkillsSection Component
 * Displays verified technical stack with official brand vector icons in a responsive grid.
 */
export function SkillsSection() {
  return (
    <section className="space-y-8 rounded-2xl border border-border/70 bg-card/40 p-6 sm:p-8 backdrop-blur-xs">
      {/* Section Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-muted/60 text-blue-600 transition-colors dark:text-blue-400">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Technical Arsenal
            </span>
            <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Skills &amp; Technologies
            </h2>
          </div>
        </div>
        <p className="max-w-md text-xs text-muted-foreground sm:text-right">
          Official stack components with verified hands-on project experience.
        </p>
      </div>

      {/* Category Grid */}
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.category} className="space-y-3.5">
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-border/50 pb-2">
              <h3 className="font-heading text-sm font-medium tracking-wide text-foreground">
                {category.title}
              </h3>
              <span className="text-xs font-medium text-muted-foreground">
                {category.skills.length} {category.skills.length === 1 ? "Technology" : "Technologies"}
              </span>
            </div>

            {/* Skills Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {category.skills.map((skill) => {
                const iconData = techIconMap[skill.name];
                const IconComponent = iconData?.Icon;
                const brandColor = iconData?.brandColor;

                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-xl border border-border/70 bg-card/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-card hover:shadow-xs"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-muted/40 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/5">
                      {IconComponent ? (
                        <IconComponent
                          className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                          style={{
                            color: brandColor !== "currentColor" ? brandColor : undefined,
                          }}
                        />
                      ) : (
                        <div className="h-5 w-5 rounded-full bg-muted-foreground/30" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium tracking-tight text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
