import React from "react";
import { profileData } from "@/data/profile";
import { siteLinks } from "@/data/links";
import { FileText, Download } from "lucide-react";

export const metadata = {
  title: "Resume | Abdul Kader Khan",
  description: "Curriculum Vitae and background summary of Abdul Kader Khan.",
};

/**
 * Resume Page (Phase 1 Minimal Structural Placeholder)
 * Full UI and interactive PDF embed deferred to Phase 2.
 */
export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
      <header className="mb-10 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          Curriculum Vitae
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Resume
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Verified educational background, technical competencies, and development focus.
        </p>
      </header>

      {/* Resume Download Action Area */}
      <div className="mb-8 flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted">
            <FileText className="h-5 w-5 text-foreground" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Abdul-Kader-CV.pdf
            </h2>
            <p className="text-xs text-muted-foreground">
              Official PDF Document (Expected at /public/Abdul-Kader-CV.pdf)
            </p>
          </div>
        </div>

        <a
          href={siteLinks.cvPdfPath}
          download="Abdul-Kader-CV.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>
      </div>

      {/* Resume Content Summary */}
      <div className="space-y-8 rounded-xl border border-border p-6">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Education</h2>
          <div className="space-y-1 text-sm">
            <p className="font-medium text-foreground">
              {profileData.education.degree} in {profileData.education.field}
            </p>
            <p className="text-muted-foreground">
              {profileData.education.institution} &bull; {profileData.education.location}
            </p>
            <p className="text-xs text-muted-foreground">
              Expected Completion: {profileData.education.expectedCompletion}
            </p>
          </div>
        </section>

        <section className="space-y-3 border-t border-border pt-6">
          <h2 className="text-lg font-semibold text-foreground">Professional Status</h2>
          <p className="text-sm text-muted-foreground">
            {profileData.experienceStatus}
          </p>
        </section>
      </div>
    </div>
  );
}
