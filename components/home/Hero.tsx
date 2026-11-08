import React from "react";
import Link from "next/link";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { ArrowRight } from "lucide-react";

/**
 * Hero Component (Home Page)
 * Directly matches the approved Reference 1 layout:
 * - Left column:
 *   - Plain text blue eyebrow: DEVELOPMENT | DESIGN | STRATEGY
 *   - Confident two-line headline: Hi, I'm Abdul / Kader.
 *   - Balanced paragraph introduction
 *   - Pill CTA button pair: "View Resume →" and "Let's Talk"
 * - Right column:
 *   - Clean circular portrait cutout with ambient drop shadow
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Introduction & Call-to-Actions */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Category Eyebrow */}
            <div className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-blue-600 dark:text-blue-500">
              DEVELOPMENT | DESIGN | STRATEGY
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[4.75rem] lg:leading-[1.08]">
              Hi, I&apos;m Abdul<br className="hidden sm:inline" />
              Kader<span className="text-foreground">.</span>
            </h1>

            {/* Bio Introduction */}
            <p className="mt-6 mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-muted-foreground">
              A full-stack developer passionate about building fast, accessible, and responsive digital products. Welcome to my portfolio.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-7 py-3.5 text-sm sm:text-base font-semibold text-background shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-foreground/90 dark:hover:text-background active:scale-95"
              >
                <span>View Resume</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground shadow-2xs transition-colors duration-200 hover:bg-slate-100 hover:border-slate-300 dark:bg-background dark:border-border/80 dark:hover:bg-muted/60 active:scale-95"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Circular Portrait Cutout */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative aspect-square w-72 sm:w-84 md:w-96 lg:w-[410px] overflow-hidden rounded-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-border/80 dark:ring-border/30">
              <Image
                src={profileData.portrait}
                alt={profileData.name}
                fill
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 410px"
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
