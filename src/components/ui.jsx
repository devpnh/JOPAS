import { motion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];
export const VIEWPORT = { once: true, margin: '-60px' };

export const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
export const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// Pokojná hlavička sekcie — malý modrý štítok + nadpis (+ voliteľný úvod).
export function SectionHead({ id, eyebrow, title, intro, center = false, light = false }) {
  return (
    <motion.div
      id={id}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`scroll-mt-24 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}
    >
      <span className={`eyebrow ${light ? '!text-accent-light' : ''}`}>{eyebrow}</span>
      <h2 className={`mt-3 text-[clamp(1.75rem,3.4vw,2.6rem)] font-semibold leading-[1.08] ${light ? '!text-white' : ''}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[16px] leading-relaxed ${light ? 'text-white/70' : 'text-steel'}`}>{intro}</p>
      )}
    </motion.div>
  );
}
