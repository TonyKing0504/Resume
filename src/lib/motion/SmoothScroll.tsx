import React, { createContext, useContext, useEffect, useMemo, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useReducedMotion } from './useReducedMotion';

const NAV_OFFSET = 72;

interface SmoothScrollValue {
  scrollTo: (target: string | HTMLElement, opts?: { focus?: boolean }) => void;
}

const SmoothScrollContext = createContext<SmoothScrollValue | undefined>(undefined);

function focusTarget(el: HTMLElement) {
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  const value = useMemo<SmoothScrollValue>(
    () => ({
      scrollTo: (target, opts) => {
        const el =
          typeof target === 'string'
            ? document.getElementById(target.replace(/^#/, ''))
            : target;
        if (!el) return;
        const lenis = lenisRef.current;
        if (lenis) {
          lenis.scrollTo(el, { offset: -NAV_OFFSET });
        } else {
          el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
        }
        if (opts?.focus) {
          window.setTimeout(() => focusTarget(el), reduced ? 0 : 600);
        }
      },
    }),
    [reduced]
  );

  return <SmoothScrollContext.Provider value={value}>{children}</SmoothScrollContext.Provider>;
};

export function useSmoothScroll(): SmoothScrollValue {
  const ctx = useContext(SmoothScrollContext);
  // Fallback so components work even if rendered outside the provider.
  if (!ctx) {
    return {
      scrollTo: (target, opts) => {
        const el =
          typeof target === 'string'
            ? document.getElementById(target.replace(/^#/, ''))
            : target;
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (opts?.focus) {
          window.setTimeout(() => focusTarget(el), 600);
        }
      },
    };
  }
  return ctx;
}
