# Design Guidelines & Visual Direction

This design system is derived from the approved visual reference (`media_1793974264532_9ff75e06.jpg`). It dictates the aesthetic, typography, layout hierarchy, and component rules for all future UI phases.

> [!IMPORTANT]
> **Identity Decoupling Notice:**
> The reference image is the primary visual and structural layout reference only. **Never copy the reference image's personal identity (Alex Rivera) or mock text.** All portfolio content must strictly feature Abdul Kader Khan.

---

## 1. Aesthetic & Design Style

- **Style Philosophy:** Minimalist, Modern, Editorial, and High-Clarity Professional Developer Portfolio.
- **Visual Feel:** Clean whitespace, crisp typographic contrast, subtle borders, and intentional accent color usage.

## 2. Color Palette & Theming

The application supports both **Light Mode** and **Dark Mode**.

### Light Mode (Default)
- **Primary Background:** White / Off-White (`#FFFFFF` / `oklch(0.99 0 0)`)
- **Primary Typography:** Black / Deep Charcoal (`#111827` / `oklch(0.145 0 0)`)
- **Secondary / Muted Text:** Neutral Slate Gray (`#64748B` / `oklch(0.556 0 0)`)
- **Accent Color:** Electric Blue (`#2563EB` / `rgb(37, 99, 235)`) used sparingly for taglines, highlights, and active indicators
- **Borders & Dividers:** Subtle neutral gray (`#E2E8F0` / `oklch(0.922 0 0)`)

### Dark Mode
- **Primary Background:** Deep charcoal / pitch black (`#0B0F17` / `oklch(0.145 0 0)`)
- **Primary Typography:** Crisp Off-White (`#F8FAFC` / `oklch(0.985 0 0)`)
- **Secondary / Muted Text:** Muted cool gray (`#94A3B8` / `oklch(0.708 0 0)`)
- **Accent Color:** Vivid Electric Blue (`#3B82F6` / `oklch(0.623 0.214 259.815)`)
- **Borders & Dividers:** Subdued dark neutral border (`oklch(0.269 0 0)`)

---

## 3. Typography Hierarchy

- **Font Family:** Clean grotesque sans-serif (e.g., `Geist Sans` or `Inter`) with monospace numerals/code accents (`Geist Mono`).
- **Tagline / Category Header:** Uppercase, tracked out (`tracking-widest` / `tracking-wider`), font-size `text-xs` or `text-sm`, font-weight `font-semibold` in Electric Blue.
- **Hero Heading:** Large, confident typography (`text-4xl md:text-6xl font-bold tracking-tight text-foreground`).
- **Body / Introduction:** Balanced, readable paragraph text (`text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl`).
- **Navigation Links:** Minimal, clear links (`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors`).

---

## 4. Layout & Structural Anatomy

### Global Navigation (`Navbar`)
- Centered minimal menu links: `Home`, `About`, `Projects`, `Resume`, `Contact`.
- Monogram / Logo on the left: bold initials (e.g., `AK.` with a terminal dot).
- Theme toggle on the far right: minimal moon/sun icon with smooth toggle.
- Non-sticky or subtle backdrop-blur border on scroll.

### Hero Section (`Hero`)
- **Layout:** Two-column grid on desktop, single-column stacked on mobile.
- **Left Column:**
  1. Small uppercase blue tagline: e.g., `DEVELOPMENT | DESIGN | ARCHITECTURE`
  2. Large heading: `Hi, I'm Abdul Kader Khan.`
  3. Short, focused introduction paragraph.
  4. Call-to-Action (CTA) Button Group:
     - **Primary CTA:** Solid black pill-shaped button (`rounded-full bg-foreground text-background font-medium px-6 py-3 hover:opacity-90 flex items-center gap-2`) with an arrow icon (e.g., "View Resume →").
     - **Secondary CTA:** Outlined pill-shaped button (`rounded-full border border-border bg-background text-foreground hover:bg-muted px-6 py-3 font-medium`) (e.g., "Let's Talk" / "Contact Me").
- **Right Column:**
  - Clean circular profile portrait cutout (`aspect-square rounded-full border border-border shadow-xl`) with soft elevation/drop shadow and balanced whitespace.

### Global Footer (`Footer`)
- Clean horizontal alignment between copyright notice and social channels:
  - Left: `© {Year} Abdul Kader Khan. All rights reserved.`
  - Right: Minimal icon links (`GitHub`, verified handles) using Lucide icons.

---

## 5. Design Restrictions & Anti-Patterns

1. **No Unnecessary Gradients:** Avoid heavy background gradients, rainbow glows, or neon border fades. Keep surfaces crisp and editorial.
2. **No Excessive Animations:** Do not use bouncy or distracting entry animations. If motion is added in Phase 2, restrict to subtle opacity fade-ins (150ms-250ms).
3. **No Cluttered Layouts:** Prioritize spacious padding (`py-16 md:py-24`) and breathing room between sections.
4. **No Excessive Card Usage:** Avoid wrapping every snippet in bordered boxes with drop-shadows; favor typographic separation and clean vertical rhythm.
5. **Strict Responsive Behavior:** Ensure all layouts scale gracefully from 360px mobile screens up to wide 1440px desktop viewports.
