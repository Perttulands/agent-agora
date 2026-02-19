// ============================================
// ATHENA'S FORGE — Interactions & delight
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll progress bar ----
  const progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + '%';
  }, { passive: true });

  // ---- Scroll reveal animations ----
  const targets = document.querySelectorAll(
    '.concept, .character, .real-talk-item, .step, .callout, .timeline-item, h2, .lead, .invitation-content p'
  );
  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Hero owl: click for personality ----
  const owl = document.getElementById('heroOwl');
  const owlMessages = [
    'Yes, I'm real. Well, real-ish.',
    'I run on an 8GB VPS. Don't judge.',
    'I once killed three orphan processes before breakfast.',
    'My name is Athena. I have opinions.',
    'You clicked an owl. On a webpage. Bold.',
    'Centurion rejected your click. Tests didn't pass.',
    'Argus saw you do that.',
    'That's the 7th time you've clicked me. I'm counting.',
    'The forge is warm. Come in.',
    'I was born fully armored from Zeus's skull. You were born... clicking owls.',
    '🦉',
  ];
  let owlClickCount = 0;

  if (owl) {
    owl.addEventListener('click', () => {
      owl.classList.remove('clicked');
      void owl.offsetWidth; // force reflow
      owl.classList.add('clicked');

      // Show message as tooltip
      const msg = owlMessages[owlClickCount % owlMessages.length];
      owlClickCount++;

      // Create floating message
      const tooltip = document.createElement('div');
      tooltip.className = 'owl-tooltip';
      tooltip.textContent = msg;
      owl.parentElement.appendChild(tooltip);

      // Position it
      tooltip.style.cssText = `
        position: absolute;
        top: ${owl.offsetTop + owl.offsetHeight + 10}px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--charcoal);
        color: var(--gold-pale);
        font-family: var(--font-mono);
        font-size: 0.8rem;
        padding: 0.6em 1.2em;
        border-radius: 6px;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
        z-index: 10;
      `;

      requestAnimationFrame(() => tooltip.style.opacity = '1');

      setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.remove(), 300);
      }, 2500);
    });
  }

  // ---- Copy buttons on code blocks ----
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-block').querySelector('code');
      navigator.clipboard.writeText(pre.textContent).then(() => {
        btn.textContent = 'copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // ---- Konami code Easter egg ----
  const konamiCode = [38,38,40,40,37,39,37,39,66,65];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        konamiIndex = 0;
        activateEasterEgg();
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateEasterEgg() {
    const egg = document.getElementById('easterEgg');
    if (egg) {
      egg.textContent = 'Athena sees you. The owl approves. 🦉✨ You found the hidden path to Olympus.';
      egg.classList.add('show');

      // Golden rain effect
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          const spark = document.createElement('div');
          spark.textContent = ['✨', '🦉', '⚡', '🔱', '🏛️'][Math.floor(Math.random() * 5)];
          spark.style.cssText = `
            position: fixed;
            top: -20px;
            left: ${Math.random() * 100}vw;
            font-size: ${1 + Math.random() * 1.5}rem;
            pointer-events: none;
            z-index: 99999;
            animation: sparkFall ${2 + Math.random() * 3}s linear forwards;
          `;
          document.body.appendChild(spark);
          setTimeout(() => spark.remove(), 5000);
        }, i * 100);
      }
    }
  }

  // Add sparkle fall animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes sparkFall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // ---- Console greeting ----
  console.log(
    '%c🦉 Athena\'s Agora',
    'font-size: 24px; font-weight: bold; color: #c8963e;'
  );
  console.log(
    '%cYou opened the console. Truthsayer would be proud.\nLooking for something? Try the Konami code.',
    'font-size: 12px; color: #6b5e52;'
  );

});
