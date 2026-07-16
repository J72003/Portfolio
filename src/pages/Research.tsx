import { PORTRAID, STREETWEAR } from "../data/research";
import {
  SectionHeader,
  Placeholder,
  Figure,
  MetricCard,
  Callout,
  EditableNote,
  SmartLink,
} from "../components/common";

export default function Research() {
  return (
    <article>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Research & publications</div>
          <h1>{PORTRAID.title}</h1>
          <p className="lede">{PORTRAID.subtitle}</p>
          <p style={{ maxWidth: "70ch" }}>{PORTRAID.intro}</p>
          <p style={{ margin: "0 0 1rem", fontSize: "0.95rem", color: "var(--ink-soft)" }}>
            {PORTRAID.collaboration}
          </p>
          <div className="btn-row" style={{ marginTop: "1.2rem" }}>
            <SmartLink linkKey="portrAidPublication" className="btn btn--accent">
              ACM publication
            </SmartLink>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "1rem" }}>
        <div className="grid-2">
          <Figure src="/images/portraid-poster.png" label="PortrAid, ACM SE 2025 poster" caption="Presenting PortrAid (2nd place poster) at the research symposium" tall />
          <Figure src="/images/portraid-datasets.jpg" label="PortrAid, datasets" caption="Datasets: PIQ2023, Photomatt85, P3M-10K, AIIM-500" tall />
        </div>
        <div className="grid-2" style={{ marginTop: "1.4rem" }}>
          <Figure src="/images/portraid-architecture.jpg" label="PortrAid, multi-scale architecture" caption="Multi-scale encoders: micro (facial), meso (positioning), macro (composition)" tall />
          <Figure src="/images/portraid-results.jpg" label="PortrAid, final metrics" caption="Final metrics: 91.4% accuracy, confusion matrix, class-wise precision/recall/F1" tall />
        </div>
      </section>

      <section className="cs-section">
        <div className="container">
          <SectionHeader title="Evaluated on more than one number" />
          <div className="grid-3">
            {PORTRAID.metrics.map((m) => (
              <MetricCard key={m.label} value={m.value} label={m.label} note={"note" in m ? m.note : undefined} />
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section section--tint">
        <div className="container">
          <SectionHeader title="How the project was built and evaluated" />
          {PORTRAID.sections.map((s) => (
            <details className="expand" key={s.title}>
              <summary>{s.title}</summary>
              <div className="expand__body">
                <p style={{ margin: 0 }}>{s.body}</p>
              </div>
            </details>
          ))}
          <div className="chip-row" style={{ marginTop: "1.4rem" }}>
            {PORTRAID.publications.map((p) => (
              <span className="chip chip--accent" key={p}>
                {p}
              </span>
            ))}
          </div>
          <blockquote className="pull">{PORTRAID.lesson}</blockquote>
        </div>
      </section>

      {/* STREETWEAR */}
      <section className="cs-section">
        <div className="container">
          <div className="eyebrow">Interdisciplinary research</div>
          <SectionHeader
            title={STREETWEAR.title}
            lede={`${STREETWEAR.recognition}, ${STREETWEAR.event}`}
          />
          <div className="grid-2">
            <div>
              <p>{STREETWEAR.framing}</p>
              <p>{STREETWEAR.relevance}</p>
              <div className="chip-row" style={{ marginTop: "1rem" }}>
                {STREETWEAR.themes.map((t) => (
                  <span className="chip chip--ochre" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gap: "1.1rem" }}>
              <Figure src="/images/streetwear-symposium.jpg" label="Streetwear Across the World, at the symposium poster" caption="Presenting “Streetwear Across the World” (with Dr. Zhaojin Zeng)" />
              <Figure src="/images/honors-3rd-place.png" label="Honors Symposium, 3rd place" caption="Third place, San Antonio Honors Student Research Symposium 2026" />
            </div>
          </div>

          <h3 style={{ marginTop: "2.5rem" }}>The interactive experience</h3>
          <p style={{ maxWidth: "68ch" }}>
            A digital-humanities prototype, <em>Streetwear New York: From Block Parties to
            Billion-Dollar Hype</em>, using an interactive map, a timeline, and object-based
            storytelling to trace how four New York sites turned clothing into a language of
            identity, status, and power.
          </p>
          <div className="grid-3">
            <Figure src="/images/satw-overview.png" label="Streetwear New York, overview" caption="Overview: from block parties to billion-dollar hype" />
            <Figure src="/images/satw-map.png" label="Four Sites, One City, interactive map" caption="Interactive Leaflet map of four NYC sites" />
            <Figure src="/images/satw-garments.png" label="Garments as Evidence" caption="Object-based storytelling: garments as evidence" />
          </div>
        </div>
      </section>
    </article>
  );
}
