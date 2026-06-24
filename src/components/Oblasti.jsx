import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { SectionHead, reveal, VIEWPORT } from './ui';
import { CITIES, PHONE, PHONE_HREF } from '../lib/data';
import OblastiMap from './OblastiMap';

export default function Oblasti() {
  return (
    <section className="border-t border-line bg-bg py-16 md:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead
            id="oblasti"
            index="04"
            eyebrow="Oblasti"
            title="Kde robíme"
            intro="Sídlime v Michalovciach a chodíme po okolí — v Košickom aj Prešovskom kraji. Toto nie je úplný zoznam; ak vás v ňom nevidíte, aj tak zavolajte."
          />
          <motion.ul
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-8 flex flex-wrap gap-2"
          >
            {CITIES.map((c) => (
              <li key={c.name} className="flex items-center gap-1.5 rounded-md border border-line bg-surface px-3.5 py-2 text-[14px] font-medium text-body shadow-card">
                <MapPin size={14} className="text-accent" /> {c.name}
              </li>
            ))}
          </motion.ul>
          <a href={PHONE_HREF} className="btn btn-md btn-line mt-7">
            <Phone size={16} /> <span className="font-mono text-[13px]">{PHONE}</span>
          </a>
        </div>

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <OblastiMap />
        </motion.div>
      </div>
    </section>
  );
}
