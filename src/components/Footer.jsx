import { Phone, Mail, FileText } from 'lucide-react';
import { NAV, PHONE, PHONE_HREF, EMAIL, DOCS, asset } from '../lib/data';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* brand */}
        <div>
          <img src={asset('logo.png')} alt="JOPAS" className="h-8 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/55">
            Vodár a kúrenár pre Michalovce a okolie. Voda, kúrenie, kotly a sanita — vyše 20 rokov.
          </p>
        </div>

        {/* nav */}
        <div>
          <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/40">Web</span>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-[14px] text-white/70 transition-colors hover:text-accent-light">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* kontakt */}
        <div>
          <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/40">Kontakt</span>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-white transition-colors hover:text-accent-light">
                <Phone size={15} className="text-accent-light" /> <span className="font-mono text-[13px]">{PHONE}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-white/70 transition-colors hover:text-accent-light">
                <Mail size={15} className="text-accent-light" /> <span className="text-[13px]">{EMAIL}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* dokumenty */}
        <div>
          <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/40">Dokumenty</span>
          <ul className="mt-4 space-y-2.5">
            {DOCS.map((d) => (
              <li key={d.file}>
                <a href={asset(d.file)} target="_blank" rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-[14px] text-white/70 transition-colors hover:text-accent-light">
                  <FileText size={15} className="mt-0.5 shrink-0 text-white/40 group-hover:text-accent-light" />
                  <span>{d.title} <span className="text-white/35">(PDF)</span></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-invert">
        <div className="wrap flex flex-col gap-2 py-5 font-mono text-[11px] text-white/40 md:flex-row md:items-center md:justify-between">
          <span>IČO 50 180 321 · DIČ 2120202359 · IČ DPH SK2120202359 · IBAN SK35 0900 0000 0051 0947 2530</span>
          <span>© 2026 JOPAS s.r.o. · web: PNH Media</span>
        </div>
      </div>
    </footer>
  );
}
