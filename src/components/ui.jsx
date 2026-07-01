import { motion } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1];
export const VIEWPORT = { once: true, margin: '-70px' };

export const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
export const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Technická hlavička sekcie — hairline + medený index + mono eyebrow + nadpis.
export function SectionHead({ id, index, eyebrow, title, intro, className = '' }) {
  return (
    <motion.div
      id={id}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`scroll-mt-28 ${className}`}
    >
      <div className="flex items-center gap-4 border-t border-hair pt-5">
        {index && <span className="sec-index text-[13px]">{index}</span>}
        <span className="label">{eyebrow}</span>
      </div>
      <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.4vw,3.25rem)] font-bold leading-[1.02]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-fog">
          {intro}
        </p>
      )}
    </motion.div>
  );
}
