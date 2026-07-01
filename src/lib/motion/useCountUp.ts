import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface CountUpOptions {
  duration?: number;
}

/**
 * Animate a number from 0 → target once `active` becomes true.
 * Honors reduced-motion by jumping straight to the target.
 */
export function useCountUp(target: number, active: boolean, { duration = 900 }: CountUpOptions = {}): number {
  const reduced = useReducedMotion();
  const [value, setValue] = useState<number>(reduced ? target : 0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduced]);

  return value;
}
