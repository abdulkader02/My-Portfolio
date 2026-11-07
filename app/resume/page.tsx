import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { siteLinks } from "@/data/links";
import {
  FileText,
  Download,
  GraduationCap,
  Code2,
  Mail,
  AlertCircle,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Abdul Kader Khan",
  description:
    "Curriculum Vitae and qualifications of Abdul Kader Khan, Full-Stack Web Developer. Education at Chittagong Technical College, verified technical skills, and practical projects.",
};

/**
 * Dedicated Resume & Qualifications Route
 */
export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20 space-y-12">
      {/* 1. Header */}
      <header className="space-y-4">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-500">
          Curriculum Vitae &bull; Professional Summary
        </span>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Resume
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Detailed overview of education, technical capabilities, and full-stack software development projects.
        </p>
      </header>

      {/* 2. CV Download & Status Card */}
      <div className="rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 backdrop-blur-xs shadow-xs space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/60 text-blue-600 dark:text-blue-400">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-heading text-base font-bold text-foreground">Abdul-Kader-CV.pdf</h2>
                <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-2xs font-semibold text-amber-600 dark:text-amber-400">Document Pending Upload</span>
              </div>
              <p className="text-xs text-muted-foreground">Official PDF Document (Target: /public/Abdul-Kader-CV.pdf)</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-muted/60 px-5 py-2.5 text-xs font-semibold text-muted-foreground transition-colors"
              title="PDF will be enabled upon genuine file upload"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Directly</span>
            </Link>
          </div>
        </div>
        {/* Unavailable State Notice */}
        <div className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-muted/30 p-3.5 text-xs text-muted-foreground">
          <AlertCircle className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
          <span>
            The physical PDF document is currently pending finalization and will be placed in the public assets directory. All verified educational credentials and project achievements are documented below.
          </span>
        </div>
      </div>

      {/* 3. Resume Content Layout */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column (7 cols): Education + Official Profiles */}
        <div className="lg:col-span-7">
          {/* Education Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/60 pb-3">
              <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">Education</h2>
            </div>
            <div className="relative border-l-2 border-border/80 pl-6 space-y-2">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-blue-600" />
              <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-2xs font-semibold text-blue-600 dark:text-blue-400">
                2023 &ndash; 2027 (Expected) &bull; In Progress
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {profileData.education.degree} in {profileData.education.field}
              </h3>
              <p className="text-sm font-semibold text-muted-foreground">
                {profileData.education.institution}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{profileData.education.location}</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground pt-2">
                Focused on core computer science fundamentals, algorithm analysis, database principles, object-oriented programming, and modern full-stack web architectures.
              </p>
            </div>
          </section>

          {/* Official Profiles Card (moved here) */}
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-3 backdrop-blur-xs text-xs mt-8">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">Official Profiles</h3>
            <div className="space-y-2.5">
              {siteLinks.github.url && (
                <a
                  href={siteLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>github.com/{siteLinks.github.username}</span>
                </a>
              )}
              {siteLinks.linkedin.url && (
                <a
                  href={siteLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </a>
              )}
              {siteLinks.email.email && (
                <a
                  href={`mailto:${siteLinks.email.email}`}
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{siteLinks.email.email}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Professional Status + Technical Stack */}
        <aside className="space-y-8 lg:col-span-5">
          {/* Professional Status */}
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-3 backdrop-blur-xs">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Professional Status
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {profileData.experienceStatus}
            </p>
            <div className="pt-2 text-xs text-muted-foreground space-y-1.5 border-t border-border/50">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="font-medium text-foreground">{profileData.location}</span>
              </div>
              <div className="flex justify-between">
                <span>Role:</span>
                <span className="font-medium text-foreground">{profileData.role}</span>
              </div>
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-4 backdrop-blur-xs">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                Technical Stack
              </h3>
            </div>
            <div className="space-y-4 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="space-y-1.5">
                  <span className="font-medium text-foreground">{cat.title}:</span>
                  <p className="text-muted-foreground">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
