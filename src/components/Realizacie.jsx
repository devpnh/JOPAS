import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import { SectionHead, Plate, stagger, revealItem, reveal, VIEWPORT } from './ui';
import { PROJECTS } from '../lib/data';

function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const ref = useRef(null);
  const drag = useRef(false);
  const move = (x) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(3, Math.min(97, ((x - r.left) / r.width) * 100)));
  };
  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden border border-line md:aspect-[2/1]"
      style={{ touchAction: 'none' }}
      onPointerDown={(e) => { drag.current = true; move(e.clientX); }}
      onPointerMove={(e) => drag.current && move(e.clientX)}
      onPointerUp={() => (drag.current = false)}
      onPointerLeave={() => (drag.current = false)}
    >
      <Plate caption="po výmene · Vaillant" tone="petrol" className="absolute inset-0 h-full w-full" labelMode />
      <span className="absolute right-3 top-3 z-10 font-mono text-[11px] uppercase tracking-label text-copper">PO</span>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Plate caption="pôvodný stav" tone="copper" className="absolute inset-0 h-full w-full" labelMode />
        <span className="absolute left-3 top-3 font-mono text-[11px] uppercase tracking-label text-paper/60">PRED</span>
      </div>
      <div className="absolute inset-y-0 z-20 w-px bg-paper" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-copper text-white">
          <MoveHorizontal size={16} />
        </span>
      </div>
    </div>
  );
}

const SIZE = {
  wide: 'lg:col-span-7 aspect-[16/10]',
  std: 'lg:col-span-5 aspect-[4/3]',
  tall: 'lg:col-span-5 aspect-[4/3]',
};

function Project({ id, type, city, year, text, tone, size }) {
  return (
    <motion.article variants={revealItem} className={`group ${SIZE[size] ? SIZE[size].split(' ')[0] : 'lg:col-span-6'}`}>
      <Plate
        index={id}
        caption={type}
        tone={tone}
        className={`w-full ${SIZE[size] ? SIZE[size].split(' ')[1] : 'aspect-[4/3]'}`}
      />
      <div className="mt-3 flex items-baseline justify-between border-t border-line pt-3">
        <h3 className="font-display text-lg font-semibold text-ink">{type}</h3>
        <span className="font-mono text-[11px] uppercase tracking-label text-faint">{city} · {year}</span>
      </div>
      <p className="mt-1.5 text-[14px] leading-relaxed text-steel">{text}</p>
    </motion.article>
  );
}

export default function Realizacie() {
  return (
    <section className="border-t border-line bg-paper2 py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          id="realizacie"
          index="02"
          label="Realizácie"
          meta="Michalovce a okolie"
          title="Nedávno sme robili"
          intro="Pár vecí, ktoré máme za sebou. Reálne zákazky u ľudí v okolí — kotly, kúrenie, rozvody, kúpeľne."
        />

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="mt-12">
          <BeforeAfter />
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-3">
            <h3 className="font-display text-lg font-semibold text-ink">Výmena plynového kotla za Vaillant</h3>
            <span className="font-mono text-[11px] uppercase tracking-label text-faint">R-01 · Michalovce · 2024 · potiahnite ↔</span>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12"
        >
          {PROJECTS.slice(1).map((p) => (
            <Project key={p.id} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
