# Jaspal Singh Kahlon — Portfolio

A responsive, accessible React + TypeScript portfolio presenting Jaspal Singh Kahlon as a
**human-centered AI builder**. Built with Vite and React Router. All content is data-driven so it
can be edited without touching layout code.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks + builds to /dist
npm run preview  # preview the production build
```

## Where to edit content

Everything lives in `src/data/` — edit these files, not the components:

| File | Contains |
|------|----------|
| `links.ts` | **All external URLs** (email, LinkedIn, GitHub, résumé PDF, live app, repo, publication, domain, photography). Replace every `#TODO-…` value. |
| `profile.ts` | Headlines, hero copy, proof points, "at a glance", "how I work" |
| `experience.ts` | Frost Bank (only formal work entry) |
| `invertequest.ts` | Flagship case study |
| `research.ts` | PortrAid + Streetwear |
| `projects.ts` | Banking Analytics, DealerLot, HackUTD |
| `leadership.ts` | ASA, campus timeline, Fright Film Fest |
| `storytelling.ts` | El Espejo photography & journalism |
| `awards.ts` | Recognition wall (typed by Individual/Team/Publication/Scholarship/Program) |
| `skills.ts` | Skills, education, certifications, Claude Corps matrix |

Links still set to a `#TODO` value render with a small **⚑add** marker on the site so nothing ships
with a dead button by accident.

## Accessibility / quality features

- Semantic HTML, skip-link, visible focus states, keyboard-operable tabs and menu
- Sticky nav with reading-progress indicator and accessible mobile menu
- `prefers-reduced-motion` respected; print stylesheet for the résumé
- No skill-percentage bars, no invented metrics, no exposed credentials, no real API calls

---



### 7. Accuracy guardrails honored (per your Content Accuracy Rules §23)
No invented users, adoption, production deployment, or combined RF-DETR+Claude accuracy; mAP is not
translated to accuracy; taxa are called "taxa," not "species"; Claude's rationale is described as
educational, not mechanistic explainability; no API keys, customer data, or unverified URLs.
