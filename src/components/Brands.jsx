import { BRANDS } from '../lib/data';

export default function Brands() {
  return (
    <div className="border-b border-line bg-paper2">
      <div className="wrap flex flex-col items-start gap-4 py-5 md:flex-row md:items-center md:gap-8">
        <span className="label whitespace-nowrap">Robíme so značkami</span>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {BRANDS.map((b) => (
            <span key={b} className="font-display text-lg font-semibold text-steel">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
