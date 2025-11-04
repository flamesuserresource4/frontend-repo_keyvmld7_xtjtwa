import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    document.title = "Gufron — Digital Creator & Editor";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Portofolio modern dan responsif oleh Gufron: fotografi, video editing, dan web design dengan animasi halus.";
    if (meta) {
      meta.setAttribute("content", content);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white [scroll-behavior:smooth]">
      <Hero />
      <About />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Gufron. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
