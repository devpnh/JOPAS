import { motion } from 'framer-motion';
import { ArrowUpRight, Droplet, Waves, Thermometer, Flame, ShowerHead, Wrench } from 'lucide-react';
import { SectionHead, stagger, revealItem, VIEWPORT } from './ui';
import { SERVICES } from '../lib/data';

const ICONS = { Droplet, Waves, Thermometer, Flame, ShowerHead, Wrench };

function Row({ n, icon, title, text }) {
  const Icon = ICONS[icon] || Wrench;
  return (
    <motion.a
      href="#kontakt"
      variants={revealItem}
      className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 border-b border-line py-7 transition-colors hover:bg-paper2/60 md:grid-cols-[5rem_minmax(0,16rem)_1fr_auto] md:items-center md:gap-x-8 md:px-2"
    >
      <span className="font-mono text-sm font-medium text-copper md:text-base">{n}</span>

      <h3 className="flex items-center gap-3 font-display text-[1.4rem] font-semibold leading-tight text-ink transition-colors group-hover:text-copper-deep md:text-[1.6rem]">
        <Icon size={20} strokeWidth={1.75} className="hidden text-copper md:block" />
        {title}
      </h3>

      <p className="col-span-2 max-w-xl text-[15px] leading-relaxed text-steel md:col-span-1">
        {text}
      </p>

      <ArrowUpRight
        size={22}
        className="hidden text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper md:block"
      />
    </motion.a>
  );
}

export default function Services() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          id="sluzby"
          index="01"
          label="Služby"
          meta="Voda · Kúrenie · Kotly · Sanita"
          title="Čo pre vás robíme"
          intro="Od opravy prasknutého potrubia po celú kotolňu. Robíme to, čo s vodou a kúrením treba — a robíme to tak, aby to vydržalo."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 border-t border-strong"
        >
          {SERVICES.map((s) => (
            <Row key={s.n} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
