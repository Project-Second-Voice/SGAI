# SGAI bilingual implementation

The existing SGAI design has been refined without replacing its approved visual direction. English remains at `/`; a complete Arabic experience is available under `/ar`, with route-preserving language switching, true RTL, localized metadata, Arabic interface language, institutional content, program data, and all 13 anonymous graduate stories.

## Visual communication

- Prominent factual KPI cards present 20,000+ students and graduates connected to online higher education, 1,500+ direct student/graduate connections, and three educational fields.
- The three fields are represented with icon cards; no distributions or percentages are invented.
- The five-program framework remains data-driven and is presented as a responsive visual sequence.
- Current work uses concise status cards.
- The long-term strategy is a six-step responsive pathway.
- The planned Damascus gathering has a dedicated feature with an “In planning” badge, location, reach, participants, focus, and an explicit logistics/media note.
- The Media page is ready for verified interviews, news, events, reports, and press materials and does not fabricate coverage.

## Institutional accuracy and privacy

- SGAI remains the current public-facing identity. SSAS / `الهيئة العليا للطلاب` is described as an intended institutional identity, not a governmental authority or Ministry agency.
- Qualification-recognition copy is framed around reported/documented graduate barriers rather than a universal claim about foreign degrees.
- Project Second Voice is presented as Strategic Partner and Collaborating Partner without implying ownership or control.
- Jonathan Wang’s role appears on the About page as Director of International Partnerships & Digital Strategy.
- The long-term pathway is explicitly future-facing and does not imply current Ministry ownership, endorsement, or guaranteed adoption.
- All stories remain anonymous; no private graduate registry, records, contact list, payments, donations, analytics, accounts, or inquiry backend are included.

## Technical architecture

English and Arabic use the same React pages and reusable components. Route-aware locale helpers select centralized UI/editorial resources and localized institution/story datasets. CSS uses logical properties and direction-aware treatments. GitHub Pages generation includes English and Arabic direct-route entry points, story detail routes, Media, and 404 recovery. Review labels and `noindex, nofollow` remain enabled.
