import { useState } from "react";
import { PROFILE } from "../data/profile";
import { FROST } from "../data/experience";
import { EDUCATION } from "../data/skills";
import { SmartLink } from "../components/common";
import { LINKS, isPlaceholder } from "../data/links";

const emailDisplay = isPlaceholder(LINKS.email) ? "[add email]" : LINKS.email;

type Filter = "All" | "AI" | "Product" | "Research" | "Leadership" | "Communication";
const FILTERS: Filter[] = ["All", "AI", "Product", "Research", "Leadership", "Communication"];

interface Entry {
  title: string;
  meta: string;
  period: string;
  points: string[];
  tags: Filter[];
  link?: string;
}

const PROJECTS_R: Entry[] = [
  {
    title: "InverteQuest, Claude-Powered Freshwater Bioassessment Platform",
    meta: "Flagship project · React Native, Supabase, RF-DETR, Claude Haiku",
    period: "Project",
    link: "/invertequest",
    tags: ["AI", "Product", "Research"],
    points: [
      "Built a cross-platform field app identifying 13 macroinvertebrate taxa with two independent AI analyses (RF-DETR + Claude Haiku).",
      "Implemented offline capture, GPS-tagged observations, and automatic FBI and EPT richness calculations.",
      "Designed responsible-AI flow: shows model agreement/disagreement, keeps human review, server-side API keys.",
    ],
  },
  {
    title: "PortrAid, AI-Driven Portrait Composition Assistant",
    meta: "ACM Southeast 2025 · Modified ResNet-50 (collaborative, faculty-advised)",
    period: "Research",
    link: "/research",
    tags: ["AI", "Research"],
    points: [
      "Published and presented computer-vision research on portrait composition; 91.84% baseline accuracy.",
      "Evaluated with precision, recall, F1, failure-case analysis, Grad-CAM, and Integrated Gradients.",
    ],
  },
  {
    title: "Banking Analytics Dashboard",
    meta: "Python, SQL",
    period: "Project",
    link: "/projects",
    tags: ["Product", "Research"],
    points: [
      "Analyzed 887,000+ LendingClub loan records (2015–2018) for lending, default, and portfolio-risk patterns.",
    ],
  },
  {
    title: "DealerLot, Used-Car Inventory & Valuation App",
    meta: "React, TypeScript, Node",
    period: "Project",
    link: "/projects",
    tags: ["Product"],
    points: ["Full-stack inventory and valuation app with confidence bands, aging analysis, and CI/Vercel deployment."],
  },
  {
    title: "HackUTD, Frontier Internet (2nd place, team)",
    meta: "Hybrid recommendation, collaborative filtering",
    period: "Hackathon",
    link: "/projects",
    tags: ["AI", "Product"],
    points: ["Second-place team project building a hybrid recommendation concept under time pressure."],
  },
  {
    title: "Streetwear Across the World (3rd place, Honors Symposium)",
    meta: "Digital-humanities research",
    period: "2026",
    link: "/research",
    tags: ["Research", "Communication"],
    points: ["Interdisciplinary research on streetwear, culture, and globalization with an interactive digital experience."],
  },
];

const LEADERSHIP_R: Entry[] = [
  {
    title: "Co-President, Asian Student Association, TAMU-SA",
    meta: "Community leadership",
    period: "Campus",
    link: "/leadership",
    tags: ["Leadership", "Communication"],
    points: [
      "Grew available funding from ~$200 to ~$4,000; collaborated with five organizations.",
      "Coordinated 50+ volunteers; major events regularly reached 100+ attendees; formalized a reusable handoff framework.",
    ],
  },
  {
    title: "Photographer & Visual Contributor, El Espejo",
    meta: "Journalism & photography",
    period: "Campus",
    link: "/storytelling",
    tags: ["Communication"],
    points: [
      "3rd place, TIPA Environmental Portrait (individual); SPJ Region 8 Mark of Excellence finalist (team).",
    ],
  },
  {
    title: "Campus roles",
    meta: "ACM officer · Jaguar Ambassador · Presidential Leadership Class · Rec Sports supervisor",
    period: "Campus",
    link: "/leadership",
    tags: ["Leadership"],
    points: ["Supported the student computing community, university representation, and campus recreation operations."],
  },
];

