import { Phone, Mail, FileText } from 'lucide-react';
import { NAV, PHONE, PHONE_HREF, EMAIL, DOCS, asset } from '../lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-hair bg-char text-fog">
      <div className="wrap grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* brand */}
        <div>
          <img src={asset('logo.png')} alt="JOPAS" className="h-8 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-dim">
            Vodár a kúrenár pre Michalovce a okolie. Voda, kúrenie, kotly a sanita — vyše 20 rokov.
            Cena dopredu, záruka na prácu.
          </p>
        </div>

        {/* nav */}
        <div>
          <span className="font-mono text-[11px] font-medium uppercase tracking-label text-dim">Web</span>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-[14px] text-fog transition-colors hover:text-copper-light">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* kontakt */}
        <div>
          <span className="font-mono text-[11px] font-medium uppercase tracking-label text-dim">Kontakt</span>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-mist transition-colors hover:text-copper-light" data-contact="phone">
                <Phone size={15} className="text-copper" /> <span className="font-mono text-[13px]">{PHONE}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-fog transition-colors hover:text-copper-light">
                <Mail size={15} className="text-copper" /> <span className="text-[13px]">{EMAIL}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* dokumenty */}
        <div>
          <span className="font-mono text-[11px] font-medium uppercase tracking-label text-dim">Dokumenty</span>
          <ul className="mt-4 space-y-2.5">
            {DOCS.map((d) => (
              <li key={d.file}>
                <a
                  href={asset(d.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-[14px] text-fog transition-colors hover:text-copper-light"
                >
                  <FileText size={15} className="mt-0.5 shrink-0 text-dim group-hover:text-copper-light" />
                  <span>{d.title} <span className="text-dim">(PDF)</span></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hair">
        <div className="wrap flex flex-col gap-2 py-6 font-mono text-[11px] text-dim md:flex-row md:items-center md:justify-between">
          <span>IČO 50 180 321 · DIČ 2120202359 · IČ DPH SK2120202359 · IBAN SK35 0900 0000 0051 0947 2530</span>
          <span>© 2026 JOPAS s.r.o. · web: PNH Media</span>
        </div>
      </div>
    </footer>
  );
}
