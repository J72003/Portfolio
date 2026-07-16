import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

interface LightboxApi {
  open: (src: string, alt?: string) => void;
}

const LightboxContext = createContext<LightboxApi>({ open: () => {} });

export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [img, setImg] = useState<{ src: string; alt: string } | null>(null);
  const open = useCallback((src: string, alt = "") => setImg({ src, alt }), []);
  const close = useCallback(() => setImg(null), []);

  useEffect(() => {
    if (!img) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [img, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {img && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={img.alt || "Full image"}
          onClick={close}
        >
          <button className="lb__close" aria-label="Close image" onClick={close}>
            ✕
          </button>
          <figure className="lb__fig" onClick={(e) => e.stopPropagation()}>
            <img className="lb__img" src={img.src} alt={img.alt} />
            {img.alt && <figcaption className="lb__cap">{img.alt}</figcaption>}
          </figure>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
