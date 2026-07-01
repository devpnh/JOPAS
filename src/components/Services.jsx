import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowUpRight } from 'lucide-react';
import { SERVICES, PHONE, PHONE_HREF } from '../lib/data';
import { SectionHead, reveal, VIEWPORT } from './ui';

const tintText = (t) => (t === 'copper' ? 'text-copper' : 'text-steel-light');

export default function Services() {
  const [active, setActive] = useState(0);
  const cur = SERVICES[active];

  return (
    <section className="bg-void py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          id="sluzby"
          index="01"
          eyebrow="Naše služby"
          title="Voda, kúrenie a všetko okolo."
          intro="Od prasknutého spoja po celú kotolňu. Poviete čo treba — my prídeme, poradíme a spravíme to poriadne."
        />

        {/* DESKTOP: interaktívny zoznam + cinematic foto */}
        <div className="mt-14 hidden gap-12 lg:grid lg:grid-cols-[1fr_460px]">
          <ul>
            {SERVICES.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.n}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group flex w-full items-start gap-6 border-t border-hair py-6 text-left transition-colors last:border-b"
                  >
                    <span className={`font-mono text-[13px] font-medium transition-colors ${on ? tintText(s.tint) : 'text-dim'}`}>
                      {s.n}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-3">
                        <span className={`font-display text-[26px] font-bold transition-colors ${on ? 'text-mist' : 'text-fog'}`}>
                          {s.title}
                        </span>
                        <ArrowUpRight
                          size={20}
                          className={`transition-all ${on ? `${tintText(s.tint)} translate-x-0 opacity-100` : '-translate-x-1 opacity-0'}`}
                        />
                      </span>
                      <AnimatePresence initial={false}>
                        {on && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="block overflow-hidden"
                          >
                            <span className="mt-2.5 block max-w-lg text-[15px] leading-relaxed text-fog">{s.text}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="relative">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-hair">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={cur.img}
                    src={cur.img}
                    alt={cur.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(11,16,19,0.85), transparent 55%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`font-mono text-[11px] uppercase tracking-label ${tintText(cur.tint)}`}>
                    {cur.n} — {cur.tint === 'copper' ? 'Teplo' : 'Voda'}
                  </span>
                  <div className="mt-1 font-display text-[22px] font-bold text-mist">{cur.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: karty s fotkou */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {SERVICES.map((s) => (
            <motion.div
              key={s.n}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="overflow-hidden rounded-lg border border-hair bg-char"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(11,16,19,0.8), transparent 60%)' }} />
                <span className={`absolute bottom-3 left-3 font-mono text-[11px] uppercase tracking-label ${tintText(s.tint)}`}>{s.n}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-[20px] font-bold text-mist">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-fog">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 flex flex-col items-start gap-4 border-t border-hair pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[16px] text-fog">Neviete čo presne potrebujete? Zavolajte, poradíme zdarma.</p>
          <a href={PHONE_HREF} className="btn btn-md btn-copper" data-contact="phone">
            <Phone size={17} /> <span className="font-mono">{PHONE}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
