# SGAI V1 delivery report

## Site overview and design

A complete independent React, Vite, TypeScript, and Tailwind institutional review prototype, with eight main pages and thirteen individual graduate stories. The local production preview is available while the preview server is running. No public deployment or automatic deployment workflow was created.

The original visual identity uses deep navy (#142d39), warm white (#fcfbf8), and restrained gold (#b18b46), with Georgia editorial headings and an Arial/system body stack. A doorway motif connects recognition and opportunity. Wide margins, consistent section spacing, numbered programs, contrasting editorial bands, and typographic story cards create an institutional presentation. Animations are limited to subtle hover transitions with reduced-motion support.

The [SYE reference](https://www.sye-initiative.org/) informed mission-first hierarchy, clear statistics, generous spacing, and program/story organization. Its code, exact layout, copy, branding, imagery, and alumni presentation were not copied. SGAI’s image is an original, labeled illustrative study still-life; no person represents a testimonial author.

## Sitemap

- `/` — Home
- `/challenge` — The Challenge
- `/our-work` — Our Work, including anchors for all five components
- `/stories` — Graduate Stories
- `/stories/:slug` — 13 complete individual stories; exact slugs reside in `src/data/stories.json`
- `/about` — About SGAI
- `/partner-with-us` — Partnership opportunities
- `/contact` — Contact information and inquiry categories, pending approved contacts
- `/privacy` — Privacy and review information
- Unknown page and story routes show useful recovery links.

## Content and programs

The supplied proposal is the factual source for the SGAI/SSAS relationship, recognition context, statistics, proposed programs, organizational capabilities, partnership categories, accountability mechanisms, and intended impact. No independent institutional corrections, endorsements, legal status, addresses, team biographies, partner logos, funding, or achieved outcomes were invented.

The 20,000+ figure uses the proposal’s wider online-education community framing; 1,500+ describes verified graduates ready, and 2,000+ describes direct ongoing contact. Figures are explicitly distinguished from program results. The review checklist flags the proposal’s varying descriptions of the wider-community figure for SGAI confirmation.

Each program receives a purpose, explanation of its importance, key activities, and intended outcome:

1. Syrian Graduate Registry — protected evidence and verified profiles; no public database.
2. Graduate Career Development — counseling, certification support, resumes, interviews, internships, mentorship.
3. Employment Partnership Network — outreach, recruitment, matching, employer awareness.
4. Postgraduate Education Pathways — competency-based admissions, university cooperation, scholarships, online/hybrid pathways.
5. Graduate Leadership and Community Development — alumni, peer networks, community projects, advocacy, proposed summit.

## Stories and privacy

All 13 supplied testimonials are included in full. Automated comparison against the original document confirms exact narrative, title, age, region, and “My Message” preservation. Excerpts are taken directly from the supplied messages. Names, portraits, inferred gender, and identities were not added. Story pages contain anonymous context, back navigation, and related stories. The collection is data-driven and can expand using the existing schema.

The Word files, document metadata, personal contacts, private source paths, and staff identities are absent from the public source and build. The site has no graduate registration, inquiry submission, accounts, analytics, payment flow, or private database. SGAI must approve story publication and retained descriptors before public launch.

Project Second Voice is acknowledged in the footer and About page as supporting digital development. Its URL is a centralized placeholder. Nothing presents PSV as SGAI’s owner, operator, or source of institutional claims.

## Validation

- Production build: passed.
- TypeScript: passed.
- ESLint: passed.
- Dependency installation audit: zero reported vulnerabilities.
- All 21 content routes rendered successfully in the production preview; one H1 per route, noindex/nofollow metadata, and no horizontal overflow.
- Every main page checked at 375, 390, 430, 768, 1024, 1280, and 1440 pixels: 56 layout checks passed.
- All 13 full story pages checked at 375 and 1440 pixels: 26 checks passed, with narrative, message, and two related stories present.
- All eight main pages checked in mirrored RTL at 375, 768, and 1440 pixels: 24 checks passed.
- All eight main pages checked with 200% root text size at 375, 768, and 1440 pixels: 24 final checks passed after reflow corrections.
- Mobile menu: open/close, link navigation, focus cycling, and Escape-to-toggle behavior checked.
- All five program anchors resolve. A cold production deep-link navigation positions its target beneath the sticky header.
- All discovered internal link destinations correspond to implemented routes or anchors.
- Descriptive image alt text, semantic navigation and headings, visible focus styling, skip link, route focus handling, touch controls, and reduced-motion support are included.
- Homepage computed text/background contrast check passed; the illustrative caption is separately supported by its dark image background and shadow.
- Main designs and representative reading layouts reviewed visually. This is implementation QA, not a certified WCAG conformance audit or a multi-browser lab test.
- Fresh production browser console: no errors or warnings across all 21 routes.

## Performance and metadata

Production output is approximately 331 KB initial JavaScript (106 KB gzip), 31 KB CSS (8 KB gzip), and about 14 KB combined lazy page chunks (4 KB gzip). The sole image is a locally served 294 KB JPEG. Fonts are system-resident, image dimensions are reserved, and no third-party tracking or font requests are made. Core Web Vitals field scores were not measured.

Route titles, descriptions, Open Graph text, canonical configuration, favicon, robots policy, and sitemap generation architecture are included. Review mode defaults to noindex/nofollow in HTML, runtime metadata, robots.txt, and compatible-host headers. A sitemap is only produced after public mode and an approved origin are configured. A real social-preview image remains unconfigured. Client-rendered metadata can be complemented with prerendering for public-launch crawler coverage.

## Localization and expansion

Common UI text and editorial copy are centralized in English language resources. Institutional datasets and story records are separate from page presentation. CSS uses logical spacing and direction-aware arrows. Arabic-capable fallbacks and development-only RTL checks are available, but no official Arabic translation or public language switch is published.

Future media, reports, resources, opportunities, scholarships, and partner collections can use the same page modules, data structure, shared components, and tokens. A CMS can replace local collection sources. A secure graduate portal or registry requires a separate authenticated backend and privacy design.

## Handoff and important files

- `src/pages/` — Home, story directory/detail pages, institutional pages
- `src/components/` — Shared layout, cards, calls to action, metadata
- `src/data/` — Programs, statistics, partnerships, capabilities, impact, all stories
- `src/locales/` — English editorial/interface copy and locale entry point
- `src/config.ts` — Centralized unconfirmed contact, logo, domain, partner, social, and PSV settings
- `src/styles.css` — Responsive design system
- `public/` — Original favicon, optimized illustrative image, static-host defaults
- `vite.config.ts` — Build and unified indexing policy
- `README.md` — Local operation, content editing, deployment, localization, expansion
- `docs/SGAI_REVIEW_CHECKLIST.md` — Institutional, privacy, brand, and publication review
- `docs/IMAGE_PROVENANCE.md` — Image source, complete generation prompt, and usage context

Source control destination: `https://github.com/Project-Second-Voice/SGAI.git`, primary branch `main`. Commit message: “Build SGAI institutional website prototype.” The delivery message records the resulting commit and push verification.

## Remaining decisions

SGAI needs to confirm factual language, statistics, SSAS relationship wording, all story publication approvals, logo and visual identity, contacts, domain, social accounts, Arabic translations, programs, partnership language, PSV acknowledgement/link, and any media/interview material. These are centralized in the review checklist. Noindex is not access control; a deployed review must use a private or authenticated hosting arrangement. The current preview stays on the local computer.
