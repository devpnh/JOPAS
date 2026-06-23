import { motion } from 'framer-motion';
import { Phone, Check } from 'lucide-react';
import { SectionHead, stagger, item, reveal, VIEWPORT } from './ui';
import { WHY, PHONE, PHONE_HREF } from '../lib/data';

export default function Why() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="wrap">
        <SectionHead
          id="preco"
          eyebrow="Prečo JOPAS"
          title="Robíme to narovinu"
          intro="Bez veľkých rečí. Toto sú dôvody, prečo nám ľudia v okolí volajú znova a posielajú susedov."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2"
        >
          {WHY.map((w) => (
            <motion.div key={w.title} variants={item} className="border-t border-line pt-5">
              <h3 className="flex items-center gap-2.5 font-display text-[1.2rem] font-semibold text-ink">
                <Check size={18} strokeWidth={2.25} className="text-accent" />
                {w.title}
              </h3>
              <p className="mt-2 pl-[1.85rem] text-[15px] leading-relaxed text-steel">{w.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 flex flex-col items-start justify-between gap-4 rounded-lg border border-line bg-surface p-6 sm:flex-row sm:items-center"
        >
          <p className="font-display text-[1.15rem] font-semibold text-ink">
            Potrebujete vodára alebo kúrenára? Zdvihneme to.
          </p>
          <a href={PHONE_HREF} className="btn btn-md btn-accent shrink-0">
            <Phone size={17} /> <span className="font-mono text-[13px]">{PHONE}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
