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
    <section id="top" className="bg-surface pt-[68px]">
      <div className="wrap grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* text */}
        <div>
          <motion.span variants={up(0)} initial="hidden" animate="visible" className="eyebrow">
            Vodár a kúrenár · Michalovce
          </motion.span>
          <motion.h1
            variants={up(0.06)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-[clamp(2.4rem,5.2vw,3.8rem)] font-semibold leading-[1.04] text-ink"
          >
            Spravíme vodu aj kúrenie. <span className="text-accent">Poriadne.</span>
          </motion.h1>
          <motion.p
            variants={up(0.12)}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-xl text-[17px] leading-relaxed text-steel"
          >
            Voda, kanalizácia, kúrenie, kotly a sanita pre domácnosti v Michalovciach a okolí.
            Vyše 20 rokov tej istej roboty v regióne.
          </motion.p>

          <motion.div variants={up(0.18)} initial="hidden" animate="visible" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className="btn btn-lg btn-accent">
              <Phone size={18} /> <span>Zavolajte — <span className="font-mono">{PHONE}</span></span>
            </a>
            <a href="#kontakt" className="btn btn-lg btn-line">Napíšte dopyt</a>
          </motion.div>

          <motion.dl variants={up(0.24)} initial="hidden" animate="visible" className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
            {FACTS.map((f) => (
              <div key={f.k}>
                <dt className="text-[12px] uppercase tracking-[0.08em] text-faint">{f.k}</dt>
                <dd className="mt-0.5 font-display text-[17px] font-semibold text-ink">{f.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* fotka */}
        <motion.div
          variants={up(0.1)}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <img
            src={asset('img/kurenie-1.jpg')}
            alt="Kotol a rozvody kúrenia — realizácia JOPAS"
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]"
            loading="eager"
            width="900" height="1100"
          />
        </motion.div>
      </div>
    </section>
  );
}
