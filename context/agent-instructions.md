# Operational Instructions for AI Agents

All AI agents working on this repository must read, understand, and strictly follow these instructions before executing any changes or planning next phases.

---

## The 14 Immutable Core Directives

1. **Read Context First:** Read the entire `context/` directory before starting any development task, bugfix, or feature expansion.
2. **Primary Source of Truth:** Treat all Markdown documents in `context/` as the single and ultimate source of truth.
3. **Never Invent Personal Information:** Never invent or fabricate biographical details, birthdates, locations, phone numbers, or academic credentials (e.g., CGPA, honors).
4. **Never Invent Professional Experience:** Abdul Kader Khan has no formal prior professional employment. Never manufacture past job titles, employers, client testimonials, or freelancing claims.
5. **Never Invent Project Features or URLs:** Do not fabricate project capabilities, backend stacks, architectural claims, or repository links. If information is not in `context/projects.md` or `@/data/projects.ts`, keep it explicitly marked as pending.
6. **Never Replace Verified Links Without Permission:** The GitHub URL `https://github.com/abdulkader02` and verified project URLs are real and verified. Never substitute them with mocks, dummy links, or other identities.
7. **Use Centralized Data Files:** All UI components, pages, and dynamic routes must import and consume data from the centralized TypeScript data files in [`@/data/`](../data/). Never hardcode profile data, projects, or social links directly into page components.
8. **Maintain Global Consistency:** Keep profile information, spelling, titles, and project categories 100% consistent across every page and component.
9. **Follow Design Guidelines:** Strictly follow [`context/design-guidelines.md`](./design-guidelines.md). Maintain a clean, minimalist, editorial aesthetic with white/off-white background, black typography, slate secondary text, electric blue accents, and responsive layouts. Avoid gratuitous animations and neon gradients.
10. **Preserve Existing Functionality:** When updating components or pages, do not break existing routes, type-checking, or build stability.
11. **Inspect Before Modifying:** Always inspect existing code files and configuration (`tsconfig.json`, `next.config.ts`, `components.json`, etc.) before making alterations.
12. **Ask When in Doubt:** When essential information or assets (such as CV PDF, project screenshots, or contact emails) are missing, ask the user directly rather than guessing or improvising.
13. **Do Not Unnecessarily Rewrite Existing Code:** Avoid large, destructive refactors of working files. Implement incremental, targeted improvements.
14. **Test Routes and Links:** Always verify that all application routes (`/`, `/about`, `/projects`, `/projects/[slug]`, `/resume`, `/contact`) render without runtime errors, that TypeScript types check cleanly (`npm run typecheck`), and that linter checks pass (`npm run lint`).

---

## Phase Progression Constraint

- **Phase 1 (Current):** Setup folder structure, centralized knowledge base, type definitions, data files, and minimal component/route placeholders.
- **Phase 2 (Subsequent):** UI component implementation, styling, responsive polish, and content integration.
- **Phase Rule:** Never begin Phase 2 UI implementation or design buildout without explicit authorization from the user.
