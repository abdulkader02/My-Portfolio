"use client";

import React, { useState } from "react";
import { siteLinks } from "@/data/links";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Loader2,
  ExternalLink,
} from "lucide-react";

/**
 * Contact Page Component
 * Features direct contact channels and an integration-ready validated message form.
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (siteLinks.email.email) {
      navigator.clipboard.writeText(siteLinks.email.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email format.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real validation delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage(true);
    }, 600);
  };

  const mailtoUrl = siteLinks.email.email
    ? `mailto:${siteLinks.email.email}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Inquiry"
      )}&body=${encodeURIComponent(
        `Hi Abdul Kader,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      )}`
    : "#";

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-500">
          Get in Touch &bull; Start a Conversation
        </span>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Contact
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-muted-foreground sm:text-lg">
          Have an open developer opportunity, project collaboration, or question? Feel free to reach out directly through the channels below.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column (5 cols): Direct Communication Channels */}
        <section className="space-y-6 lg:col-span-5">
          <div className="space-y-2">
            <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">
              Direct Channels
            </h2>
            <p className="text-sm text-slate-600 dark:text-muted-foreground">
              Available for full-stack web development opportunities and technical discussions.
            </p>
          </div>

          <div className="space-y-3.5">
            {/* Email Card */}
            {siteLinks.email.email && (
              <div className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-colors hover:border-slate-300 dark:border-border/80 dark:bg-card/60 dark:hover:border-border">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-slate-50 text-blue-600 dark:border-border/80 dark:bg-muted/60 dark:text-blue-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-2xs font-semibold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
                        Official Email
                      </span>
                      <a
                        href={`mailto:${siteLinks.email.email}`}
                        className="block truncate text-sm font-medium text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {siteLinks.email.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-foreground dark:text-muted-foreground dark:hover:bg-muted transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* LinkedIn Card */}
            {siteLinks.linkedin.url && (
              <div className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-colors hover:border-slate-300 dark:border-border/80 dark:bg-card/60 dark:hover:border-border">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-slate-50 text-blue-600 dark:border-border/80 dark:bg-muted/60 dark:text-blue-400">
                      <LinkedinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-2xs font-semibold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
                        LinkedIn Profile
                      </span>
                      <p className="text-sm font-medium text-foreground">
                        Abdul Kader
                      </p>
                    </div>
                  </div>
                  <a
                    href={siteLinks.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Connect</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* GitHub Card */}
            {siteLinks.github.url && (
              <div className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-colors hover:border-slate-300 dark:border-border/80 dark:bg-card/60 dark:hover:border-border">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-slate-50 text-blue-600 dark:border-border/80 dark:bg-muted/60 dark:text-blue-400">
                      <GithubIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-2xs font-semibold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
                        GitHub Profile
                      </span>
                      <p className="text-sm font-medium text-foreground">
                        @{siteLinks.github.username}
                      </p>
                    </div>
                  </div>
                  <a
                    href={siteLinks.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Follow</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Location & Status Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-xs text-xs space-y-2 dark:border-border/80 dark:bg-card/60">
              <div className="flex items-center gap-2 text-slate-600 dark:text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <span>Location: <strong className="text-foreground">{profileData.location}</strong></span>
              </div>
              <p className="text-slate-600 dark:text-muted-foreground pt-1">
                Typically responds to genuine inquiries within 24–48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Right Column (7 cols): Validated Contact Form */}
        <section className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6 dark:border-border/80 dark:bg-card/60">
            <div className="space-y-1">
              <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">
                Send a Message
              </h2>
              <p className="text-xs text-slate-600 dark:text-muted-foreground">
                Fill in your details below to compose an inquiry.
              </p>
            </div>

            {submittedMessage ? (
              <div className="space-y-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="h-6 w-6 shrink-0" />
                  <h3 className="font-heading text-base font-bold text-foreground">
                    Message Details Validated
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-muted-foreground leading-relaxed">
                  <p>
                    Your message format has been checked and validated.
                  </p>
                  <p className="rounded-lg bg-background/80 p-3 border border-border text-foreground">
                    <strong>Notice on Delivery:</strong> Direct server-side SMTP dispatch is currently awaiting service API configuration. To ensure Abdul receives your inquiry immediately, click below to open your preferred email client pre-filled with this message.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 dark:bg-foreground dark:text-background dark:hover:opacity-90 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send via Email Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedMessage(false)}
                    className="rounded-full border border-border px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-slate-100 dark:hover:bg-muted transition-colors"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-foreground"
                  >
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="e.g. John Doe"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-border dark:bg-background dark:placeholder:text-muted-foreground/60"
                  />
                  {errors.name && (
                    <p className="text-2xs font-medium text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-foreground"
                  >
                    Your Email <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="e.g. john@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-border dark:bg-background dark:placeholder:text-muted-foreground/60"
                  />
                  {errors.email && (
                    <p className="text-2xs font-medium text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-foreground"
                  >
                    Subject <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    placeholder="e.g. Junior Web Developer Opportunity"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-border dark:bg-background dark:placeholder:text-muted-foreground/60"
                  />
                  {errors.subject && (
                    <p className="text-2xs font-medium text-destructive">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-foreground"
                  >
                    Message <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-border dark:bg-background dark:placeholder:text-muted-foreground/60"
                  />
                  {errors.message && (
                    <p className="text-2xs font-medium text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-95 disabled:opacity-70 dark:bg-foreground dark:text-background dark:hover:opacity-90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Validating...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
