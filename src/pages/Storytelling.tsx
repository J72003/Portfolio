import { STORYTELLING as S } from "../data/storytelling";
import { SectionHeader, Figure, Callout, SmartLink } from "../components/common";

export default function Storytelling() {
  return (
    <article>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Visual storytelling</div>
          <h1>Photography & journalism</h1>
          <p className="lede">
            {S.role} · {S.publication}
          </p>
          <p style={{ maxWidth: "68ch" }}>
            Photography and journalism sharpen the same skills my technical work depends on:
            observing people closely, listening well, and communicating clearly to an audience.
          </p>
          <div className="btn-row" style={{ marginTop: "1rem" }}>
            <SmartLink linkKey="photographyPortfolio" className="btn btn--outline">
              Photography portfolio
            </SmartLink>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="container">
          <SectionHeader title="What storytelling strengthens" />
          <div className="chip-row">
            {S.connects.map((c) => (
              <span className="chip chip--accent" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="cs-section section--tint">
        <div className="container">
          <SectionHeader title="Selected work" />
          <div className="grid-2">
            {S.gallery.map((g) => (
              <Figure
                key={g.label}
                src={"src" in g ? g.src : undefined}
                label={g.label}
                caption={`${g.label}, ${g.caption}`}
                icon="📷"
                tall
              />
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY PORTFOLIO */}
      <section className="cs-section">
        <div className="container">
          <SectionHeader
            title="Photography portfolio"
            lede="Editorial, fashion, and cultural photography. Click any image to view it full size."
          />
          <div className="grid-4">
            {S.photography.map((p, i) => (
              <Figure key={p.src + i} src={p.src} label={p.label} caption={p.caption} />
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <SmartLink linkKey="photographyPortfolio" className="btn btn--outline">
              Full photography portfolio
            </SmartLink>
          </div>
        </div>
      </section>

      {/* RECOGNITION, separated */}
      <section className="cs-section">
        <div className="container">
          <SectionHeader
            title="Recognition, carefully separated"
            lede="Individual honors and publication/team honors are listed apart."
          />
          <div className="grid-2">
            <div className="card card--accent">
              <h4>Individual recognition</h4>
              {S.individualRecognition.map((r) => (
                <div key={r.title} style={{ marginBottom: "0.8rem" }}>
                  <strong>{r.title}</strong>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)" }}>
                    {r.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="card">
              <h4>Collaborative / publication recognition</h4>
              {S.collaborativeRecognition.map((r) => (
                <div key={r.title} style={{ marginBottom: "0.8rem" }}>
                  <strong>{r.title}</strong>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)" }}>
                    {r.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
