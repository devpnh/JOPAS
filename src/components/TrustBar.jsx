import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS, BRANDS } from '../lib/data';
import { useCountUp } from '../lib/hooks';
import { VIEWPORT, stagger, item } from './ui';

function Stat({ s, run }) {
  const val = useCountUp(s.num ?? 0, run);
  return (
    <motion.div variants={item} className="px-5 py-8 md:py-10">
      <div className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-none text-mist">
        {s.text ? s.text : (
          <>
            {val}
            {s.suffix && <span className="text-copper">{s.suffix}</span>}
          </>
        )}
      </div>
      <div className="mt-3 font-mono text-[11px] uppercase tracking-label text-dim">{s.label}</div>
    </motion.div>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="border-y border-hair bg-char">
      <div className="wrap">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-2 divide-x divide-y divide-hair border-x border-hair lg:grid-cols-4 lg:divide-y-0"
          style={{ borderTop: 'none' }}
        >
          {STATS.map((s) => (
            <Stat key={s.label} s={s} run={inView} />
          ))}
        </motion.div>

        <div className="flex flex-col items-start gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-[11px] uppercase tracking-label text-dim">
            Montujeme a dodávame overené značky
          </span>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {BRANDS.map((b) => (
              <li
                key={b}
                className="rounded-full border border-hair px-3.5 py-1.5 font-mono text-[12px] tracking-wide text-fog"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
