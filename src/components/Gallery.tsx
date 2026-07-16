import { useEffect, useRef, useState, useCallback } from "react";
import { GALLERY, GalleryItem } from "../data/gallery";
import ProjectDetail from "./ProjectDetail";

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const draggedRef = useRef(false);
  const [active, setActive] = useState(0);
  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);

  // Determine which card is nearest the horizontal center of the viewport.
  const recompute = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = window.innerWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const d = Math.abs(c - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
    // parallax + wave intensity per card based on distance from centre
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const offset = (c - center) / window.innerWidth; // -1 .. 1
      el.style.setProperty("--offset", offset.toFixed(3));
      el.style.setProperty("--is-active", i === best ? "1" : "0");
    });
  }, []);

  useEffect(() => {
    recompute();
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", recompute, { passive: true });
    window.addEventListener("resize", recompute);
    return () => {
      track.removeEventListener("scroll", recompute);
      window.removeEventListener("resize", recompute);
    };
  }, [recompute]);

  // Translate vertical wheel into horizontal scroll while inside the gallery,
  // but hand vertical scroll back to the page once we reach an edge.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const atStart = track.scrollLeft <= 0;
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) return; // let page scroll
      e.preventDefault();
      track.scrollLeft += delta;
    };
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  const scrollToCard = useCallback((i: number) => {
    const el = cardRefs.current[i];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  // Drag to pan
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;
    const onDown = (e: PointerEvent) => {
      // Pointer-drag panning is mouse-only; touch uses native horizontal scroll.
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true;
      moved = false;
      draggedRef.current = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      // disable snap during the drag so panning is smooth
      track.style.scrollSnapType = "none";
      track.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 6) moved = true;
      track.scrollLeft = startScroll - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      // set synchronously so the click handler (fires right after) sees it
      draggedRef.current = moved;
      track.style.scrollSnapType = "";
      track.style.cursor = "";
    };
    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToCard(Math.min(active + 1, GALLERY.length - 1));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToCard(Math.max(active - 1, 0));
    }
  };

  const current = GALLERY[active];

  return (
    <section
      className="gallery"
      aria-roledescription="carousel"
      aria-label="Selected work"
      onKeyDown={onKeyDown}
    >
      <div className="gallery__track" ref={trackRef} tabIndex={0} role="list">
        <div className="gallery__pad" aria-hidden="true" />
        {GALLERY.map((item, i) => (
          <a
            key={item.id}
            role="listitem"
            aria-label={`${item.title}, ${item.category}`}
            aria-current={i === active ? "true" : undefined}
            href={item.to}
            ref={(el) => (cardRefs.current[i] = el)}
            className="gallery__card"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            style={
              {
                "--from": item.from,
                "--to": item.toColor,
                "--ink": item.ink,
              } as React.CSSProperties
            }
            onClick={(e) => {
              e.preventDefault();
              // suppress opening if this pointer gesture was a drag
              if (draggedRef.current) {
                draggedRef.current = false;
                return;
              }
              setOpenItem(item);
            }}
          >
            <div className="gallery__poster">
              <span className="gallery__spine" aria-hidden="true" />
              <div className="gallery__poster-top">
                <span>{item.category}, {item.year}</span>
                <span className="gallery__poster-index">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <span className="gallery__poster-text">{item.poster}</span>
              <div className="gallery__poster-meta">
                <span className="gallery__poster-brand">{item.title}</span>
                <span className="gallery__poster-sub">{item.subtitle}</span>
                <span className="gallery__poster-open" aria-hidden="true">
                  Open <span className="gallery__poster-arrow">→</span>
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="gallery__pad" aria-hidden="true" />
      </div>

      <div className="gallery__caption" aria-live="polite">
        <div className="gallery__cat">{current.category}</div>
        <div className="gallery__sub">{current.subtitle}</div>
      </div>

      <div className="gallery__dots" role="tablist" aria-label="Gallery navigation">
        {GALLERY.map((item, i) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={i === active}
            aria-label={item.title}
            className={`gallery__dot${i === active ? " is-active" : ""}`}
            onClick={() => scrollToCard(i)}
          />
        ))}
      </div>

      <div className="gallery__hint" aria-hidden="true">
        drag · scroll · ← → · click to open
      </div>

      {openItem && <ProjectDetail item={openItem} onClose={() => setOpenItem(null)} />}
    </section>
  );
}
