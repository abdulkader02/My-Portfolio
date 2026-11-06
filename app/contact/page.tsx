"use client";

import React from "react";
import { siteLinks } from "@/data/links";
import { GithubIcon } from "@/components/shared/icons";
import { Mail, MessageSquare } from "lucide-react";

/**
 * Contact Page (Phase 1 Minimal Structural Placeholder)
 * Full form interactions and email delivery integrations deferred to Phase 2.
 */
export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
      <header className="mb-10 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          Get in Touch
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Have an inquiry, project idea, or opportunity? Reach out directly.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Information & Channels */}
        <section className="space-y-6 rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Connect Channels
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
                <GithubIcon className="h-4 w-4 text-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">GitHub</h3>
                <a
                  href={siteLinks.github.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  github.com/{siteLinks.github.username}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
                <Mail className="h-4 w-4 text-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">Email</h3>
                <p className="text-xs text-muted-foreground">
                  {siteLinks.email.statusText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Placeholder (No backend implementation in Phase 1) */}
        <section className="space-y-4 rounded-xl border border-border p-6">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-foreground">
              Send a Message (Placeholder)
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Interactive contact form and email dispatch will be configured in Phase 2.
          </p>

          <form className="space-y-4 pt-2" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs font-medium text-foreground">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                disabled
                placeholder="Name input placeholder"
                className="w-full rounded-md border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-medium text-foreground">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                disabled
                placeholder="Email input placeholder"
                className="w-full rounded-md border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-xs font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                disabled
                placeholder="Message area placeholder"
                className="w-full rounded-md border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground"
              />
            </div>
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-full bg-muted px-4 py-2 text-xs font-medium text-muted-foreground"
            >
              Form Submission (Available in Phase 2)
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
