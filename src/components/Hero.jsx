import { Phone, ArrowDown } from 'lucide-react';
import { PHONE, PHONE_HREF, CINE } from '../lib/data';

const TRUST = ['20+ rokov v regióne', 'Cena dopredu', 'Záruka na prácu'];

export default function Hero() {
  return (
    <section id="top" className="grain relative min-h-[100svh] overflow-hidden bg-void">
      {/* cinematic video pozadie */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={CINE.heroPoster}
        aria-hidden="true"
      >
        <source src={CINE.heroVideo} type="video/webm" />
        <source src={CINE.heroVideoMp4} type="video/mp4" />
      </video>

      {/* gradienty pre čitateľnosť */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(11,16,19,0.94) 0%, rgba(11,16,19,0.72) 40%, rgba(11,16,19,0.12) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(0deg, rgba(11,16,19,0.92) 2%, transparent 46%)' }}
      />
      <div className="grid-faint pointer-events-none absolute inset-0" />

      {/* obsah */}
      <div className="wrap relative z-[2] flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-20">
        <div className="hero-in mb-6 flex items-center gap-3" style={{ animationDelay: '80ms' }}>
          <span className="h-px w-9 bg-copper" />
          <span className="font-mono text-[11px] uppercase tracking-label text-copper-light">
            Vodár · Kúrenár · Michalovce a okolie
          </span>
        </div>

        <h1
          className="hero-in max-w-[16ch] text-[clamp(2.8rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-tight2"
          style={{ animationDelay: '160ms' }}
        >
          Spravíme vodu<br className="hidden sm:block" /> aj kúrenie.{' '}
          <span className="text-copper">Poriadne.</span>
        </h1>

        <p
          className="hero-in mt-7 max-w-xl text-[17px] leading-relaxed text-fog md:text-[18px]"
          style={{ animationDelay: '260ms' }}
        >
          Voda, kanalizácia, kúrenie, kotly a sanita pre domy a byty v Michalovciach a okolí.
          Vyše 20 rokov tej istej roboty — cena dopredu, záruka na odvedenú prácu.
        </p>

        <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '360ms' }}>
          <a href={PHONE_HREF} className="btn btn-lg btn-copper" data-contact="phone">
            <Phone size={19} /> <span>Zavolajte — <span className="font-mono">{PHONE}</span></span>
          </a>
          <a href="#kontakt" className="btn btn-lg btn-line">Napíšte dopyt</a>
        </div>

        {/* trust strip */}
        <ul
          className="hero-in mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hair pt-5"
          style={{ animationDelay: '460ms' }}
        >
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-fog">
              <span className="h-1.5 w-1.5 rotate-45 bg-copper" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* scroll cue */}
      <a
        href="#sluzby"
        className="hero-in absolute bottom-6 right-6 z-[2] hidden items-center gap-2 font-mono text-[10px] uppercase tracking-label text-dim hover:text-mist md:flex"
        style={{ animationDelay: '900ms' }}
        aria-label="Posunúť na služby"
      >
        Scroll <ArrowDown size={13} className="animate-bounce" />
      </a>
    </section>
  );
}
