import React from "react";
import { profileData } from "@/data/profile";
import { SocialLinks } from "@/components/shared/SocialLinks";

/**
 * Global Footer Component
 * Clean, minimal footer matching Reference 1:
 * - Left: "© {year} {profileData.name}. All rights reserved."
 * - Right: Verified social links (GitHub, LinkedIn, Email).
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border py-8 transition-colors bg-background">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8 lg:px-12">
        {/* Left: Minimal Copyright */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground">
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </p>

        {/* Right: Verified Social Links */}
        <div className="flex items-center gap-5">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
