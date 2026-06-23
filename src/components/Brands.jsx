import { BRANDS } from '../lib/data';

export default function Brands() {
  return (
    <div className="border-y border-line bg-bg">
      <div className="wrap flex flex-col items-start gap-3 py-5 sm:flex-row sm:items-center sm:gap-8">
        <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-faint">Pracujeme so značkami</span>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-1">
          {BRANDS.map((b) => (
            <span key={b} className="text-[15px] font-semibold text-steel">{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
