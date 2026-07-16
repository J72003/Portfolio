import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1>Page not found</h1>
        <p className="lede" style={{ margin: "0 auto 1.5rem" }}>
          That page doesn't exist. Let's head back.
        </p>
        <Link to="/" className="btn btn--accent">
          Back to home
        </Link>
      </div>
    </section>
  );
}
