/* ============================================================
   Dinie Muzaffar — Portfolio interactions
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Theme toggle (persisted) ---------- */
    const themeToggle = document.getElementById('theme-toggle');
    const STORAGE_KEY = 'dinie-theme';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }

    // Respect saved preference, else fall back to dark
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const current = document.documentElement.getAttribute('data-theme');
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    /* ---------- Nav background on scroll ---------- */
    const header = document.getElementById('site-header');
    function onScrollHeader() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScrollHeader, { passive: true });
    onScrollHeader();

    /* ---------- Scroll reveal ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) {
        revealObserver.observe(el);
    });

    /* ---------- Staggered entrance for hero, tech and project groups ---------- */
    const staggerContainers = document.querySelectorAll('.stagger-entrance');
    function revealStagger(container) {
        if (container.classList.contains('is-visible')) return;
        container.classList.add('is-visible');
        const items = container.children;
        Array.from(items).forEach(function (item, i) {
            item.style.animationDelay = (i * 80) + 'ms';
        });
    }

    const heroInner = document.querySelector('.hero-inner');
    if (heroInner && heroInner.classList.contains('stagger-entrance')) {
        // Hero is visible on load — animate immediately
        requestAnimationFrame(function () { revealStagger(heroInner); });
    }

    const staggerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                revealStagger(entry.target);
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

    staggerContainers.forEach(function (container) {
        if (container === heroInner) return; // already handled
        staggerObserver.observe(container);
    });

    /* ---------- Typewriter on hero name (Technical storytelling) ---------- */
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const textNode = heroName.childNodes[0];
        const fullName = 'Dinie Muzaffar';
        let typeIndex = 0;
        // Blank immediately so the name "types" itself in after the stagger reveal
        if (textNode) textNode.nodeValue = '';
        function typeChar() {
            if (typeIndex < fullName.length) {
                textNode.nodeValue = fullName.slice(0, ++typeIndex);
                setTimeout(typeChar, 55);
            }
        }
        // Start typing after the hero stagger reveal finishes (~500ms)
        setTimeout(typeChar, 500);
    }

    /* ---------- Experience tabs ---------- */
    const tabs = document.querySelectorAll('.exp-tab');
    const panels = document.querySelectorAll('.exp-panel');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            const index = tab.getAttribute('data-tab');

            tabs.forEach(function (t) { t.classList.remove('active'); });
            panels.forEach(function (p) { p.classList.remove('active'); });

            tab.classList.add('active');
            const target = document.querySelector('.exp-panel[data-panel="' + index + '"]');
            if (target) target.classList.add('active');
        });
    });

    /* ---------- Active nav link highlight ---------- */
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const navObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(function (link) {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (s) { navObserver.observe(s); });

    /* ---------- Smooth scroll offset for fixed header ---------- */
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        });
    });
})();
