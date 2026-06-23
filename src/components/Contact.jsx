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
    <section className="border-t border-line bg-paper py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          id="kontakt"
          index="06"
          label="Kontakt"
          meta="Najlepšie telefónom"
          title="Zavolajte. Ozveme sa."
        />

        {/* veľké telefónne číslo = hlavné CTA */}
        <motion.a
          href={PHONE_HREF}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="group mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-strong py-8"
        >
          <Phone className="text-copper" size={34} strokeWidth={1.75} />
          <span className="font-display text-[clamp(2.4rem,7vw,5rem)] font-extrabold leading-none tracking-[-0.03em] text-ink transition-colors group-hover:text-copper-deep">
            {PHONE}
          </span>
        </motion.a>
        <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-steel">
          Najrýchlejšie nás zastihnete telefonicky. Dvíhame aj cez deň priamo na stavbe — a keď to
          nestihneme, zavoláme späť. Obhliadka aj cena sú nezáväzné.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* formulár */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <span className="label">Alebo napíšte</span>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-start gap-4 border border-success/40 bg-success/5 p-6"
                >
                  <Check className="mt-0.5 shrink-0 text-success" size={22} />
                  <p className="text-[15px] leading-relaxed text-body">
                    Dopyt máme. Ozveme sa vám čo najskôr — väčšinou ešte dnes. Ak je to súrne,
                    zavolajte na <a href={PHONE_HREF} className="font-mono font-semibold text-copper-deep">{PHONE}</a>.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="mt-6 flex flex-col gap-5"
                >
                  <Field label="Meno" name="meno" placeholder="Ako vás oslovíme" />
                  <Field label="Telefón" name="tel" type="tel" placeholder="+421" />
                  <div>
                    <label className="label" htmlFor="sprava">Čo treba spraviť</label>
                    <textarea
                      id="sprava"
                      required
                      rows={4}
                      placeholder="Napr. nekúri kotol, kvapká voda pod drezom, plánujem kúpeľňu…"
                      className="mt-2 w-full border-b border-strong bg-transparent py-2.5 text-ink outline-none transition focus:border-copper"
                    />
                  </div>
                  <button type="submit" className="btn btn-md btn-primary mt-2 self-start">
                    Pošlite dopyt
                  </button>
                  <p className="font-mono text-[11px] leading-relaxed text-faint">
                    Odoslaním súhlasíte so spracovaním údajov za účelom vybavenia dopytu.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* firemný „spec sheet" */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <span className="label">JOPAS s.r.o.</span>
            <dl className="mt-6 border-t border-line">
              {COMPANY.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-label text-faint">{k}</dt>
                  <dd className="text-right font-mono text-[13px] text-body">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[14px] leading-relaxed text-steel">
              Havária mimo bežného času? Skúste zavolať — ak budeme môcť, prídeme.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label className="label" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full border-b border-strong bg-transparent py-2.5 text-ink outline-none transition placeholder:text-faint focus:border-copper"
      />
    </div>
  );
}
