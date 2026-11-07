"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/data/links";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * Global Navigation Bar Component
 * Provides responsive navigation, route highlighting, mobile menu, and theme toggle.
 */
export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md transition-colors border-b border-border/50">
      <div className="container mx-auto relative flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Monogram Brand Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center font-heading text-2xl font-black tracking-tight text-foreground"
          aria-label="Abdul Kader Khan - Home"
        >
          <Image
            src="/images/profile/logo.png"
            alt="Abdul Kader Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </Link>

        {/* Desktop Centered Navigation Links */}
        <nav
          className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-8 lg:gap-10 md:flex"
          aria-label="Main Navigation"
        >
          {navigationLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-150",
                  isActive
                    ? "font-bold text-foreground"
                    : "font-medium text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Controls (Clean Theme Toggle Only) */}
        <div className="hidden items-center md:flex">
          <ThemeToggle />
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 px-6 py-6 backdrop-blur-lg md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navigationLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-muted text-foreground font-semibold border border-border/80"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border/60">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center rounded-xl bg-foreground py-3 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
