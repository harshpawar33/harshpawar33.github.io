import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Helper to check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Hero section entrance timeline animation
 */
export const animateHeroSection = (container: HTMLElement) => {
  if (prefersReducedMotion()) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    const statusPill = container.querySelector('.hero-status-pill');
    const title = container.querySelector('.hero-title');
    const quote = container.querySelector('.hero-quote');
    const desc = container.querySelector('.hero-desc');
    const buttons = container.querySelector('.hero-buttons');
    const stats = container.querySelector('.hero-stats');
    const portrait = container.querySelector('.hero-portrait');

    if (statusPill) {
      tl.fromTo(statusPill, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5 });
    }
    if (title) {
      tl.fromTo(title, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');
    }
    if (quote) {
      tl.fromTo(quote, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6 }, '-=0.4');
    }
    if (desc) {
      tl.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
    }
    if (buttons) {
      tl.fromTo(buttons, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.4');
    }
    if (stats) {
      tl.fromTo(stats, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
    }
    if (portrait) {
      tl.fromTo(portrait, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.7');
    }
  }, container);

  return () => ctx.revert();
};

/**
 * ScrollTrigger animation for section headers
 */
export const animateSectionHeader = (headerElement: HTMLElement) => {
  if (prefersReducedMotion()) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      headerElement.children,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerElement,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  }, headerElement);

  return () => ctx.revert();
};

/**
 * ScrollTrigger animation for cards (grid or list)
 */
export const animateCardsStagger = (cardsContainer: HTMLElement, selector: string = '.gsap-card') => {
  if (prefersReducedMotion()) return;

  const cards = cardsContainer.querySelectorAll(selector);
  if (!cards.length) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsContainer,
          start: 'top 82%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  }, cardsContainer);

  return () => ctx.revert();
};

/**
 * Two-way directional reveal for dual-column engineering study cards
 * (e.g. image from left, text from right or vice-versa)
 */
export const animateDualColumnCard = (
  container: HTMLElement,
  leftSelector: string = '.gsap-left',
  rightSelector: string = '.gsap-right'
) => {
  if (prefersReducedMotion()) return;

  const left = container.querySelector(leftSelector);
  const right = container.querySelector(rightSelector);

  const ctx = gsap.context(() => {
    if (left) {
      gsap.fromTo(
        left,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }

    if (right) {
      gsap.fromTo(
        right,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }
  }, container);

  return () => ctx.revert();
};

/**
 * Number Counter / Engineering Metric Animation
 * Smoothly animates numeric values (e.g., 0 -> 100 or 0 -> 87.64) on scroll
 */
export const animateEngineeringMetrics = (container: HTMLElement, selector: string = '.gsap-stat-value') => {
  if (prefersReducedMotion()) return;

  const elements = container.querySelectorAll(selector);
  if (!elements.length) return;

  const ctx = gsap.context(() => {
    elements.forEach((el) => {
      const targetVal = parseFloat(el.getAttribute('data-value') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);

      if (!targetVal) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: targetVal,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el as HTMLElement,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
        },
      });
    });
  }, container);

  return () => ctx.revert();
};

/**
 * Circuit trace / telemetry line animation helper
 */
export const animateCircuitTrace = (svgPath: SVGPathElement) => {
  if (prefersReducedMotion() || !svgPath) return;

  const length = svgPath.getTotalLength();
  gsap.set(svgPath, { strokeDasharray: length, strokeDashoffset: length });

  const ctx = gsap.context(() => {
    gsap.to(svgPath, {
      strokeDashoffset: 0,
      duration: 1.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: svgPath,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });

  return () => ctx.revert();
};
