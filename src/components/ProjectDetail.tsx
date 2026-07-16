import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GalleryItem } from "../data/gallery";
import { PROJECT_DETAILS } from "../data/projectDetails";
import { useLightbox } from "./Lightbox";

export default function ProjectDetail({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const { open } = useLightbox();
  const d = PROJECT_DETAILS[item.id];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!d) return null;

  const meta = [
    { label: "Role", value: d.role },
    { label: "Tools", value: d.tools },
    { label: "Client", value: d.client },
    { label: "Year", value: item.year },
  ];

  const openFull = () => {
    onClose();
    navigate(item.to);
  };

  return (
    <div
      className="pd"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}, case study`}
    >
      <div className="pd__backdrop" onClick={onClose} />

      <div className="pd__panel" role="document">
        {/* Left, cover art */}
        <div
          className="pd__cover"
          style={
            {
              "--from": item.from,
              "--to": item.toColor,
              "--ink": item.ink,
            } as React.CSSProperties
          }
        >
          <span className="pd__cover-title">{item.poster}</span>
          <div className="pd__cover-strip">
            <span>{item.category}, {item.year}</span>
            <span className="pd__rule" />
          </div>
        </div>

        {/* Center, description + open images section */}
        <div className="pd__body">
          <div className="pd__body-head">
            <h2 className="pd__title">{item.title}</h2>
            <p className="pd__subtitle">{d.subtitle}</p>
            <span className="pd__rule pd__rule--wide" />
            <p className="pd__desc">{d.description}</p>
            <div className="pd__highlights">
              {d.highlights.map((h) => (
                <span className="pd__chip" key={h}>
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* OPEN IMAGES SECTION, add real images later */}
          <div className="pd__images" aria-label="Project images">
            <div className="pd__images-label">
              Selected frames
              <span className="pd__images-hint">image slots, add later</span>
            </div>
            <div className="pd__collage">
              {d.images.map((img, i) => (
                <figure className={`pd__frame pd__frame--${(i % 4) + 1}`} key={img.label}>
                  {img.src ? (
                    <button
                      type="button"
                      className="pd__frame-btn"
                      onClick={() => open(img.src!, img.label)}
                      aria-label={`View full image: ${img.label}`}
                    >
                      <img className="pd__frame-img" src={img.src} alt={img.label} loading="lazy" />
                      <span className="figure__zoom" aria-hidden="true">⤢</span>
                    </button>
                  ) : (
                    <div className="pd__frame-ph" role="img" aria-label={`Image placeholder: ${img.label}`}>
                      <span aria-hidden="true">▦</span>
                    </div>
                  )}
                  <figcaption>{img.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Right, metadata */}
        <aside className="pd__meta">
          {meta.map((m) => (
            <div className="pd__meta-item" key={m.label}>
              <div className="pd__meta-label">{m.label}</div>
              <div className="pd__meta-value">{m.value}</div>
            </div>
          ))}
          <button className="pd__fullcase" onClick={openFull}>
            View full case <span aria-hidden="true">→</span>
          </button>
        </aside>

        {/* Chrome */}
        <div className="pd__nametag">Jaspal Singh Kahlon</div>
        <button className="pd__close" onClick={onClose} aria-label="Close case study">
          ✕
        </button>
      </div>
    </div>
  );
}
