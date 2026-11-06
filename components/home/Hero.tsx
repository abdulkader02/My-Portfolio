import React from "react";
import Link from "next/link";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { ArrowRight } from "lucide-react";

/**
 * Hero Component (Phase 1 Structural Placeholder)
 * Planned responsibility:
 * - Two-column desktop / stacked mobile layout
 * - Category tagline ("DEVELOPMENT | DESIGN | STRATEGY")
 * - Confident headline & verified short introduction
 * - Primary CTA ("View Resume") and Secondary CTA ("Let's Talk")
 * - Circular profile portrait from /images/profile/portrait.png
 */
export function Hero() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          {/* Left Column: Intro & CTAs */}
          <div className="flex flex-col items-start gap-6 md:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              DEVELOPMENT &bull; DESIGN &bull; ARCHITECTURE
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Hi, I&apos;m {profileData.name}.
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              {profileData.shortBio}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View Resume
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          {/* Right Column: Circular Profile Portrait */}
          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="relative aspect-square w-64 overflow-hidden rounded-full border-2 border-border shadow-xl sm:w-72 md:w-80">
              <Image
                src={profileData.portrait}
                alt={profileData.name}
                fill
                priority
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
