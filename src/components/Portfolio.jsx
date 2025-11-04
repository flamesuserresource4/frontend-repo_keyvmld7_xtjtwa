import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Urban Portraits",
    desc: "Series of moody portraits shot in natural light.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    link: "https://unsplash.com/",
  },
  {
    title: "Product Cinematic",
    desc: "Short ad with macro shots and sound design.",
    img: "https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1200&auto=format&fit=crop",
    link: "https://unsplash.com/",
  },
  {
    title: "Minimal Webfolio",
    desc: "Clean responsive portfolio built with performance in mind.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    link: "https://github.com/",
  },
  {
    title: "Event Recap",
    desc: "Fast-paced highlights with rhythmic cuts.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    link: "https://unsplash.com/",
  },
  {
    title: "Studio Lighting",
    desc: "Product shots with dramatic lighting setups.",
    img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1200&auto=format&fit=crop",
    link: "https://unsplash.com/",
  },
  {
    title: "Brand Teaser",
    desc: "Motion graphics and typography teaser.",
    img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop",
    link: "https://unsplash.com/",
  },
];

export default function Portfolio() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const card = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="portfolio" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Portfolio</h2>
            <p className="mt-2 text-white/75">A curated selection of recent works.</p>
          </div>
          <a href="#contact" className="hidden rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/20 md:block">
            Available for collaborations
          </a>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              variants={card}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent opacity-90" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  {p.title}
                  <ExternalLink className="h-4 w-4 opacity-80" />
                </h3>
                <p className="mt-1 text-sm text-white/75">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
