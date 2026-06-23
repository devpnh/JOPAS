import { motion } from 'framer-motion';
import { Phone, ArrowDown } from 'lucide-react';
import { FACTS, PHONE, PHONE_HREF } from '../lib/data';

const EASE = [0.16, 1, 0.3, 1];
const line = (i) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: i * 0.08 } },
});

export default function Hero() {
  return (
    <section id="top" className="relative bg-graphite text-paper">
      {/* blueprint raster */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(100% 80% at 80% 0%, rgba(176,103,60,0.18), transparent 55%)' }}
      />

      <div className="wrap relative flex min-h-[100svh] flex-col justify-between pt-[70px]">
        {/* utility riadok */}
        <motion.div
          variants={line(0)}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between border-b border-invert py-5 font-mono text-[11px] uppercase tracking-label text-paper/55"
        >
          <span>Vodár · Kúrenár · Montáž kotlov</span>
          <span className="hidden sm:block">Michalovce / východné Slovensko</span>
        </motion.div>

        {/* hlavný obsah */}
        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.h1
              variants={line(1)}
              initial="hidden"
              animate="visible"
              className="font-display text-[clamp(2.9rem,8.2vw,6.2rem)] font-extrabold leading-[0.96] tracking-[-0.035em] !text-paper"
            >
              Spravíme vodu
              <br />
              aj kúrenie. <span className="text-copper">Poriadne.</span>
            </motion.h1>

            <motion.p
              variants={line(2)}
              initial="hidden"
              animate="visible"
              className="mt-7 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-paper/75"
            >
              Vodár a kúrenár pre Michalovce a okolie. Voda, kanalizácia, kúrenie, kotly a sanita —
              vyše 20 rokov tej istej roboty v regióne.
            </motion.p>

            <motion.div variants={line(3)} initial="hidden" animate="visible" className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={PHONE_HREF} className="btn btn-lg btn-copper">
                <Phone size={19} strokeWidth={2} />
                <span>Zavolajte — <span className="font-mono">{PHONE}</span></span>
              </a>
              <a href="#kontakt" className="btn btn-lg btn-line-invert">Alebo napíšte dopyt</a>
            </motion.div>
          </div>

          {/* spec stĺpec */}
          <motion.div
            variants={line(4)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="border-t border-invert">
              {FACTS.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between border-b border-invert py-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-label text-paper/45">{f.k}</span>
                  <span className="font-display text-lg font-semibold text-paper">{f.v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.a
          href="#sluzby"
          variants={line(5)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 border-t border-invert py-5 font-mono text-[11px] uppercase tracking-label text-paper/50 transition-colors hover:text-copper"
        >
          <ArrowDown size={14} /> Pozrieť, čo robíme
        </motion.a>
      </div>
    </section>
  );
}
