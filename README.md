# Syrian Graduate Advancement Initiative

An independent bilingual institutional website prototype for the Syrian Graduate Advancement Initiative (SGAI). The team has discussed the intended identity Syrian Supreme Authority for Students (SSAS), or `الهيئة العليا للطلاب`; it is not currently an official governmental authority or Ministry agency.

Repository: `Project-Second-Voice/SGAI`. This project has no dependency on, or deployment connection to, Camino, Broad Shoulders, or the Project Second Voice website.

## Run locally

Use Node.js 22.12+ (Node 24 recommended) and npm.

```sh
npm ci
npm run dev
```

The server binds to loopback only. Open the local URL printed by Vite.

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

Production output is `dist/`. Keep the source documents outside the repository.

## Review status

This is a review prototype, not a public launch. No backend, inquiry collection, graduate registry, analytics, account system, donation processing, or public partner agreements are implemented or implied. Contact details are intentionally unconfigured.

`noindex` / `nofollow` and robots directives discourage indexing; they are not authentication. The public GitHub Pages deployment builds automatically on pushes to `main`. Review labels and indexing restrictions remain enabled. See `docs/DEPLOYMENT.md` for hosting configuration.

## Content and configuration

| File                            | Responsibility                                                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `src/config.ts`                 | Review mode; approved domain, contacts, official logo, PSV URL, social and partner placeholders                       |
| `src/locales/en.ts`, `ar.ts`    | English and Arabic navigation and common interface language                                                            |
| `src/locales/editorial.*.json`  | English and Arabic page copy, editorial headings, and interface labels                                                |
| `src/locales/index.ts`          | Route-aware locale resolution, localized paths, and direction helpers                                                  |
| `src/data/institution.ts`       | Bilingual statistics, programs, strategy, initiatives, partnerships, and recognition pathway                          |
| `src/data/stories*.json`        | All 13 supplied anonymous narratives in English and Arabic, with shared stable slugs                                  |
| `src/components/Metadata.tsx`   | Route metadata and canonical URLs                                                                                     |
| `src/styles.css`                | Design tokens, responsive layouts, focus states, logical-direction properties                                         |

Add stories by appending the same record schema with a unique, stable slug. Preserve the approved narrative and anonymity. The directory, detail routes, related-story navigation, and story count derive from data. Homepage featured stories are selected in `Home.tsx`. Do not add inferred gender, identities, or portraits. If stories are removed, update homepage selections as well.

## Languages and RTL

English lives at `/`; Arabic lives at `/ar`. The language selector preserves the current route and stores the selected preference. Page copy, common UI, programs, institutional data, stories, metadata, labels, empty states, and errors are localized through centralized resources rather than duplicated pages. Arabic sets `lang="ar"` and `dir="rtl"`, uses an Arabic-capable font stack, logical CSS properties, and direction-aware arrows and timelines.

When adding or editing public content, update both locales and preserve story slugs across `stories.json` and `stories.ar.json`. Development-only large-text QA remains available with `?qa=large-text`.

## Hosting and indexing

A static host must rewrite application routes to `/index.html`. `_redirects` supplies this rule for compatible hosts; configure equivalent rewrites elsewhere. `_headers` supplies review indexing and basic security headers where supported.

After all approvals in `docs/SGAI_REVIEW_CHECKLIST.md`, set the confirmed `canonicalOrigin`, then change `reviewMode` to `false` and rebuild. Vite updates the HTML robots tag, generated robots.txt, and X-Robots-Tag policy together and produces a sitemap only when public mode and a canonical origin are configured. Client route titles/descriptions and canonical URLs update during navigation. Prerendering can improve crawler/social-bot coverage at public launch; no social image has been invented.

Configure a genuine inquiry destination and privacy policy before introducing a form. Simply filling `contactEndpoint` does not activate a backend. The placeholder logo is an original doorway motif, pending official SGAI branding.

## Expansion

New media, reports, resources, and opportunities can be introduced as typed collections with page modules using the shared layout, metadata conventions, and design tokens. A CMS can supply the current content schema without replacing the UI. A graduate portal, application intake, scholarships directory, or private registry requires separate backend, authentication, access controls, and privacy design; none should expose the anonymous-story dataset as an identity directory.

See `docs/BILINGUAL_IMPLEMENTATION_REPORT.md` for current scope, `docs/V1_REPORT.md` for the historical prototype report, and `docs/IMAGE_PROVENANCE.md` for the illustrative image.
