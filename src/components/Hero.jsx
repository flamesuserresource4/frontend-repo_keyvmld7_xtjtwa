import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Soft gradient overlay to improve contrast, allow interactions with the scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/30 to-neutral-950"></div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-24 text-center md:pt-36">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur"
        >
          Modern • Minimal • Creative
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-4xl font-semibold leading-tight md:text-6xl"
        >
          Hi, I'm Gufron —<br className="hidden md:block" />
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">Digital Creator & Editor</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-2xl text-base text-white/80 md:text-lg"
        >
          I craft engaging visuals and smooth experiences — from photography and video edits to sleek, performant websites.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/20 ring-1 ring-white/10 transition hover:bg-sky-400 hover:shadow-sky-400/30"
          >
            Lihat Portofolio
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur ring-1 ring-white/20 transition hover:bg-white/20"
          >
            Hubungi Saya
          </a>
        </motion.div>
      </div>
    </section>
  );
}
