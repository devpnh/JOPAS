import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CITIES } from '../lib/data';

export default function OblastiMap() {
  const ref = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current || !ref.current) return;

    const map = L.map(ref.current, {
      center: [48.78, 21.93],
      zoom: 9,
      scrollWheelZoom: false, // nech sa dá normálne skrolovať stránka
      zoomControl: true,
      attributionControl: true,
    });
    mapRef.current = map;

    // tmavý podklad — CARTO dark (bez API kľúča)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap &copy; CARTO',
    }).addTo(map);

    const home = CITIES.find((c) => c.home);

    // halo dosahu okolo Michaloviec
    L.circle([home.lat, home.lng], {
      radius: 38000,
      color: '#1E84C4',
      weight: 1,
      opacity: 0.45,
      fillColor: '#1E84C4',
      fillOpacity: 0.07,
    }).addTo(map);

    const bounds = [];
    CITIES.forEach((c) => {
      bounds.push([c.lat, c.lng]);
      const isHome = !!c.home;
      L.circleMarker([c.lat, c.lng], {
        radius: isHome ? 8 : 5,
        color: isHome ? '#FFFFFF' : '#54A8DD',
        weight: isHome ? 2 : 1.5,
        fillColor: isHome ? '#1E84C4' : '#2E97D4',
        fillOpacity: 1,
      })
        .addTo(map)
        .bindTooltip(c.name, {
          permanent: true,
          direction: 'right',
          offset: [8, 0],
          className: 'jopas-label',
        });
    });

    map.fitBounds(bounds, { padding: [42, 42], maxZoom: 10 });

    // jemné dorovnanie po načítaní layoutu
    const t = setTimeout(() => map.invalidateSize(), 250);

    return () => {
      clearTimeout(t);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg border border-invert2 bg-navy">
      <div ref={ref} className="h-[380px] w-full lg:h-[460px]" aria-label="Mapa oblasti pôsobenia" />
      <span className="pointer-events-none absolute left-3 top-3 z-[500] bg-navy/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-white/70">
        Oblasť pôsobenia
      </span>
    </div>
  );
}
