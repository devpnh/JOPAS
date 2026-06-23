import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowUpRight } from 'lucide-react';
import { PHONE, PHONE_HREF } from '../lib/data';
import { usePastHero } from '../lib/hooks';

export default function StickyCallBar() {
  const past = usePastHero(0.85);
  return (
    <AnimatePresence>
      {past && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex border-t border-ink bg-paper lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <a href={PHONE_HREF} className="flex flex-[3] items-center justify-center gap-2 bg-copper py-3.5 text-white">
            <Phone size={18} /> <span className="font-mono text-sm font-semibold">Zavolať</span>
          </a>
          <a href="#kontakt" className="flex flex-[2] items-center justify-center gap-1.5 py-3.5 text-ink">
            <span className="text-sm font-semibold">Dopyt</span> <ArrowUpRight size={16} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