export default function Resume() {
  const [filter, setFilter] = useState<Filter>("All");
  const show = (e: Entry) => filter === "All" || e.tags.includes(filter);

  return (
    <article>
      <section className="section">
        <div className="container">
          <div className="no-print" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <div>
              <div className="eyebrow">Interactive résumé</div>
              <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Résumé</h1>
            </div>
            <div className="btn-row">
              <button className="btn btn--accent" onClick={() => window.print()}>
                Print / Save PDF
              </button>
              <SmartLink linkKey="resumePdf" className="btn btn--outline">
                Download PDF
              </SmartLink>
            </div>
          </div>

          <div className="no-print tabs" role="tablist" aria-label="Filter résumé">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className="tabs__btn"
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* SHEET */}
          <div className="resume-sheet">
            <h2>{PROFILE.name}</h2>
            <p style={{ margin: "0 0 0.3rem", fontWeight: 600 }}>{PROFILE.headline}</p>
            <p style={{ fontFamily: "var(--mono)", fontSize: "0.8rem", color: "var(--ink-soft)" }}>
              {PROFILE.location} · {emailDisplay}
              {" · "}
              LinkedIn / GitHub / Portfolio links to be added
            </p>
            <p style={{ fontSize: "0.92rem" }}>{PROFILE.centralStory}</p>

            {/* WORK, Frost only */}
            <h3>Work Experience</h3>
            <div className="resume-entry">
              <div className="resume-entry__head">
                <strong>
                  {FROST.title}, {FROST.org}
                </strong>
                <span className="resume-entry__period">{FROST.dates}</span>
              </div>
              <p style={{ margin: "0.1rem 0 0", fontSize: "0.85rem", color: "var(--ink-faint)" }}>
                {FROST.location}
              </p>
              <ul>
                <li>Ran a 50-participant Savings Goals adoption study; defined North Star metric, KPIs, and a counter-metric.</li>
                <li>Competitive research across 13+ institutions; funnel and gap analysis with SQL and Python.</li>
                <li>Translated findings into user stories and acceptance criteria; presented to product and business leadership.</li>
              </ul>
              <p style={{ fontSize: "0.75rem", color: "var(--ink-faint)", fontFamily: "var(--mono)" }}>
                Only formal work-experience entry. No proprietary or customer data included.
              </p>
            </div>

            {/* PROJECTS */}
            <h3>Projects & Research</h3>
            {PROJECTS_R.map((e) => (
              <div key={e.title} className={`resume-entry${show(e) ? "" : " is-dimmed"}`}>
                <div className="resume-entry__head">
                  <strong>{e.title}</strong>
                  <span className="resume-entry__period">{e.period}</span>
                </div>
                <p style={{ margin: "0.1rem 0 0", fontSize: "0.85rem", color: "var(--ink-faint)" }}>
                  {e.meta}
                </p>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* LEADERSHIP */}
            <h3>Leadership, Communication & Service</h3>
            {LEADERSHIP_R.map((e) => (
              <div key={e.title} className={`resume-entry${show(e) ? "" : " is-dimmed"}`}>
                <div className="resume-entry__head">
                  <strong>{e.title}</strong>
                  <span className="resume-entry__period">{e.period}</span>
                </div>
                <p style={{ margin: "0.1rem 0 0", fontSize: "0.85rem", color: "var(--ink-faint)" }}>
                  {e.meta}
                </p>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* EDUCATION */}
            <h3>Education</h3>
            <div className="resume-entry">
              <div className="resume-entry__head">
                <strong>{EDUCATION.degree}</strong>
                <span className="resume-entry__period">{EDUCATION.graduation}</span>
              </div>
              <p style={{ margin: "0.1rem 0 0", fontSize: "0.85rem", color: "var(--ink-faint)" }}>
                {EDUCATION.institution}, {EDUCATION.highlights.join(" · ")}
              </p>
            </div>
          </div>

          {/* ATS text alternative */}
          <details className="expand no-print" style={{ marginTop: "1.5rem" }}>
            <summary>ATS-friendly plain-text version</summary>
            <div className="expand__body">
              <pre style={{ whiteSpace: "pre-wrap", fontFamily: "var(--mono)", fontSize: "0.8rem", lineHeight: 1.5 }}>
{`${PROFILE.name}
${PROFILE.headline}, ${PROFILE.location}
Email: ${emailDisplay} | LinkedIn: [add] | GitHub: [add] | Portfolio: [add]

SUMMARY
${PROFILE.centralStory}

WORK EXPERIENCE
${FROST.title}, ${FROST.org} (${FROST.location}), ${FROST.dates}
- Ran a 50-participant Savings Goals adoption study; defined North Star metric, KPIs, counter-metric.
- Competitive research across 13+ financial institutions; funnel and gap analysis with SQL and Python.
- Translated findings into user stories and acceptance criteria; presented to product and business leadership.

PROJECTS & RESEARCH
- InverteQuest: Claude-powered freshwater bioassessment app (React Native, Supabase, RF-DETR, Claude Haiku). 13 taxa, dual-model analysis, offline field workflow, FBI/EPT calculations.
- PortrAid: ACM Southeast 2025 published computer-vision research (modified ResNet-50), 91.84% baseline accuracy, collaborative/faculty-advised.
- Banking Analytics Dashboard: analyzed 887,000+ LendingClub loan records (Python, SQL).
- DealerLot: full-stack used-car inventory & valuation app (React, TypeScript, Node).
- HackUTD Frontier Internet: 2nd place, team hybrid recommendation project.
- Streetwear Across the World: 3rd place, San Antonio Honors Research Symposium 2026.

LEADERSHIP & COMMUNICATION
- Co-President, Asian Student Association, TAMU-SA: grew funding ~$200 to ~$4,000; 50+ volunteers; 100+ attendees.
- Photographer/Visual Contributor, El Espejo: 3rd place TIPA Environmental Portrait; SPJ Mark of Excellence finalist (team).
- ACM officer, Jaguar Ambassador, Presidential Leadership Class, Recreational Sports supervisor.

EDUCATION
${EDUCATION.degree}, ${EDUCATION.institution} (${EDUCATION.graduation})
Honors College; NSF S-STEM Scholar; DoD VICEROY Scholar; Presidential Leadership Class.`}
              </pre>
            </div>
          </details>
        </div>
      </section>
    </article>
  );
}
