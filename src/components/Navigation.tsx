import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SmartLink } from "./common";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/frost-bank", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/leadership", label: "Leadership" },
  { to: "/storytelling", label: "Storytelling" },
  { to: "/awards", label: "Recognition" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Résumé" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Primary">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">
          Jaspal Singh Kahlon
        </Link>

        <ul className="nav__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === "/"} className="nav__link">
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="nav__mobile-ctas">
            <SmartLink linkKey="inverteQuestApp" className="btn btn--accent">
              View InverteQuest
            </SmartLink>
            <SmartLink linkKey="resumePdf" className="btn btn--outline">
              Download Résumé
            </SmartLink>
          </li>
        </ul>

        <div className="nav__ctas">
          <SmartLink linkKey="inverteQuestApp" className="btn btn--accent">
            View InverteQuest
          </SmartLink>
          <SmartLink linkKey="resumePdf" className="btn btn--outline">
            Download Résumé
          </SmartLink>
        </div>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </div>
      <div
        className="nav__progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </nav>
  );
}
