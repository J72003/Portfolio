import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { LightboxProvider } from "./components/Lightbox";
import Home from "./pages/Home";
import InverteQuest from "./pages/InverteQuest";
import FrostBank from "./pages/FrostBank";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Leadership from "./pages/Leadership";
import Storytelling from "./pages/Storytelling";
import Awards from "./pages/Awards";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <LightboxProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Navigation />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invertequest" element={<InverteQuest />} />
          <Route path="/frost-bank" element={<FrostBank />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/storytelling" element={<Storytelling />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
    </LightboxProvider>
  );
}
