import { useState } from "react";
import { INVERTEQUEST as IQ } from "../data/invertequest";
import {
  SectionHeader,
  Placeholder,
  Figure,
  MetricCard,
  Callout,
  EditableNote,
  SmartLink,
} from "../components/common";

export default function InverteQuest() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <article>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Flagship case study</div>
          <h1>{IQ.title}</h1>
          <p className="lede">{IQ.subtitle}</p>
          <p style={{ maxWidth: "70ch" }}>{IQ.overview}</p>
          <div className="btn-row" style={{ marginTop: "1.4rem" }}>
            <SmartLink linkKey="inverteQuestApp" className="btn btn--accent">
              Live app
            </SmartLink>
            <SmartLink linkKey="inverteQuestRepo" className="btn btn--outline">
              Repository
            </SmartLink>
            <a href="#research-history" className="btn btn--outline">
              Research history
            </a>
          </div>
        </div>
      </section>

      {/* 6A PROBLEM */}
      <section className="cs-section">
        <div className="container">
          <span className="cs-num">6A, Problem</span>
          <SectionHeader title="Bioassessment is slow to reach the people learning from it" />
          <p style={{ maxWidth: "70ch" }}>{IQ.problem.intro}</p>
          <div className="grid-2" style={{ marginTop: "1rem" }}>
            <div className="card">
              <h4>Traditional bioassessment can require</h4>
              <ul>
                {IQ.problem.traditional.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="card card--accent">
              <h4>What InverteQuest changes</h4>
              <p style={{ margin: 0 }}>{IQ.problem.resolution}</p>
            </div>
          </div>
          <blockquote className="pull">{IQ.productQuestion}</blockquote>
        </div>
      </section>

      {/* 6B SCIENCE */}
      <section className="cs-section">
        <div className="container">
          <span className="cs-num">6B, Science</span>
          <SectionHeader
            title="Two water-quality metrics"
            lede="The app calculates recognized stream-health indicators, but does not certify results."
          />
          <div className="grid-2">
            <div>
              <h3>Family Biotic Index (FBI)</h3>
              <p>{IQ.science.fbiIntro}</p>
              <div className="table-wrap">
                <table className="grades">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>FBI range</th>
                      <th>Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {IQ.science.grades.map((g) => (
                      <tr key={g.grade}>
                        <td>
                          <span className="grade-dot" style={{ background: g.color }} />
                          {g.grade}
                        </td>
                        <td>{g.range}</td>
                        <td>{g.label}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3>EPT Richness</h3>
              <p>{IQ.science.eptIntro}</p>
              <div className="chip-row" style={{ marginBottom: "1rem" }}>
                {IQ.science.eptOrders.map((o) => (
                  <span className="chip chip--accent" key={o}>
                    {o}
                  </span>
                ))}
              </div>
              <p>{IQ.science.eptNote}</p>
            </div>
          </div>
          <Callout warn>
            <p style={{ margin: 0 }}>{IQ.science.caveat}</p>
          </Callout>
        </div>
      </section>

      {/* 6C DATASET */}
      <section className="cs-section" id="research-history">
        <div className="container">
          <span className="cs-num">6C, Dataset</span>
          <SectionHeader title="An NSF-funded research dataset, turned into a deployable app" />
          <p style={{ maxWidth: "70ch" }}>{IQ.dataset.intro}</p>
          <div className="grid-2" style={{ marginTop: "1rem" }}>
            <div className="card">
              <h4>Project context</h4>
              <ul>
                {IQ.dataset.context.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h4>13 indicator taxa</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
                {IQ.dataset.taxaNote}
              </p>
              <div className="chip-row">
                {IQ.dataset.taxa.map((t) => (
                  <span className="chip" key={t}>
                    <em>{t}</em>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6D AI ARCHITECTURE */}
      <section className="cs-section section--tint">
        <div className="container">
          <span className="cs-num">6D, AI architecture</span>
          <SectionHeader
            title="Two independent systems evaluate every image"
            lede="A specialized detector and a general-purpose model each analyze the specimen. The app compares them instead of silently picking one."
          />
          <div className="grid-2">
            <div className="card">
              <h3>Model 1, {IQ.models.model1.name}</h3>
              <ul>
                {IQ.models.model1.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Callout warn>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>{IQ.models.model1.caveat}</p>
              </Callout>
            </div>
            <div className="card">
              <h3>Model 2, {IQ.models.model2.name}</h3>
              <ul>
                {IQ.models.model2.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 style={{ marginTop: "2.5rem" }}>The workflow</h3>
          <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>
            Select a step to highlight it. Each stage feeds the next.
          </p>
          <ol className="pipeline">
            {IQ.models.workflow.map((w, i) => (
              <li
                className="pipeline__item"
                key={w.step}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                style={
                  activeStep === i
                    ? { background: "var(--accent-wash)", borderRadius: "8px" }
                    : undefined
                }
              >
                <strong>
                  {i + 1}. {w.step}
                </strong>
                <span>{w.desc}</span>
              </li>
            ))}
          </ol>

          <h3 style={{ marginTop: "2.5rem" }}>Interactive system architecture</h3>
          <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)", maxWidth: "68ch" }}>
            Click any node for its role and stack, or run "Trace request" to watch a capture flow
            through the system.
          </p>
          <div className="arch-embed">
            <iframe
              src="/invertequest-architecture.html"
              title="InverteQuest interactive system architecture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 6E CLAUDE'S ROLE */}
      <section className="cs-section">
        <div className="container">
          <span className="cs-num">6E, Claude's role</span>
          <SectionHeader title="Why Claude Is Load-Bearing" />
          <div className="grid-2">
            {IQ.claudeRole.map((c) => (
              <div className="card card--hover" key={c.title}>
                <h4>{c.title}</h4>
                <p style={{ margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
          <Callout warn>
            <p style={{ margin: 0 }}>{IQ.claudeCaveat}</p>
          </Callout>
        </div>
      </section>

      {/* 6F RESPONSIBLE AI */}
      <section className="cs-section section--tint">
        <div className="container">
          <span className="cs-num">6F, Responsible AI</span>
          <SectionHeader
            title="Designed to make uncertainty visible"
            lede="The most important decisions were about what not to automate."
          />
          <div className="dodont">
            <div className="dodont__col dodont__col--do">
              <h4>The system does</h4>
              <ul>
                {IQ.responsibleDoes.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="dodont__col dodont__col--dont">
              <h4>The system does not</h4>
              <ul>
                {IQ.responsibleDoesNot.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
          <Callout warn>
            <p style={{ margin: 0 }}>
              <strong>Visible limitation. </strong>
              {IQ.responsibleLimitation}
            </p>
          </Callout>
        </div>
      </section>

      {/* 6G FIELD CONSTRAINTS */}
      <section className="cs-section">
        <div className="container">
          <span className="cs-num">6G, Field constraints</span>
          <SectionHeader title="Built for real field conditions" />
          <div className="grid-3">
            {IQ.fieldConstraints.map((f) => (
              <div className="card" key={f} style={{ padding: "1rem 1.2rem" }}>
                <span style={{ fontSize: "0.95rem" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6H TECH STACK */}
      <section className="cs-section section--tint">
        <div className="container">
          <span className="cs-num">6H, Tech stack</span>
          <SectionHeader title="The architecture, layer by layer" />
          <div className="grid-4">
            {Object.entries(IQ.stack).map(([layer, items]) => (
              <div className="card" key={layer}>
                <h4 style={{ color: "var(--accent-deep)" }}>{layer}</h4>
                <div className="chip-row">
                  {items.map((it) => (
                    <span className="chip" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6I CONTRIBUTIONS */}
      <section className="cs-section">
        <div className="container">
          <span className="cs-num">6I, My individual contributions</span>
          <SectionHeader title="My Individual Contributions" />
          <p style={{ margin: "0 0 1.4rem", fontSize: "0.95rem", color: "var(--ink-soft)", maxWidth: "70ch" }}>
            {IQ.credits}
          </p>
          <div className="grid-3">
            {IQ.contributions.map((c) => (
              <div key={c} style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}>
                <span style={{ color: "var(--accent)" }}>▸</span>
                <span style={{ fontSize: "0.92rem" }}>{c}</span>
              </div>
            ))}
          </div>
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            <div className="card">
              <h4>My individual implementation</h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)" }}>
                Application code, integrations, calculations, deployment, and documentation above.
              </p>
            </div>
            <div className="card">
              <h4>Collaborative outcomes</h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)" }}>
                Project-level results achieved with teammates and faculty.
              </p>
            </div>
            <div className="card">
              <h4>Prior-researcher dataset</h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)" }}>
                The NSF-funded labeled dataset was created through earlier TAMU-SA research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6J OUTCOMES */}
      <section className="cs-section section--tint">
        <div className="container">
          <span className="cs-num">6J, Project outcomes</span>
          <SectionHeader
            title="Only what's supported"
            lede="No user counts, no accuracy improvements, no adoption claims, those are not measured yet."
          />
          <div className="grid-3">
            {IQ.outcomes.map((o) => (
              <MetricCard key={o.label} value={o.value} label={o.label} note={o.note} />
            ))}
          </div>
          <div className="chip-row" style={{ marginTop: "1.4rem" }}>
            {IQ.outcomesExtra.map((e) => (
              <span className="chip chip--accent" key={e}>
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6K LESSONS */}
      <section className="cs-section">
        <div className="container">
          <span className="cs-num">6K, Lessons</span>
          <SectionHeader title="What I Learned" />
          <div className="grid-2">
            {IQ.lessons.map((l, i) => (
              <div className="card" key={l}>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.5rem",
                    color: "var(--accent)",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
