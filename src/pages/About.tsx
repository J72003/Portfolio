import { useState } from "react";
import { Link } from "react-router-dom";
import { PROFILE, PROOF_POINTS, HERO_FLOW, AT_A_GLANCE, HOW_I_WORK } from "../data/profile";
import { SKILL_GROUPS, EDUCATION, CLAUDE_CORPS } from "../data/skills";
import { SectionHeader, Figure, EditableNote, SmartLink } from "../components/common";

const ABOUT_PARAGRAPHS = [
  "I am a computer science graduate and human-centered AI builder based in San Antonio. My work has taken me from banking product research and peer-reviewed computer-vision research to freshwater environmental monitoring, community leadership, journalism, photography, and cultural programming.",
  "Although those experiences appear broad, they rely on the same ability: entering an unfamiliar environment, understanding the people and constraints, translating ambiguity into a practical system, and explaining the result clearly.",
  "I am particularly interested in roles where technology must work for people who are not technical specialists, educators, researchers, nonprofit staff, public-interest organizations, small-business teams, and communities.",
];

export default function About() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <article>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About</div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr", gap: "2.5rem", alignItems: "start" }}
            className="feature-split"
          >
            <div>
              <h1>{PROFILE.name}</h1>
              <p className="lede">
                {PROFILE.headline} · {PROFILE.location}
              </p>
              {ABOUT_PARAGRAPHS.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
              <div className="btn-row" style={{ marginTop: "1rem" }}>
                <SmartLink linkKey="resumePdf" className="text-link">
                  Download Résumé ↓
                </SmartLink>
                <SmartLink linkKey="github" className="text-link">
                  GitHub ↗
                </SmartLink>
                <SmartLink linkKey="linkedin" className="text-link">
                  LinkedIn ↗
                </SmartLink>
              </div>
            </div>
            <Figure src="/images/photo/Jay.jpg" label="Jaspal Singh Kahlon" caption="Jaspal Singh Kahlon, graduation, with the ASA stole" tall />
          </div>
        </div>
      </section>

      {/* PROOF POINTS */}
      <section className="container" style={{ paddingTop: "0.5rem" }}>
        <div className="proof">
          {PROOF_POINTS.map((p) => (
            <div className="proof__item" key={p.title}>
              <strong>{p.title}</strong>
              {p.text}
            </div>
          ))}
        </div>
      </section>

      {/* THROUGH-LINE */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="The through-line"
            title="One thread runs through all of it"
            lede={PROFILE.centralStory}
          />
          <div className="flow" role="list" aria-label="How the work connects">
            {HERO_FLOW.map((s, i) => (
              <div className="flow__step" role="listitem" key={s.label}>
                <span className="flow__num">0{i + 1}</span>
                <span className="flow__label">{s.label}</span>
                <p className="flow__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeader eyebrow="At a glance" title="Verified facts, no inflation" />
          <div className="grid-3">
            {AT_A_GLANCE.map((item) => (
              <div className="card" key={item.label}>
                <h4 style={{ marginBottom: "0.2rem" }}>{item.label}</h4>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How I work"
            title="A five-stage way of working"
            lede="The same method whether the domain is banking, freshwater science, or a student organization."
          />
          <div className="tabs" role="tablist" aria-label="How I work stages">
            {HOW_I_WORK.map((s, i) => (
              <button
                key={s.stage}
                role="tab"
                id={`how-tab-${i}`}
                aria-selected={activeStage === i}
                aria-controls={`how-panel-${i}`}
                className="tabs__btn"
                onClick={() => setActiveStage(i)}
              >
                {s.stage}
              </button>
            ))}
          </div>
          <div
            className="tabpanel"
            role="tabpanel"
            id={`how-panel-${activeStage}`}
            aria-labelledby={`how-tab-${activeStage}`}
          >
            <p style={{ fontSize: "1.1rem" }}>{HOW_I_WORK[activeStage].text}</p>
            <div className="chip-row" style={{ marginTop: "1rem" }}>
              {HOW_I_WORK[activeStage].evidence.map((e) => (
                <span className="chip chip--accent" key={e}>
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeader title="Education" />
          <div className="card" style={{ maxWidth: "720px" }}>
            <h3 style={{ marginBottom: "0.2rem" }}>{EDUCATION.institution}</h3>
            <p style={{ margin: "0 0 0.3rem", fontWeight: 600 }}>{EDUCATION.degree}</p>
            <p style={{ fontFamily: "var(--mono)", fontSize: "0.82rem", color: "var(--ink-faint)" }}>
              Graduated {EDUCATION.graduation}
            </p>
            <div className="chip-row">
              {EDUCATION.highlights.map((h) => (
                <span className="chip chip--accent" key={h}>
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "1.5rem", maxWidth: "760px" }}>
            <h4>Certifications & training</h4>
            <div className="grid-2" style={{ marginBottom: "1rem" }}>
              {EDUCATION.certifications
                .filter((c) => "verified" in c && c.verified)
                .map((c) => (
                  <div className="card" key={c.name} style={{ padding: "1rem 1.2rem" }}>
                    <strong style={{ display: "block" }}>{c.name}</strong>
                    <span style={{ fontSize: "0.88rem", color: "var(--ink-soft)" }}>
                      {c.issuer} · Issued {c.date}
                    </span>
                    <div style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--ink-faint)", marginTop: "0.3rem" }}>
                      Credential ID {c.id}
                    </div>
                  </div>
                ))}
            </div>
            <div className="chip-row">
              {EDUCATION.certifications
                .filter((c) => !("verified" in c && c.verified))
                .map((c) => (
                  <span className="chip" key={c.name}>
                    {c.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Skills"
            lede="Organized by practical capability, no percentage bars, no invented proficiency levels."
          />
          <div className="grid-2">
            {SKILL_GROUPS.map((g) => (
              <div className="card" key={g.group}>
                <h4 style={{ color: "var(--accent-deep)" }}>{g.group}</h4>
                <div className="chip-row">
                  {g.items.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLAUDE CORPS ALIGNMENT */}
      <section className="section section--tint">
        <div className="container">
          <div className="eyebrow">Fit for embedded AI work</div>
          <SectionHeader
            title="Why My Background Fits Embedded AI Work"
            lede="A capability matrix, kept factual and understated."
          />
          <div className="grid-2">
            {CLAUDE_CORPS.map((c) => (
              <div className="card" key={c.capability}>
                <h4>{c.capability}</h4>
                <ul style={{ margin: 0, fontSize: "0.9rem" }}>
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: "2rem", justifyContent: "center" }}>
            <Link to="/contact" className="btn btn--accent">
              Let's build something useful
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
