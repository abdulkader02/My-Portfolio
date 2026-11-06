import React from "react";
import { profileData } from "@/data/profile";
import { skillCategories } from "@/data/skills";

export const metadata = {
  title: "About | Abdul Kader Khan",
  description: "About Abdul Kader Khan, education, background, and development focus.",
};

/**
 * About Page (Phase 1 Minimal Structural Placeholder)
 * Full UI implementation deferred to Phase 2.
 */
export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
      <header className="mb-10 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          Background & Education
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          {profileData.fullBio}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Education Section */}
        <section className="space-y-4 rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground">Education</h2>
          <div className="space-y-1">
            <h3 className="font-medium text-foreground">
              {profileData.education.degree} — {profileData.education.field}
            </h3>
            <p className="text-sm text-muted-foreground">
              {profileData.education.institution}, {profileData.education.location}
            </p>
            <p className="text-xs text-muted-foreground">
              Expected Completion: {profileData.education.expectedCompletion} ({profileData.education.status})
            </p>
          </div>
        </section>

        {/* Development Interests */}
        <section className="space-y-4 rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground">Development Interests</h2>
          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
            {profileData.developmentInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Skills Summary Placeholder */}
      <section className="mt-10 space-y-6 rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground">Skills Overview</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="space-y-2">
              <h3 className="text-sm font-medium text-foreground">{cat.title}</h3>
              <ul className="space-y-1 text-xs text-muted-foreground">
                {cat.skills.map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
