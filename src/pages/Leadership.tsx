import {
  ASA,
  CAMPUS_TIMELINE,
  ACM_RESPONSIBILITIES,
  FRIGHT_FILM_FEST,
} from "../data/leadership";
import { SectionHeader, Placeholder, Figure, Callout, EditableNote } from "../components/common";

export default function Leadership() {
  return (
    <article>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Community leadership</div>
          <h1>Building Community</h1>
          <p className="lede">
            {ASA.role}, {ASA.org}
          </p>
          <p style={{ maxWidth: "70ch" }}>{ASA.need}</p>
        </div>
      </section>

      {/* IMPACT VIZ */}
      <section className="cs-section">
        <div className="container">
          <SectionHeader title="A club with $200, rebuilt into a program that lasts" />
          <div className="grid-4">
            {ASA.impactStats.map((s) => (
              <div className="metric" key={s.label}>
                <div className="metric__value">
                  {"from" in s && s.from ? (
                    <span style={{ fontSize: "1.4rem" }}>
                      {s.from} <span style={{ color: "var(--ink-faint)" }}>→</span> {s.to}
                    </span>
                  ) : (
                    s.value
                  )}
                </div>
                <div className="metric__label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="impact-bars" style={{ maxWidth: "520px", marginTop: "2rem" }}>
            <div>
              <div className="impact-bar__label">
                <span>Starting funding</span>
                <span>~$200</span>
              </div>
              <div className="impact-bar__track">
                <div className="impact-bar__fill impact-bar__fill--start" style={{ width: "5%" }} />
              </div>
            </div>
            <div>
              <div className="impact-bar__label">
                <span>After fundraising & partnerships</span>
                <span>~$4,000</span>
              </div>
              <div className="impact-bar__track">
                <div className="impact-bar__fill" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS + OUTCOMES */}
      <section className="cs-section section--tint">
        <div className="container">
          <div className="grid-2">
            <div>
              <h3>Outcomes</h3>
              <ul>
                {ASA.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Partner organizations</h3>
              <div className="chip-row">
                {ASA.partners.map((p) => (
                  <span className="chip chip--accent" key={p}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="cs-section">
        <div className="container">
          <SectionHeader title="Featured programs" />
          <div className="grid-3">
            {ASA.programs.map((prog) => (
              <div className="card" key={prog.name}>
                {"src" in prog && prog.src && (
                  <Figure src={prog.src} label={`${prog.name}, photo / poster`} icon="📸" />
                )}
                <h3 style={{ marginTop: "1rem" }}>{prog.name}</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--accent-deep)" }}>
                  {prog.role}
                </p>
                <ul style={{ fontSize: "0.9rem" }}>
                  {prog.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HANDOFF */}
      <section className="cs-section section--tint">
        <div className="container">
          <SectionHeader title="Sustainability & handoff" lede={ASA.handoffIntro} />
          <div className="grid-3">
            {ASA.handoff.map((h) => (
              <div key={h} style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}>
                <span style={{ color: "var(--accent)" }}>▸</span>
                <span style={{ fontSize: "0.92rem" }}>{h}</span>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: "2.5rem" }}>More moments</h3>
          <div className="grid-4">
            {ASA.moments.map((m) => (
              <Figure key={m.label} src={m.src} label={m.label} caption={m.label} />
            ))}
          </div>
        </div>
      </section>

      {/* FRIGHT FILM FEST */}
      <section className="cs-section">
        <div className="container">
          <div className="eyebrow">Creative initiative</div>
          <SectionHeader title="Fright Film Fest" lede={FRIGHT_FILM_FEST.role} />
          <p style={{ fontWeight: 600 }}>{FRIGHT_FILM_FEST.wording}</p>
          <p style={{ maxWidth: "70ch" }}>{FRIGHT_FILM_FEST.context}</p>
          <div className="grid-2">
            <div>
              <h4>The process</h4>
              <div className="chip-row">
                {FRIGHT_FILM_FEST.process.map((p) => (
                  <span className="chip" key={p}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4>What it demonstrates</h4>
              <div className="chip-row">
                {FRIGHT_FILM_FEST.demonstrates.map((d) => (
                  <span className="chip chip--accent" key={d}>
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <blockquote className="pull">"{FRIGHT_FILM_FEST.quote}"</blockquote>
          <Figure src="/images/fright-film-fest-poster.png" label="Fright Film Fest, poster" caption="Inaugural Fright Film Fest poster" tall />
        </div>
      </section>

      {/* CAMPUS TIMELINE */}
      <section className="cs-section section--tint">
        <div className="container">
          <SectionHeader
            title="Campus leadership & service"
            lede="A record of roles, service, and participation."
          />
          <ul className="timeline">
            {CAMPUS_TIMELINE.map((c) => (
              <li className="timeline__item" key={c.title}>
                <p className="timeline__title">{c.title}</p>
                <p className="timeline__desc">{c.note}</p>
              </li>
            ))}
          </ul>
          <div className="card" style={{ marginTop: "1.5rem", maxWidth: "620px" }}>
            <h4>ACM, verified responsibilities</h4>
            <ul style={{ margin: 0, fontSize: "0.9rem" }}>
              {ACM_RESPONSIBILITIES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
