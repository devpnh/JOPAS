import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FACTS, PHONE, PHONE_HREF, asset } from '../lib/data';

const EASE = [0.22, 1, 0.36, 1];
const up = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: d } },
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <div className="grid-faint pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(90% 70% at 82% 0%, rgba(30,132,196,0.22), transparent 60%)' }}
      />

      <div className="wrap relative flex min-h-[88vh] flex-col justify-center pt-[68px]">
        {/* utility riadok */}
        <motion.div
          variants={up(0)}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between border-b border-invert py-4 font-mono text-[11px] uppercase tracking-label text-white/50"
        >
          <span>Vodár · Kúrenár · Montáž kotlov</span>
          <span className="hidden sm:block">Michalovce / východné Slovensko</span>
        </motion.div>

        <div className="grid items-center gap-12 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <motion.h1
              variants={up(0.06)}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.7rem,6.4vw,5rem)] font-bold leading-[0.98] tracking-[-0.03em] !text-white"
            >
              Spravíme vodu aj kúrenie. <span className="text-accent-light">Poriadne.</span>
            </motion.h1>
            <motion.p
              variants={up(0.12)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70"
            >
              Voda, kanalizácia, kúrenie, kotly a sanita pre domácnosti v Michalovciach a okolí.
              Vyše 20 rokov tej istej roboty v regióne.
            </motion.p>

            <motion.div variants={up(0.18)} initial="hidden" animate="visible" className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_HREF} className="btn btn-lg btn-accent">
                <Phone size={18} /> <span>Zavolajte — <span className="font-mono">{PHONE}</span></span>
              </a>
              <a href="#kontakt" className="btn btn-lg btn-line-invert">Napíšte dopyt</a>
            </motion.div>

            {/* fakty ako technický spec */}
            <motion.dl variants={up(0.24)} initial="hidden" animate="visible" className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden border-y border-invert bg-[rgba(255,255,255,0.10)]">
              {FACTS.map((f) => (
                <div key={f.k} className="bg-navy px-3 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-label text-white/45">{f.k}</dt>
                  <dd className="mt-1 font-display text-[15px] font-semibold leading-tight text-white">{f.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* fotka */}
          <motion.div variants={up(0.12)} initial="hidden" animate="visible" className="lg:col-span-5">
            <div className="relative">
              <img
                src={asset('img/kurenie-1.jpg')}
                alt="Kotol a rozvody kúrenia — realizácia JOPAS"
                className="aspect-[4/5] w-full rounded-lg border border-invert object-cover"
                loading="eager"
                width="900" height="1100"
              />
              <span className="absolute bottom-3 left-3 bg-navy/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-white/70">
                Realizácia · kotolňa
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
