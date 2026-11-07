import React from "react";
import { profileData } from "@/data/profile";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

/**
 * EducationCard Component
 * Displays verified academic credentials from Chittagong Technical College.
 */
export function EducationCard() {
  const { education } = profileData;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 sm:p-8 backdrop-blur-xs transition-all duration-200 hover:border-border hover:shadow-sm">
      <div className="space-y-6">
        {/* Header with Icon and Badge */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-muted/60 text-blue-600 transition-colors group-hover:bg-blue-500/10 dark:text-blue-400">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Academic Background
              </span>
              <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Education
              </h2>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            {education.status}
          </span>
        </div>

        {/* Degree & Major */}
        <div className="space-y-2 border-l-2 border-blue-600/60 pl-4 dark:border-blue-500/60">
          <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
            {education.degree}
          </h3>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {education.field}
          </p>
        </div>

        {/* Institution Details */}
        <div className="space-y-2.5 pt-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="font-medium text-foreground">
              {education.institution}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span>{education.location}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span>Expected Completion: {education.expectedCompletion}</span>
          </div>
        </div>
      </div>

      {/* Grounded Note */}
      <div className="mt-6 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
        Focused on computer science fundamentals, algorithm design, and web technologies.
      </div>
    </article>
  );
}

export default EducationCard;
