import { Phone, Mail } from 'lucide-react';
import { NAV, PHONE, PHONE_HREF, EMAIL } from '../lib/data';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70">
      <div className="wrap grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-baseline gap-2.5">
            <span className="font-display text-2xl font-extrabold tracking-[-0.04em] text-paper">JOPAS</span>
            <span className="font-mono text-[10px] uppercase tracking-label text-paper/45">s.r.o.</span>
          </div>
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-paper/55">
            Vodár a kúrenár pre Michalovce a okolie. Voda, kúrenie, kotly a sanita — vyše 20 rokov.
          </p>
        </div>

        <div>
          <span className="label text-paper/40">Web</span>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-[14px] text-paper/70 transition-colors hover:text-copper-light">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="label text-paper/40">Kontakt</span>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-paper transition-colors hover:text-copper-light">
                <Phone size={15} className="text-copper-light" /> <span className="font-mono text-[13px]">{PHONE}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-paper/70 transition-colors hover:text-copper-light">
                <Mail size={15} className="text-copper-light" /> <span className="text-[13px]">{EMAIL}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-invert">
        <div className="wrap flex flex-col gap-2 py-5 font-mono text-[11px] text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>IČO 50 180 321 · DIČ 2120202359 · IČ DPH SK2120202359 · IBAN SK35 0900 0000 0051 0947 2530</span>
          <span>© 2026 JOPAS s.r.o. · web: PNH Media</span>
        </div>
      </div>
    </footer>
  );
}
