import { motion } from 'framer-motion';
import { SectionHead, stagger, revealItem, VIEWPORT } from './ui';
import { REVIEWS } from '../lib/data';

export default function Reviews() {
  return (
    <section className="border-t border-line bg-paper py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          id="recenzie"
          index="03"
          label="Recenzie"
          meta="Od reálnych zákazníkov"
          title="Čo o nás hovoria"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid gap-px border border-line bg-[rgba(20,22,25,0.16)] md:grid-cols-3"
        >
          {REVIEWS.map((r) => (
            <motion.figure key={r.name} variants={revealItem} className="flex flex-col bg-paper p-7 md:p-8">
              <span className="font-display text-5xl leading-none text-copper">“</span>
              <blockquote className="mt-3 flex-1 text-[17px] leading-relaxed text-body">{r.text}</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <span className="block font-display text-base font-semibold text-ink">{r.name}</span>
                <span className="font-mono text-[11px] uppercase tracking-label text-faint">{r.city}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
