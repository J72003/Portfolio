import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { INVERTEQUEST } from "../data/invertequest";
import { PORTRAID } from "../data/research";
import { SectionHeader, Figure, Callout } from "../components/common";

export default function Projects() {
  return (
    <article>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Projects gallery</div>
          <h1>Data & software projects</h1>
          <p className="lede">
            Every project below follows the same shape: a problem, my role, the actions, the output,
            honest limitations, and what I learned.
          </p>
        </div>
      </section>

      {/* Featured two */}
      <section className="container" style={{ paddingBottom: "1rem" }}>
        <div className="grid-2">
          <div className="card card--hover">
            <span className="chip chip--accent">Flagship</span>
            <h3 style={{ marginTop: "0.7rem" }}>{INVERTEQUEST.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>{INVERTEQUEST.subtitle}</p>
            <Link to="/invertequest" className="text-link">
              Read case study →
            </Link>
          </div>
          <div className="card card--hover">
            <span className="chip chip--accent">Published research</span>
            <h3 style={{ marginTop: "0.7rem" }}>{PORTRAID.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>{PORTRAID.subtitle}</p>
            <Link to="/research" className="text-link">
              Read case study →
            </Link>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="container">
          <SectionHeader title="More projects" />
          {PROJECTS.map((p) => (
            <details className="expand" key={p.id}>
              <summary>
                <span>
                  <span className="chip" style={{ marginRight: "0.7rem" }}>
                    {p.tag}
                  </span>
                  {p.title}
                </span>
              </summary>
              <div className="expand__body">
                <p>{p.summary}</p>
                <div className="grid-2">
                  <div>
                    <h4>What it does</h4>
                    <ul>
                      {p.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Stack & approach</h4>
                    <div className="chip-row">
                      {p.stack.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    {"findings" in p && Array.isArray((p as { findings?: string[] }).findings) && (
                      <>
                        <h4 style={{ marginTop: "1rem" }}>Findings (as supplied)</h4>
                        <ul>
                          {(p as { findings: string[] }).findings.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
