import { motion } from 'framer-motion';
import { Droplet, Waves, Thermometer, Flame, ShowerHead, Wrench } from 'lucide-react';
import { SectionHead, stagger, item, VIEWPORT } from './ui';
import { SERVICES } from '../lib/data';

const ICONS = { Droplet, Waves, Thermometer, Flame, ShowerHead, Wrench };

export default function Services() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="wrap">
        <SectionHead
          id="sluzby"
          index="01"
          eyebrow="Služby"
          title="Čo pre vás robíme"
          intro="Od opravy prasknutého potrubia po celú kotolňu. Robíme to, čo s vodou a kúrením treba — a robíme to tak, aby to vydržalo."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] || Wrench;
            return (
              <motion.div key={s.n} variants={item}
                className="rounded-lg border border-line bg-surface p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <Icon size={20} strokeWidth={1.75} className="text-accent" />
                  <span className="font-mono text-[11px] text-faint">{s.n}</span>
                </div>
                <h3 className="mt-4 font-display text-[1.25rem] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-steel">{s.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
