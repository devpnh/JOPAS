import { motion } from 'framer-motion';
import { Phone, Check } from 'lucide-react';
import { SectionHead, stagger, item, reveal, VIEWPORT } from './ui';
import { WHY, PHONE, PHONE_HREF } from '../lib/data';

export default function Why() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
      <div className="grid-faint pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(80% 70% at 15% 100%, rgba(30,132,196,0.18), transparent 60%)' }}
      />
      <div className="wrap relative">
        <SectionHead
          id="preco"
          index="05"
          eyebrow="Prečo JOPAS"
          title="Robíme to narovinu"
          intro="Bez veľkých rečí. Toto sú dôvody, prečo nám ľudia v okolí volajú znova a posielajú susedov."
          dark
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2"
        >
          {WHY.map((w) => (
            <motion.div key={w.title} variants={item} className="border-t border-invert pt-5">
              <h3 className="flex items-center gap-2.5 font-display text-[1.2rem] font-semibold !text-white">
                <Check size={18} strokeWidth={2.25} className="text-accent-light" />
                {w.title}
              </h3>
              <p className="mt-2 pl-[1.85rem] text-[15px] leading-relaxed text-white/65">{w.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 flex flex-col items-start justify-between gap-4 rounded-lg border border-invert2 bg-navy2 p-6 sm:flex-row sm:items-center"
        >
          <p className="font-display text-[1.15rem] font-semibold !text-white">
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
