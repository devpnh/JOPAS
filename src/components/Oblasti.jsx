import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { SectionHead, Plate, stagger, revealItem, reveal, VIEWPORT } from './ui';
import { CITIES, PHONE, PHONE_HREF } from '../lib/data';

export default function Oblasti() {
  return (
    <section className="border-t border-line bg-paper2 py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          id="oblasti"
          index="04"
          label="Oblasti"
          meta="Košický a Prešovský kraj"
          title="Kde robíme"
          intro="Sídlime v Michalovciach a chodíme po okolí. Toto sú mestá, kam sa bežne dostaneme — a nie je to úplný zoznam."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="border-t border-strong">
            {CITIES.map((c, i) => (
              <motion.li
                key={c}
                variants={revealItem}
                className="flex items-baseline justify-between border-b border-line py-4"
              >
                <span className="font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold text-ink">{c}</span>
                <span className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, '0')}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="flex flex-col">
            <Plate caption="Michalovce a okolie" tone="petrol" index="MAPA" className="aspect-[4/3] w-full" labelMode />
            <div className="mt-6 border-t border-line pt-6">
              <p className="text-[15px] leading-relaxed text-steel">
                Nie ste v zozname? Aj tak zavolajte — väčšinou sa dohodneme. Pri väčších zákazkách
                dôjdeme aj ďalej.
              </p>
              <a href={PHONE_HREF} className="btn btn-md btn-line mt-5">
                <Phone size={17} /> <span className="font-mono text-[13px]">{PHONE}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
