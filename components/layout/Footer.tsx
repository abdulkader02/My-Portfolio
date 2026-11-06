import React from "react";
import { profileData } from "@/data/profile";
import { SocialLinks } from "@/components/shared/SocialLinks";

/**
 * Footer Component (Phase 1 Structural Placeholder)
 * Planned responsibility:
 * - Dynamic copyright notice with developer name
 * - Social link icons aligned to the right
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border py-8 text-sm text-muted-foreground">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p>
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
