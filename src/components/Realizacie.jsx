import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHead, reveal, VIEWPORT } from './ui';
import { PROJECTS, asset } from '../lib/data';

export default function Realizacie() {
  const cats = useMemo(() => ['Všetko', ...Array.from(new Set(PROJECTS.map((p) => p.cat)))], []);
  const [filter, setFilter] = useState('Všetko');
  const list = filter === 'Všetko' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section className="border-t border-hair bg-void py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          id="realizacie"
          index="03"
          eyebrow="Realizácie"
          title="Z našej roboty."
          intro="Skutočné fotky našich realizácií — kotly, kúrenie, rozvody vody a kanalizácia v Michalovciach a okolí. Nie stock, ale robota, ktorú sme odviedli."
        />

        {/* filter */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-10 flex flex-wrap gap-2"
        >
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
                filter === c
                  ? 'border-copper bg-copper text-void'
                  : 'border-hair text-fog hover:border-strong hover:text-mist'
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* asymetrická mriežka */}
        <motion.div layout className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.figure
                key={p.img}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-lg border border-hair ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={asset(p.img)}
                  alt={`${p.caption} — ${p.cat}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.06] ${
                    i === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-[4/5]'
                  }`}
                />
                <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(11,16,19,0.9) 4%, rgba(11,16,19,0.1) 46%)' }} />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <span className="font-mono text-[10px] uppercase tracking-label text-copper-light">{p.cat}</span>
                  <p className="mt-1 translate-y-1 text-[14px] font-medium text-mist transition-transform duration-300 group-hover:translate-y-0">
                    {p.caption}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
