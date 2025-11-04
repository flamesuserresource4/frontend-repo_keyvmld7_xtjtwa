import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Youtube, Phone } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    if (!name || !email || !message) {
      setStatus("Mohon lengkapi semua field.");
      return;
    }

    setStatus("Terima kasih! Pesan Anda sudah diterima.");
    e.currentTarget.reset();
  };

  const fade = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h2 variants={fade} className="text-3xl font-semibold md:text-4xl">Contact</motion.h2>
          <motion.p variants={fade} className="mt-2 max-w-2xl text-white/75">Mari diskusi ide keren Anda. Saya terbuka untuk proyek freelance, kolaborasi, atau sekadar ngobrol.</motion.p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.form variants={fade} onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="grid grid-cols-1 gap-4">
                <label className="text-sm">Nama
                  <input name="name" type="text" className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-white outline-none ring-0 placeholder-white/40 focus:border-sky-500" placeholder="Nama Anda" />
                </label>
                <label className="text-sm">Email
                  <input name="email" type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-white outline-none placeholder-white/40 focus:border-sky-500" placeholder="email@contoh.com" />
                </label>
                <label className="text-sm">Pesan
                  <textarea name="message" rows="5" className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-white outline-none placeholder-white/40 focus:border-sky-500" placeholder="Tulis pesan Anda..." />
                </label>
                {status && <p className="text-sm text-emerald-400">{status}</p>}
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:from-sky-400 hover:to-indigo-400">Kirim Pesan</button>
              </div>
            </motion.form>

            <motion.div variants={fade} className="flex flex-col justify-between">
              <div>
                <p className="text-white/75">Atau hubungi langsung via email/telepon, dan ikuti saya di sosial media:</p>
                <div className="mt-4 flex flex-col gap-3">
                  <a href="mailto:hello@example.com" className="group inline-flex items-center gap-3 text-white/90 transition hover:text-white">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Mail className="h-4 w-4" /></span>
                    hello@example.com
                  </a>
                  <a href="tel:+621234567890" className="group inline-flex items-center gap-3 text-white/90 transition hover:text-white">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Phone className="h-4 w-4" /></span>
                    +62 123 4567 890
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-wider text-white/50">Social</p>
                <div className="mt-3 flex items-center gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"><Instagram className="h-5 w-5" /></a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"><Linkedin className="h-5 w-5" /></a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"><Youtube className="h-5 w-5" /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
