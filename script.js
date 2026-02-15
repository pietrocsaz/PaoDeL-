document.addEventListener('DOMContentLoaded', () => {
  // Year
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Reveal on scroll
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); o.unobserve(e.target); }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Subtle parallax for hero
  const par = document.querySelector('[data-parallax]');
  if (par) window.addEventListener('scroll', () => { par.style.transform = `translateY(${window.scrollY * 0.14}px)`; }, {passive:true});

  // Ensure Instagram links open safely
  document.querySelectorAll('a[href*="instagram.com"]').forEach(a => { a.setAttribute('target','_blank'); a.setAttribute('rel','noopener noreferrer'); });
});
