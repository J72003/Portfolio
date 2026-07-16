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

## ⚠️ Before you publish — review checklist

### 1. Links (`src/data/links.ts`)
Done:
- [x] Public email — `kahlonjaspalwork@gmail.com`
- [x] LinkedIn — `https://www.linkedin.com/in/jaspalkahlon720/`
- [x] GitHub — `https://github.com/J72003`
- [x] Résumé PDF — bundled at `public/Jaspal-Kahlon-Resume.pdf`, served at `/Jaspal-Kahlon-Resume.pdf`

Still needed (these show a small ⚑add marker until set):
- [ ] Live InverteQuest application URL
- [ ] InverteQuest repository URL
- [ ] PortrAid ACM publication URL (dl.acm.org/doi/10.1145/3696673.3723059)
- [ ] Portfolio domain
- [ ] Photography portfolio URL

### 1b. Case-study overlay images (the "open images section")
Clicking a poster on the home page opens a full-screen case-study overlay (cover ·
description · Role/Tools/Client/Year). Each overlay has an **open images section** with
labeled placeholder slots. To fill them, edit `src/data/projectDetails.ts` → each project's
`images: [...]` array holds the caption labels; replace the `.pd__frame-ph` placeholder in
`src/components/ProjectDetail.tsx` with real `<img>` tags (drop files in `public/`). Meta
copy (role/tools/client/description/highlights) also lives in `projectDetails.ts`.

### 2. Images I still need to upload (replace the placeholders)
Professional portrait · InverteQuest: phone interface, site dashboard, specimen detection, model
comparison, classroom dashboard · PortrAid interface + architecture · Frost research diagram ·
APIDA Cultural Night · Holi · Ramadan Nights · El Espejo photography · Streetwear poster · Fright
Film Fest · ACM conference · Honors symposium · HackUTD · Awards/certificates. Add a 60–90s
InverteQuest demo video. Use only genuine images — no misleading documentary photography.

### 3. Contributions I must confirm
- [ ] **InverteQuest** (`invertequest.ts` → `contributions`): remove anything not 100% accurate; keep
      your individual implementation separate from team/faculty/prior-researcher work.
- [ ] **PortrAid** (`research.ts` → "My contributions" section is marked editable): fill in your
      specific role; do **not** claim sole authorship of collaborative research.

### 4. Metrics requiring documentation
- [ ] Frost: "21% deposit increase / ~7% decline" and "50-participant study" — keep only if you can
      support them; they are presented as your findings, with no proprietary Frost data included.
- [ ] ASA: ~$200 → ~$4,000 funding, 50+ volunteers, 100+ attendees — labeled on-site as
      organization-supplied and not independently verified. Confirm they're fair to state.
- [ ] Banking Analytics: 887,000 records, 22.15% default rate — labeled as a 2015–2018 historical
      dataset, not current LendingClub performance.
- [ ] InverteQuest: 83.9% mAP is shown as a **detection training metric**, never as general accuracy.
- [ ] PortrAid: a second metric slot is an editable placeholder — fill or remove it.

### 5. Awards requiring exact category names
- [ ] TIPA Environmental Portrait — confirm exact category/placement wording
- [ ] SPJ Region 8 Mark of Excellence — confirm "finalist" and the project credit
- [ ] El Espejo MediaFest — confirm you were a contributor during that recognition (publication-level
      honor is **not** presented as your individual award)
- [ ] HackUTD "Frontier Internet track, 2nd place" — confirm track name and placement
- [ ] Texas STEM Signing Day (Boeing) — confirm exact program name

### 6. Wording that could accidentally overstate your role — already softened, please verify
- Fright Film Fest uses **"helped launch and produce"** (not "founded/sole creator")
- Cultural events use **"co-led planning and coordination"**
- Ramadan Nights does **not** claim you founded it
- ACM lists only verified responsibilities; **no** formal "Jag-AI" role is claimed
- El Espejo individual vs. publication/team recognition are kept in separate columns
- The Fright Film Fest quote is flagged — confirm the exact wording and source before publishing

### 7. Accuracy guardrails honored (per your Content Accuracy Rules §23)
No invented users, adoption, production deployment, or combined RF-DETR+Claude accuracy; mAP is not
translated to accuracy; taxa are called "taxa," not "species"; Claude's rationale is described as
educational, not mechanistic explainability; no API keys, customer data, or unverified URLs.
