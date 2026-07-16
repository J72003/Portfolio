import { ReactNode } from "react";
import { LINKS, isPlaceholder } from "../data/links";
import { useLightbox } from "./Lightbox";

/* ---- Section header ---- */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  id,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  id?: string;
}) {
  return (
    <header style={{ marginBottom: "2rem", maxWidth: "62ch" }} id={id}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}

/* ---- Placeholder media block ---- */
export function Placeholder({
  label,
  icon = "▦",
  tall = false,
}: {
  label: string;
  icon?: string;
  tall?: boolean;
}) {
  return (
    <div className={`ph${tall ? " ph--tall" : ""}`} role="img" aria-label={`Image placeholder: ${label}`}>
      <span className="ph__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="ph__label">{label}</span>
      <span className="ph__hint">image to be supplied</span>
    </div>
  );
}

/* ---- Figure: real image with caption, or placeholder fallback ---- */
export function Figure({
  src,
  label,
  caption,
  icon = "▦",
  tall = false,
}: {
  src?: string;
  label: string;
  caption?: string;
  icon?: string;
  tall?: boolean;
}) {
  const { open } = useLightbox();
  if (!src) return <Placeholder label={label} icon={icon} tall={tall} />;
  return (
    <figure className="figure" style={{ margin: 0 }}>
      <button
        type="button"
        className="figure__btn"
        onClick={() => open(src, caption || label)}
        aria-label={`View full image: ${label}`}
      >
        <img
          className={`figure__img${tall ? " figure__img--tall" : ""}`}
          src={src}
          alt={label}
          loading="lazy"
        />
        <span className="figure__zoom" aria-hidden="true">
          ⤢
        </span>
      </button>
      {caption && <figcaption className="figure__cap">{caption}</figcaption>}
    </figure>
  );
}

/* ---- Metric card ---- */
export function MetricCard({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="metric">
      <div className="metric__value">{value}</div>
      <div className="metric__label">{label}</div>
      {note && <div className="metric__note">{note}</div>}
    </div>
  );
}

/* ---- Callout ---- */
export function Callout({
  children,
  warn = false,
}: {
  children: ReactNode;
  warn?: boolean;
}) {
  return <div className={`callout${warn ? " callout--warn" : ""}`}>{children}</div>;
}

/* ---- Editable-content notice ---- */
export function EditableNote({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--mono)",
        fontSize: "0.74rem",
        letterSpacing: "0.03em",
        color: "var(--ochre)",
        border: "1px dashed #e0c4ab",
        background: "var(--ochre-wash)",
        borderRadius: "8px",
        padding: "0.6rem 0.9rem",
        margin: "0 0 1rem",
      }}
    >
      ✎ EDITABLE, {children}
    </p>
  );
}

/* ---- Smart link: shows a placeholder marker if URL isn't set ---- */
export function SmartLink({
  linkKey,
  children,
  className,
}: {
  linkKey: keyof typeof LINKS;
  children: ReactNode;
  className?: string;
}) {
  const url = LINKS[linkKey];
  const placeholder = isPlaceholder(url);
  if (placeholder) {
    return (
      <span
        className={className}
        title={`Add link: ${linkKey}`}
        style={{ opacity: 0.6, cursor: "help", position: "relative" }}
      >
        {children}
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.6rem",
            marginLeft: "0.35rem",
            color: "var(--ochre)",
            verticalAlign: "super",
          }}
        >
          ⚑add
        </span>
      </span>
    );
  }
  const external = url.startsWith("http");
  const href = linkKey === "email" ? `mailto:${url}` : url;
  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
