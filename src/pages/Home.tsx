import { PROFILE } from "../data/profile";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="home-landing">
      <div className="home-landing__head container">
        <p className="hero__kicker" style={{ marginBottom: "0.4rem" }}>
          {PROFILE.location}, selected work
        </p>
        <h1 className="home-landing__title">
          Human-Centered <em>AI</em> Builder
        </h1>
      </div>
      <Gallery />
    </div>
  );
}
