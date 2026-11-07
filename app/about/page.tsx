import React from "react";
import { profileData } from "@/data/profile";
import { EducationCard } from "@/components/about/EducationCard";
import { InterestsCard } from "@/components/about/InterestsCard";
import { SkillsSection } from "@/components/about/SkillsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Abdul Kader Khan",
  description:
    "Learn about Abdul Kader Khan, full-stack web developer based in Bangladesh, his academic background, development focus, and verified technical skill stack.",
};

/**
 * About Page (Phase 1.5 UI Refinement & Typography Upgrade)
 */
export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
      {/* 1. Introduction Header */}
      <header className="mb-12 space-y-4 sm:mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-500">
          Background &bull; Education &bull; Arsenal
        </span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          About Me
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profileData.fullBio}
        </p>
      </header>

      {/* 2. Education & Development Interests Grid */}
      <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 lg:grid-cols-2 lg:gap-8">
        <EducationCard />
        <InterestsCard />
      </div>

      {/* 3. Skills & Technologies Section */}
      <SkillsSection />
    </div>
  );
}
