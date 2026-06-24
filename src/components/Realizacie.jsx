import { motion } from 'framer-motion';
import { SectionHead, stagger, item, VIEWPORT } from './ui';
import { PROJECTS, asset } from '../lib/data';

export default function Realizacie() {
  return (
    <section className="border-t border-line bg-panel py-16 md:py-24">
      <div className="wrap">
        <SectionHead
          id="realizacie"
          index="02"
          eyebrow="Realizácie"
          title="Z našej roboty"
          intro="Skutočné fotky našich realizácií — kotly, kúrenie, rozvody vody a kanalizácia v Michalovciach a okolí."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
        >
          {PROJECTS.map((p) => (
            <motion.figure key={p.img} variants={item} className="overflow-hidden rounded-lg border border-line bg-surface shadow-card">
              <img
                src={asset(p.img)}
                alt={`${p.caption} — ${p.cat}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="flex items-baseline justify-between gap-2 px-3.5 py-3">
                <span className="text-[13px] font-medium text-ink">{p.caption}</span>
                <span className="font-mono text-[10px] uppercase tracking-label text-faint">{p.cat}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
