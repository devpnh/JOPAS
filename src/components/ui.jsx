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

// Technická hlavička sekcie — hairline + mono index/label + nadpis.
export function SectionHead({ id, index, eyebrow, title, intro, dark = false }) {
  return (
    <motion.div
      id={id}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="scroll-mt-24"
    >
      <div className={`flex items-center gap-3 border-t pt-4 ${dark ? 'border-invert2' : 'border-strong'}`}>
        <span className="label">
          {index && <span className="text-accent-light">{index}</span>}
          {index && <span className={dark ? 'text-white/40' : 'text-faint'}> — </span>}
          <span className={dark ? 'text-white/75' : 'text-ink'}>{eyebrow}</span>
        </span>
      </div>
      <h2 className={`mt-6 max-w-2xl text-[clamp(1.9rem,3.6vw,2.75rem)] font-semibold leading-[1.05] ${dark ? '!text-white' : ''}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 max-w-prose text-[16px] leading-relaxed ${dark ? 'text-white/65' : 'text-steel'}`}>
          {intro}
        </p>
      )}
    </motion.div>
  );
}
