import React from "react";
import { siteLinks } from "@/data/links";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { Mail } from "lucide-react";

/**
 * SocialLinks Component (Phase 1 Structural Placeholder)
 * Planned responsibility:
 * - Render verified external profiles and contact triggers
 * - Unverified or pending links are safely handled
 */
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {siteLinks.github.url && (
        <a
          href={siteLinks.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
      )}

      {siteLinks.linkedin.url ? (
        <a
          href={siteLinks.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
      ) : null}

      {siteLinks.email.email ? (
        <a
          href={`mailto:${siteLinks.email.email}`}
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Send Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      ) : null}
    </div>
  );
}

export default SocialLinks;
