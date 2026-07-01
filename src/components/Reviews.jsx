import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHead, stagger, item, VIEWPORT } from './ui';
import { REVIEWS } from '../lib/data';

export default function Reviews() {
  return (
    <section className="border-t border-hair bg-char py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          id="recenzie"
          index="04"
          eyebrow="Recenzie"
          title="Čo o nás hovoria."
          intro="Ľudia z Michaloviec a okolia, ktorým sme robili vodu, kúrenie alebo menili kotol."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {REVIEWS.map((r) => (
            <motion.figure
              key={r.name}
              variants={item}
              className="flex flex-col rounded-lg border border-hair bg-void p-7 transition-colors hover:border-copper/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label="5 z 5 hviezd">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="fill-copper text-copper" />
                  ))}
                </div>
                <Quote size={22} className="text-copper/25" />
              </div>
              <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed text-mist/90">{r.text}</blockquote>
              <figcaption className="mt-6 border-t border-hair pt-4">
                <span className="block text-[15px] font-semibold text-mist">{r.name}</span>
                <span className="font-mono text-[11px] uppercase tracking-label text-dim">{r.city}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
