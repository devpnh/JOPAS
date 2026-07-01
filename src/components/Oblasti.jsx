import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { SectionHead, reveal, VIEWPORT } from './ui';
import { CITIES, PHONE, PHONE_HREF } from '../lib/data';
import OblastiMap from './OblastiMap';

export default function Oblasti() {
  return (
    <section className="border-t border-hair bg-void py-20 md:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead
            id="oblasti"
            index="05"
            eyebrow="Oblasti pôsobenia"
            title="Kde robíme."
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
              <li
                key={c.name}
                className={`flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[14px] font-medium transition-colors ${
                  c.home
                    ? 'border-copper/50 bg-copper/10 text-mist'
                    : 'border-hair text-fog hover:border-strong hover:text-mist'
                }`}
              >
                <MapPin size={14} className={c.home ? 'text-copper' : 'text-steel-light'} /> {c.name}
              </li>
            ))}
          </motion.ul>
          <a href={PHONE_HREF} className="btn btn-md btn-line mt-8" data-contact="phone">
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
