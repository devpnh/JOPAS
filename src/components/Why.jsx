import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { SectionHead, stagger, revealItem, reveal, VIEWPORT } from './ui';
import { WHY, PHONE, PHONE_HREF } from '../lib/data';

export default function Why() {
  return (
    <section className="relative bg-graphite py-20 text-paper md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="wrap relative">
        <SectionHead
          id="preco"
          index="05"
          label="Prečo JOPAS"
          meta="Narovinu"
          title="Robíme to narovinu"
          intro="Bez veľkých rečí. Toto sú dôvody, prečo nám ľudia v okolí volajú znova a posielajú susedov."
          dark
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid gap-px border border-invert bg-[rgba(255,255,255,0.14)] sm:grid-cols-2"
        >
          {WHY.map((w) => (
            <motion.div key={w.n} variants={revealItem} className="bg-graphite p-8 md:p-10">
              <span className="font-mono text-sm font-medium text-copper">{w.n}</span>
              <h3 className="mt-4 font-display text-[1.45rem] font-semibold !text-paper">{w.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/65">{w.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-invert pt-8 md:flex-row md:items-center"
        >
          <p className="max-w-xl font-display text-xl font-semibold !text-paper">
            Potrebujete vodára alebo kúrenára? Zdvihneme to.
          </p>
          <a href={PHONE_HREF} className="btn btn-lg btn-copper shrink-0">
            <Phone size={19} /> <span className="font-mono">{PHONE}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
