/*
  tiro.legal — shared interactions
  Scroll-reveal, magnetic CTA, mobile nav.
  Loaded on every page.
*/

(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- mobile nav ---------- */

  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');

  if (navToggle && mobileNav) {
    const closeNav = () => {
      mobileNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      window.setTimeout(() => mobileNav.setAttribute('hidden', ''), 260);
    };

    const openNav = () => {
      mobileNav.removeAttribute('hidden');
      requestAnimationFrame(() => mobileNav.classList.add('is-open'));
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    navToggle.addEventListener('click', () => {
      if (mobileNav.classList.contains('is-open')) closeNav();
      else openNav();
    });

    mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileNav.classList.contains('is-open')) closeNav();
    });
  }

  /* ---------- calendly popup (lazy-loaded) ---------- */

  const CALENDLY_URL = 'https://calendly.com/lycianapp/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1b1111&text_color=f3dedd&primary_color=a63a3f';

  let calendlyLoading = null;

  function loadCalendly() {
    if (window.Calendly) return Promise.resolve();
    if (calendlyLoading) return calendlyLoading;

    calendlyLoading = new Promise((resolve, reject) => {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(css);

      const js = document.createElement('script');
      js.src = 'https://assets.calendly.com/assets/external/widget.js';
      js.async = true;
      js.onload = () => resolve();
      js.onerror = () => reject(new Error('Calendly script failed'));
      document.head.appendChild(js);
    });

    return calendlyLoading;
  }

  document.querySelectorAll('[data-calendly]').forEach((el) => {
    el.addEventListener('click', async (event) => {
      event.preventDefault();
      try {
        await loadCalendly();
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        }
      } catch (_err) {
        window.open(CALENDLY_URL, '_blank', 'noopener');
      }
    });
  });

  /* ---------- scroll reveal ---------- */

  const revealTargets = document.querySelectorAll('.reveal, .reveal-children');

  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('in'));
  }

  /* ---------- magnetic cta ---------- */

  if (!reducedMotion.matches) {
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      const strength = 0.18;

      const handle = (event) => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      };

      const reset = () => {
        el.style.transform = 'translate3d(0, 0, 0)';
      };

      el.addEventListener('pointermove', handle);
      el.addEventListener('pointerleave', reset);
      el.addEventListener('blur', reset);
    });
  }
})();
