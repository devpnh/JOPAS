import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { PHONE_HREF } from '../lib/data';
import { usePastHero } from '../lib/hooks';

export default function StickyCallBar() {
  const past = usePastHero(0.9);
  return (
    <AnimatePresence>
      {past && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-surface lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <a href={PHONE_HREF} className="flex flex-[3] items-center justify-center gap-2 bg-accent py-3.5 text-white">
            <Phone size={18} /> <span className="font-mono text-sm font-semibold">Zavolať</span>
          </a>
          <a href="#kontakt" className="flex flex-[2] items-center justify-center py-3.5 text-[15px] font-semibold text-ink">
            Dopyt
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
