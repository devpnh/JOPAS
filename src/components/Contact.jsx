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
    <section className="border-t border-hair bg-void py-20 md:py-28">
      <div className="wrap">
        <SectionHead id="kontakt" index="07" eyebrow="Kontakt" title="Zavolajte. Ozveme sa." />

        <motion.a
          href={PHONE_HREF}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="group mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-hair py-7"
          data-contact="phone"
        >
          <Phone className="text-copper" size={32} />
          <span className="font-display text-[clamp(2.2rem,7vw,4rem)] font-extrabold leading-none text-mist transition-colors group-hover:text-copper">
            {PHONE}
          </span>
        </motion.a>
        <p className="mt-6 max-w-prose text-[15.5px] leading-relaxed text-fog">
          Najrýchlejšie nás zastihnete telefonicky. Dvíhame aj cez deň priamo na stavbe — a keď to
          nestihneme, zavoláme späť. Obhliadka aj cena sú nezáväzné.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* form */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <span className="label">Alebo napíšte dopyt</span>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-start gap-3 rounded-lg border border-copper/40 bg-copper/[0.07] p-6"
                >
                  <Check className="mt-0.5 shrink-0 text-copper" size={20} />
                  <p className="text-[15px] leading-relaxed text-mist">
                    Dopyt máme. Ozveme sa vám čo najskôr — väčšinou ešte dnes. Ak je to súrne, zavolajte na{' '}
                    <a href={PHONE_HREF} className="font-mono font-semibold text-copper">{PHONE}</a>.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="mt-5 flex flex-col gap-4"
                >
                  <Field label="Meno" name="meno" placeholder="Ako vás oslovíme" />
                  <Field label="Telefón" name="tel" type="tel" placeholder="+421" />
                  <div>
                    <label htmlFor="sprava" className="mb-1.5 block text-[13px] font-medium text-fog">Čo treba spraviť</label>
                    <textarea
                      id="sprava"
                      required
                      rows={4}
                      placeholder="Napr. nekúri kotol, kvapká voda pod drezom, plánujem kúpeľňu…"
                      className="field resize-none"
                    />
                  </div>
                  <button type="submit" className="btn btn-md btn-copper self-start">Pošlite dopyt</button>
                  <p className="text-[12px] leading-relaxed text-dim">
                    Odoslaním súhlasíte so spracovaním údajov za účelom vybavenia dopytu.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* company data */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <span className="label">JOPAS s.r.o. — údaje</span>
            <dl className="mt-5 overflow-hidden rounded-lg border border-hair bg-char">
              {COMPANY.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-hair2 px-5 py-3.5 last:border-0">
                  <dt className="font-mono text-[11px] uppercase tracking-label text-dim">{k}</dt>
                  <dd className="text-right font-mono text-[13px] text-mist">{v}</dd>
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
      <label htmlFor={name} className="mb-1.5 block text-[13px] font-medium text-fog">{label}</label>
      <input id={name} name={name} type={type} required placeholder={placeholder} className="field" />
    </div>
  );
}
