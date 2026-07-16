import { SmartLink, SectionHeader } from "../components/common";

export default function Contact() {
  return (
    <article>
      <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Contact
          </div>
          <h1 style={{ maxWidth: "20ch", margin: "0 auto 1rem" }}>Let's Build Something Useful</h1>
          <p className="lede" style={{ margin: "0 auto 2rem", maxWidth: "60ch" }}>
            I am interested in opportunities involving responsible AI, full-stack product
            development, organizational discovery, public-interest technology, education,
            environmental research, and human-centered systems.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <SmartLink linkKey="email" className="btn btn--accent">
              Email Jaspal
            </SmartLink>
            <SmartLink linkKey="linkedin" className="btn btn--outline">
              LinkedIn
            </SmartLink>
            <SmartLink linkKey="github" className="btn btn--outline">
              GitHub
            </SmartLink>
            <SmartLink linkKey="resumePdf" className="btn btn--outline">
              Download Résumé
            </SmartLink>
          </div>
          <p style={{ fontFamily: "var(--mono)", fontSize: "0.76rem", color: "var(--ink-faint)", marginTop: "2.5rem" }}>
            No contact form is included, a form is only added when a secure submission service is
            configured.
          </p>
        </div>
      </section>
    </article>
  );
}
