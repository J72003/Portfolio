import { FROST } from "../data/experience";
import { SectionHeader, Figure, Callout } from "../components/common";

export default function FrostBank() {
  return (
    <article>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Professional experience</div>
          <h1>{FROST.org}</h1>
          <p className="lede">{FROST.title}</p>
          <p style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", color: "var(--ink-faint)" }}>
            {FROST.location} · {FROST.dates}
          </p>
          <p style={{ maxWidth: "68ch" }}>{FROST.summary}</p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "1.5rem" }}>
        <Figure src="/images/frost-bank.jpg" label="At Frost Bank" caption="Product & UX research internship at Frost Bank" tall />
      </section>

      {FROST.sections.map((s) => (
        <section className="cs-section" key={s.title}>
          <div className="container">
            <SectionHeader title={s.title} />
            <div className="grid-2">
              {s.points.map((p) => (
                <div className="card" key={p}>
                  <p style={{ margin: 0 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="cs-section section--tint">
        <div className="container">
          <blockquote className="pull" style={{ margin: "0 auto" }}>
            {FROST.reflection}
          </blockquote>
        </div>
      </section>
    </article>
  );
}
