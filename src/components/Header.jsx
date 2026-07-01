import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { NAV, PHONE, PHONE_HREF, asset } from '../lib/data';
import { useScrolled, useHideOnScroll } from '../lib/hooks';

export default function Header() {
  const scrolled = useScrolled(40);
  const hidden = useHideOnScroll();
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  return (
    <motion.header
      animate={{ y: hidden && !open ? '-100%' : '0%' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-hair bg-void/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-[70px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="JOPAS — domov">
          <img
            src={asset('logo.png')}
            alt="JOPAS"
            className="h-[26px] w-auto brightness-0 invert"
            width="220" height="68"
          />
          <span className="hidden font-mono text-[10px] uppercase tracking-label text-dim sm:block">
            vodár · kúrenár
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[14px] font-medium text-fog transition-colors hover:text-mist"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className="btn btn-md btn-copper hidden sm:inline-flex" data-contact="phone">
            <Phone size={16} /> <span className="font-mono text-[13px]">{PHONE}</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'}
            className="text-mist lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-hair bg-void lg:hidden"
          >
            <div className="wrap flex flex-col py-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-hair2 py-4 text-[16px] font-medium text-mist last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <a href={PHONE_HREF} className="btn btn-md btn-copper my-3">
                <Phone size={18} /> <span className="font-mono">{PHONE}</span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
