import { Link } from "react-router-dom";
import { PROFILE } from "../data/profile";
import { SmartLink } from "./common";

export default function Footer() {
  return (
    <footer className="footer no-print">
      <div className="container footer__inner">
        <div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", marginBottom: "0.5rem" }}>
            {PROFILE.name}
          </div>
          <p className="footer__note">
            {PROFILE.headline}, {PROFILE.location}. Building responsible AI systems around real
            users, real workflows, and meaningful problems.
          </p>
          <div className="btn-row" style={{ marginTop: "1rem" }}>
            <SmartLink linkKey="email" className="text-link">
              Email
            </SmartLink>
            <SmartLink linkKey="linkedin" className="text-link">
              LinkedIn
            </SmartLink>
            <SmartLink linkKey="github" className="text-link">
              GitHub
            </SmartLink>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/invertequest">InverteQuest</Link></li>
            <li><Link to="/frost-bank">Frost Bank</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/storytelling">Storytelling</Link></li>
            <li><Link to="/awards">Recognition</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Résumé</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container" style={{ marginTop: "2rem", fontSize: "0.78rem", color: "var(--ink-faint)" }}>
        © {new Date().getFullYear()} {PROFILE.name}. All figures presented as supplied; unverified
        organizational metrics are labeled as such.
      </div>
    </footer>
  );
}
