import { useEffect, useRef, useState } from 'react';

// Count-up pri scroll-in (raz), cubic ease-out.
export function useCountUp(target, run, duration = 2000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(target);
      return;
    }
    let raf, start;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      if (start === undefined) start = now;
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.round(ease(p) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return val;
}

// True keď používateľ odscrolloval za prah.
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

// Header hide-on-scroll-down / show-on-scroll-up.
export function useHideOnScroll() {
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 200 && y > last.current) setHidden(true);
        else setHidden(false);
        last.current = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return hidden;
}

// Past-hero detektor pre sticky mobilnú lištu.
export function usePastHero(vh = 0.8) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * vh);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [vh]);
  return past;
}
