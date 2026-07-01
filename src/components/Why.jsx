import { motion } from 'framer-motion';
import { Phone, ShieldCheck } from 'lucide-react';
import { SectionHead, stagger, item, reveal, VIEWPORT } from './ui';
import { WHY, PHONE, PHONE_HREF } from '../lib/data';

export default function Why() {
  return (
    <section className="grain relative overflow-hidden border-t border-hair bg-char py-20 md:py-28">
      <div className="grid-faint pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(70% 60% at 12% 100%, rgba(51,150,212,0.16), transparent 62%)' }}
      />
      <div className="wrap relative z-[2]">
        <SectionHead
          id="preco"
          index="06"
          eyebrow="Prečo JOPAS"
          title="Robíme to narovinu."
          intro="Bez veľkých rečí. Toto sú dôvody, prečo nám ľudia v okolí volajú znova a posielajú susedov."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2"
        >
          {WHY.map((w, i) => (
            <motion.div key={w.title} variants={item} className="flex gap-5 border-t border-hair pt-6">
              <span className="font-mono text-[13px] font-medium text-copper">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="flex items-center gap-2.5 font-display text-[1.35rem] font-bold text-mist">
                  <ShieldCheck size={19} strokeWidth={2} className="text-copper" />
                  {w.title}
                </h3>
                <p className="mt-2.5 text-[15.5px] leading-relaxed text-fog">{w.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 flex flex-col items-start justify-between gap-5 rounded-xl border border-copper/25 bg-void p-7 sm:flex-row sm:items-center md:p-9"
        >
          <p className="max-w-lg font-display text-[1.4rem] font-bold leading-snug text-mist">
            Potrebujete vodára alebo kúrenára? <span className="text-copper">Zdvihneme to.</span>
          </p>
          <a href={PHONE_HREF} className="btn btn-lg btn-copper shrink-0" data-contact="phone">
            <Phone size={18} /> <span className="font-mono">{PHONE}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
