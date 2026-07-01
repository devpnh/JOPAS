import { motion } from 'framer-motion';
import { AlertTriangle, PhoneCall } from 'lucide-react';
import { EMERGENCY, PHONE, PHONE_HREF } from '../lib/data';
import { reveal, VIEWPORT } from './ui';

export default function Emergency() {
  return (
    <section className="bg-void">
      <div className="wrap py-6">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative flex flex-col items-start gap-5 overflow-hidden rounded-lg border border-ember/30 bg-ember/[0.07] p-6 md:flex-row md:items-center md:justify-between md:p-7"
          style={{ borderLeft: '3px solid #D64A2E' }}
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="mt-0.5 shrink-0 text-ember" size={26} />
            <div>
              <h3 className="text-[19px] font-bold text-mist">{EMERGENCY.title}</h3>
              <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-fog">{EMERGENCY.text}</p>
            </div>
          </div>
          <a href={PHONE_HREF} className="btn btn-md btn-ember shrink-0" data-contact="emergency">
            <PhoneCall size={18} /> <span>Volať ihneď — <span className="font-mono">{PHONE}</span></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
