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
          eyebrow="Služby"
          title="Čo pre vás robíme"
          intro="Od opravy prasknutého potrubia po celú kotolňu. Robíme to, čo s vodou a kúrením treba — a robíme to tak, aby to vydržalo."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-[rgba(20,24,28,0.10)] sm:grid-cols-2"
        >
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] || Wrench;
            return (
              <motion.div key={s.n} variants={item} className="flex gap-4 bg-surface p-6 md:p-7">
                <Icon size={22} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-[1.25rem] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-steel">{s.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
