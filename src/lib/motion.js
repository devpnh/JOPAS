// JOPAS motion systém v1.0 — decentný, expo-out, reveal raz.
export const EASE_EXPO = [0.16, 1, 0.3, 1];
export const EASE_QUAD = [0.25, 0.46, 0.45, 0.94];

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_EXPO } },
};

export const fadeInUpScale = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE_EXPO } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_QUAD } },
};

export const underlineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: EASE_EXPO, delay: 0.15 } },
};

// Spoločné nastavenie viewportu pre whileInView
export const VIEWPORT = { once: true, margin: '-80px' };
