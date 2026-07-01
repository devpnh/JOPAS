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
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex border-t border-hair bg-char/95 backdrop-blur-lg lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <a href={PHONE_HREF} className="flex flex-[3] items-center justify-center gap-2 bg-copper py-4 text-void" data-contact="phone">
            <Phone size={18} /> <span className="font-mono text-sm font-bold">Zavolať</span>
          </a>
          <a href="#kontakt" className="flex flex-[2] items-center justify-center py-4 text-[15px] font-semibold text-mist">
            Napíšte dopyt
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
