import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { NAV, PHONE, PHONE_HREF } from '../lib/data';
import { useScrolled, useHideOnScroll } from '../lib/hooks';

export default function Header() {
  const scrolled = useScrolled(40);
  const hidden = useHideOnScroll();
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  return (
    <motion.header
      animate={{ y: hidden && !open ? '-100%' : '0%' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-colors duration-300 ${
          solid ? 'border-b border-line bg-paper/95 backdrop-blur' : 'border-b border-transparent'
        }`}
      >
        <div className="wrap flex h-[70px] items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2.5">
            <span className={`font-display text-[22px] font-extrabold tracking-[-0.04em] ${solid ? 'text-ink' : 'text-paper'}`}>
              JOPAS
            </span>
            <span className={`hidden font-mono text-[10px] uppercase tracking-label sm:block ${solid ? 'text-steel' : 'text-paper/60'}`}>
              vodár · kúrenár
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`font-mono text-[11px] uppercase tracking-label transition-colors hover:text-copper ${
                  solid ? 'text-steel' : 'text-paper/75'
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={PHONE_HREF} className="btn btn-md hidden bg-copper text-white hover:bg-copper-deep sm:inline-flex">
              <Phone size={16} strokeWidth={2} />
              <span className="font-mono text-[13px] font-semibold">{PHONE}</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className={solid ? 'text-ink lg:hidden' : 'text-paper lg:hidden'}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-b border-line bg-paper lg:hidden"
          >
            <div className="wrap flex flex-col py-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line2 py-3.5 font-display text-lg font-semibold text-ink"
                >
                  {n.label}
                  <span className="font-mono text-[11px] text-faint">↗</span>
                </a>
              ))}
              <a href={PHONE_HREF} className="btn btn-md mt-4 bg-copper text-white">
                <Phone size={18} /> <span className="font-mono">{PHONE}</span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
