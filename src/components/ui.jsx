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
export const revealItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// „Spec sheet" hlavička sekcie — index + label vľavo, meta vpravo, veľký nadpis.
export function SectionHead({ index, label, title, meta, intro, dark = false, id }) {
  const sub = dark ? 'text-paper/55' : 'text-steel';
  return (
    <div id={id} className="scroll-mt-24">
      <div className={`flex items-center justify-between border-t ${dark ? 'border-invert' : 'border-strong'} pt-4`}>
        <span className="label">
          <span className="text-copper">{index}</span>
          <span className={dark ? 'text-paper/70' : 'text-ink'}> — {label}</span>
        </span>
        {meta && <span className={`label hidden sm:block ${sub}`}>{meta}</span>}
      </div>
      <motion.h2
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={`mt-7 max-w-3xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.04] ${dark ? '!text-paper' : ''}`}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className={`mt-5 max-w-prose text-[17px] leading-relaxed ${dark ? 'text-paper/70' : 'text-steel'}`}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}

// Dokumentárny placeholder pre fotku — technický, nie gradientový „AI" blok.
export function Plate({ caption, index, tone = 'graphite', className = '', labelMode = false }) {
  const tones = {
    graphite: { bg: '#191C1F', fg: 'rgba(255,255,255,0.40)', tint: 'rgba(176,103,60,0.0)' },
    steel: { bg: '#22282C', fg: 'rgba(255,255,255,0.38)', tint: 'rgba(20,58,69,0.35)' },
    copper: { bg: '#1d1714', fg: 'rgba(255,255,255,0.40)', tint: 'rgba(176,103,60,0.28)' },
    petrol: { bg: '#10282F', fg: 'rgba(255,255,255,0.40)', tint: 'rgba(20,58,69,0.5)' },
  };
  const t = tones[tone] || tones.graphite;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: t.bg }}
    >
      {/* jemný „blueprint" raster + radiálny nádych */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            `linear-gradient(${t.fg} 1px, transparent 1px), linear-gradient(90deg, ${t.fg} 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          opacity: 0.06,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `radial-gradient(120% 90% at 75% 15%, ${t.tint}, transparent 60%)` }}
      />
      {index && (
        <span className="absolute left-4 top-4 font-mono text-[11px] font-medium tracking-label text-copper">
          {index}
        </span>
      )}
      <span
        className="absolute bottom-4 left-4 right-4 font-mono text-[11px] uppercase tracking-label"
        style={{ color: t.fg }}
      >
        {labelMode ? caption : `[ foto ] ${caption}`}
      </span>
    </div>
  );
}
