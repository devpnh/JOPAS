import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Check } from 'lucide-react';
import { SectionHead, reveal, VIEWPORT } from './ui';
import { PHONE, PHONE_HREF, EMAIL } from '../lib/data';

const COMPANY = [
  ['Telefón', PHONE],
  ['E-mail', EMAIL],
  ['Pôsobnosť', 'Michalovce · Košický a Prešovský kraj'],
  ['IČO', '50 180 321'],
  ['DIČ', '2120202359'],
  ['IČ DPH', 'SK2120202359'],
  ['IBAN', 'SK35 0900 0000 0051 0947 2530'],
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="border-t border-line bg-bg py-16 md:py-24">
      <div className="wrap">
        <SectionHead id="kontakt" eyebrow="Kontakt" title="Zavolajte. Ozveme sa." />

        <motion.a
          href={PHONE_HREF}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="group mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <Phone className="text-accent" size={30} />
          <span className="font-display text-[clamp(2rem,6vw,3.6rem)] font-semibold leading-none text-ink transition-colors group-hover:text-accent">
            {PHONE}
          </span>
        </motion.a>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-steel">
          Najrýchlejšie nás zastihnete telefonicky. Dvíhame aj cez deň priamo na stavbe — a keď to
          nestihneme, zavoláme späť. Obhliadka aj cena sú nezáväzné.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* form */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <span className="eyebrow">Alebo napíšte</span>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-start gap-3 rounded-lg border border-success/40 bg-success/5 p-5">
                  <Check className="mt-0.5 shrink-0 text-success" size={20} />
                  <p className="text-[15px] leading-relaxed text-body">
                    Dopyt máme. Ozveme sa vám čo najskôr — väčšinou ešte dnes. Ak je to súrne, zavolajte na{' '}
                    <a href={PHONE_HREF} className="font-mono font-semibold text-accent">{PHONE}</a>.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" exit={{ opacity: 0 }}
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="mt-5 flex flex-col gap-4">
                  <Field label="Meno" name="meno" placeholder="Ako vás oslovíme" />
                  <Field label="Telefón" name="tel" type="tel" placeholder="+421" />
                  <div>
                    <label htmlFor="sprava" className="text-[13px] font-medium text-steel">Čo treba spraviť</label>
                    <textarea id="sprava" required rows={4}
                      placeholder="Napr. nekúri kotol, kvapká voda pod drezom, plánujem kúpeľňu…"
                      className="mt-1.5 w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </div>
                  <button type="submit" className="btn btn-md btn-accent self-start">Pošlite dopyt</button>
                  <p className="text-[12px] leading-relaxed text-faint">
                    Odoslaním súhlasíte so spracovaním údajov za účelom vybavenia dopytu.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* company data */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <span className="eyebrow">JOPAS s.r.o.</span>
            <dl className="mt-5 rounded-lg border border-line bg-surface">
              {COMPANY.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-line2 px-4 py-3 last:border-0">
                  <dt className="text-[12px] uppercase tracking-[0.06em] text-faint">{k}</dt>
                  <dd className="text-right font-mono text-[13px] text-body">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="text-[13px] font-medium text-steel">{label}</label>
      <input id={name} name={name} type={type} required placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-ink outline-none transition placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent/20" />
    </div>
  );
}
