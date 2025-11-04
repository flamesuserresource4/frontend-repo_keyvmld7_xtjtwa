import { motion } from "framer-motion";
import { Download, Camera, Film, Code } from "lucide-react";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const services = [
    { icon: Camera, title: "Photography", desc: "Editorial, product, and lifestyle shoots with clean, modern aesthetics." },
    { icon: Film, title: "Video Editing", desc: "Cinematic edits, color grading, sound design, and motion graphics." },
    { icon: Code, title: "Web Design", desc: "Responsive websites with delightful micro-interactions and performance in mind." },
  ];

  return (
    <section id="about" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div variants={item} className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold md:text-4xl">About Me</h2>
            <p className="mt-4 text-white/80">
              I'm a digital creator who loves crafting visual stories and functional interfaces. My interests span photography,
              post-production, and building web experiences. I focus on clarity, rhythm, and emotions through visuals — keeping
              everything minimal yet expressive.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div variants={item} className="order-1 md:order-2">
            <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-2xl ring-1 ring-white/10 md:h-72 md:w-72">
              <img
                src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=1000&auto=format&fit=crop"
                alt="Profile"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/30" />
            </div>
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <motion.div key={s.title} variants={item} className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:bg-white/10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/75">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
