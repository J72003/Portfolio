import { useState } from "react";
import { AWARDS, AWARD_TYPES, AwardType } from "../data/awards";
import { SectionHeader, Figure } from "../components/common";

const AWARD_IMAGES = [
  { label: "ACM Southeast 2025, author", src: "/images/acmse-2025-author.jpg" },
  { label: "HackUTD, winners podium", src: "/images/hackutd-podium.webp" },
  { label: "Honors Symposium, 3rd place", src: "/images/honors-3rd-place.png" },
  { label: "Intramural awards", src: "/images/intramural-awards.png" },
  { label: "DoD VICEROY Scholar", src: "/images/dod-viceroy.jpg" },
  { label: "NSF S-STEM", src: "/images/nsf-sstem-badge.png" },
  { label: "ACM Presenter, community", src: "/images/acm-presenter.png" },
  { label: "El Espejo, cover (Fall 2024)", src: "/images/el-espejo-cover.png" },
];

const FILTERS: ("All" | AwardType)[] = ["All", ...AWARD_TYPES];

export default function Awards() {
  const [filter, setFilter] = useState<"All" | AwardType>("All");
  const shown = filter === "All" ? AWARDS : AWARDS.filter((a) => a.type === filter);

  return (
    <article>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Recognition</div>
          <h1>Awards & recognition</h1>
          <p className="lede">
            Individual awards, team awards, publication honors, scholarships, and program
            participation, labeled by type so nothing is overstated.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "1rem" }}>
        <div className="grid-4">
          {AWARD_IMAGES.map((a) => (
            <Figure key={a.label} src={a.src} label={a.label} caption={a.label} />
          ))}
        </div>
      </section>

      <section className="cs-section">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Filter awards by type">
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

          <div className="grid-2">
            {shown.map((a) => (
              <div className="card card--hover award" key={a.title}>
                <span className="award__medal" aria-hidden="true">
                  {a.medal}
                </span>
                <div>
                  <span
                    className={`chip ${
                      a.type === "Individual"
                        ? "chip--accent"
                        : a.type === "Team" || a.type === "Publication"
                        ? "chip--ochre"
                        : ""
                    }`}
                  >
                    {a.type}
                  </span>
                  <h4 style={{ margin: "0.6rem 0 0.3rem" }}>{a.title}</h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)" }}>
                    {a.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
