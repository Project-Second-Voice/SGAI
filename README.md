# Syrian Graduate Advancement Initiative

An independent institutional website prototype for SGAI, led by the Syrian Supreme Authority for Students (SSAS).

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

`noindex` / `nofollow` and robots directives discourage indexing; they are not authentication. Use an access-controlled host before sharing a deployed review. Nothing in this repository deploys automatically. The private Sites review deployment is configured in `.openai/hosting.json`; see `docs/DEPLOYMENT.md`.

## Content and configuration

| File                            | Responsibility                                                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `src/config.ts`                 | Review mode; approved domain, contacts, official logo, PSV URL, social and partner placeholders                       |
| `src/locales/en.ts`             | Navigation and common interface language                                                                              |
| `src/locales/editorial.en.json` | Page copy and editorial headings                                                                                      |
| `src/locales/index.ts`          | Active language exports; currently approved English only                                                              |
| `src/data/institution.ts`       | Statistics, five programs, intended impact, partnership categories, capabilities, accountability, recognition pathway |
| `src/data/stories.json`         | All 13 supplied anonymous narratives, messages, excerpts, ages and regions                                            |
| `src/components/Metadata.tsx`   | Route metadata and canonical URLs                                                                                     |
| `src/styles.css`                | Design tokens, responsive layouts, focus states, logical-direction properties                                         |

Add stories by appending the same record schema with a unique, stable slug. Preserve the approved narrative and anonymity. The directory, detail routes, related-story navigation, and story count derive from data. Homepage featured stories are selected in `Home.tsx`. Do not add inferred gender, identities, or portraits. If stories are removed, update homepage selections as well.

## Languages and RTL

English editorial copy is separated from presentation. Common UI copy, program data, stories, metadata, and any remaining accessibility labels must also be included in the approved translation workflow. Add the reviewed Arabic equivalents, wire the locale resolver, and enable Arabic only after approval. Do not expose an incomplete locale. Use an Arabic-capable font (the stack includes Noto Sans Arabic with a system fallback) and set both `lang` and `dir`.

Development-only checks: append `?qa=rtl` to mirror layout or `?qa=large-text` for 200% root text size. These hooks are compiled out of the production build. The footer’s Arabic note means Arabic is in preparation; it is not a language switch.

## Hosting and indexing

A static host must rewrite application routes to `/index.html`. `_redirects` supplies this rule for compatible hosts; configure equivalent rewrites elsewhere. `_headers` supplies review indexing and basic security headers where supported.

After all approvals in `docs/SGAI_REVIEW_CHECKLIST.md`, set the confirmed `canonicalOrigin`, then change `reviewMode` to `false` and rebuild. Vite updates the HTML robots tag, generated robots.txt, and X-Robots-Tag policy together and produces a sitemap only when public mode and a canonical origin are configured. Client route titles/descriptions and canonical URLs update during navigation. Prerendering can improve crawler/social-bot coverage at public launch; no social image has been invented.

Configure a genuine inquiry destination and privacy policy before introducing a form. Simply filling `contactEndpoint` does not activate a backend. The placeholder logo is an original doorway motif, pending official SGAI branding.

## Expansion

New media, reports, resources, and opportunities can be introduced as typed collections with page modules using the shared layout, metadata conventions, and design tokens. A CMS can supply the current content schema without replacing the UI. A graduate portal, application intake, scholarships directory, or private registry requires separate backend, authentication, access controls, and privacy design; none should expose the anonymous-story dataset as an identity directory.

See `docs/V1_REPORT.md` for scope and validation, and `docs/IMAGE_PROVENANCE.md` for the illustrative image.
