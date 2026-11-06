import React from "react";
import Link from "next/link";
import { navigationLinks } from "@/data/links";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

/**
 * Navbar Component (Phase 1 Structural Placeholder)
 * Planned responsibility:
 * - Brand monogram / logo ("AK.")
 * - Centered navigation links (Home, About, Projects, Resume, Contact)
 * - Theme toggle (Light / Dark mode)
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          AK<span className="text-blue-600">.</span>
        </Link>
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
