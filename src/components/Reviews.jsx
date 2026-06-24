import { motion } from 'framer-motion';
import { SectionHead, stagger, item, VIEWPORT } from './ui';
import { REVIEWS } from '../lib/data';

export default function Reviews() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="wrap">
        <SectionHead id="recenzie" index="03" eyebrow="Recenzie" title="Čo o nás hovoria" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {REVIEWS.map((r) => (
            <motion.figure key={r.name} variants={item} className="flex flex-col rounded-lg border border-line bg-surface p-6 shadow-card">
              <span className="font-display text-4xl leading-none text-accent/40">“</span>
              <blockquote className="mt-2 flex-1 text-[16px] leading-relaxed text-body">{r.text}</blockquote>
              <figcaption className="mt-5 border-t border-line2 pt-4">
                <span className="block text-[15px] font-semibold text-ink">{r.name}</span>
                <span className="font-mono text-[11px] uppercase tracking-label text-faint">{r.city}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
