import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { NAV, PHONE, PHONE_HREF, asset } from '../lib/data';
import { useScrolled, useHideOnScroll } from '../lib/hooks';

export default function Header() {
  const scrolled = useScrolled(20);
  const hidden = useHideOnScroll();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      animate={{ y: hidden && !open ? '-100%' : '0%' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/95 backdrop-blur"
    >
      <div className="wrap flex h-[68px] items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={asset('logo.png')} alt="JOPAS" className="h-7 w-auto" width="220" height="68" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[14px] font-medium text-steel transition-colors hover:text-accent">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className="btn btn-md btn-accent hidden sm:inline-flex">
            <Phone size={16} />
            <span className="font-mono text-[13px]">{PHONE}</span>
          </a>
          <button onClick={() => setOpen((v) => !v)} aria-label="Menu" className="text-ink lg:hidden">
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
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
          >
            <div className="wrap flex flex-col py-2">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className="border-b border-line2 py-3.5 text-[15px] font-medium text-ink last:border-0">
                  {n.label}
                </a>
              ))}
              <a href={PHONE_HREF} className="btn btn-md btn-accent my-3">
                <Phone size={18} /> <span className="font-mono">{PHONE}</span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
