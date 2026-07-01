import { motion } from 'framer-motion';
import { PROCESS, CINE } from '../lib/data';
import { SectionHead, stagger, item, reveal, VIEWPORT } from './ui';

export default function Process() {
  return (
    <section className="border-t border-hair bg-char py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          id="proces"
          index="02"
          eyebrow="Ako to prebieha"
          title="Od telefónu po hotovú robotu."
          intro="Žiadne prekvapenia. Presne toto vás čaká, keď nám zavoláte."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_440px] lg:gap-16">
          {/* kroky */}
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative"
          >
            {/* konektorová čiara */}
            <span className="absolute left-[19px] top-2 bottom-2 w-px bg-hair" aria-hidden="true" />
            {PROCESS.map((p) => (
              <motion.li key={p.n} variants={item} className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-copper/50 bg-void font-mono text-[13px] font-medium text-copper">
                  {p.n}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-[21px] font-bold text-mist">{p.title}</h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-fog">{p.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          {/* cinematic foto */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative"
          >
            <div className="sticky top-28 overflow-hidden rounded-lg border border-hair">
              <div className="relative aspect-[3/4] lg:aspect-[4/5]">
                <img src={CINE.ruky} alt="Remeselník pri práci — mosadzná tvarovka" loading="lazy" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(11,16,19,0.8), transparent 55%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-[11px] uppercase tracking-label text-copper-light">Poctivá robota</span>
                  <p className="mt-1 font-display text-[18px] font-bold text-mist">Príde ten, s kým ste sa dohodli.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
