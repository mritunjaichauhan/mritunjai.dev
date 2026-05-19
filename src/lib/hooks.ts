import { useEffect, useState } from 'react';

/**
 * Adds .in to any element with .reveal once it intersects the viewport.
 * Mirrors the standalone-portfolio design's IntersectionObserver pattern.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/**
 * Per-route document title + meta description. SPA crawlers (LinkedIn, Twitter)
 * still read the index.html defaults; this is for browser tabs, history, and
 * search results that re-fetch after the page hydrates.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    let revertDescription: (() => void) | undefined;
    if (description) {
      const tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (tag) {
        const prev = tag.getAttribute('content');
        tag.setAttribute('content', description);
        revertDescription = () => {
          if (prev !== null) tag.setAttribute('content', prev);
        };
      }
    }
    return () => {
      document.title = previousTitle;
      revertDescription?.();
    };
  }, [title, description]);
}

/** Live local clock, ticking every 30s. Default tz Asia/Kolkata. */
export function useClock(tz = 'Asia/Kolkata') {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(t);
  }, []);
  const fmt = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: tz,
  });
  return fmt.format(now);
}
