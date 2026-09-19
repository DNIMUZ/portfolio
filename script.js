/* ============================================================
   Dinie Muzaffar — Portfolio interactions
   ============================================================ */

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Initial loader ---------- */
    const loader = document.getElementById('loader');

    function hideLoader() {
        if (!loader) return;
        loader.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
    }

    function initLoader() {
        if (!loader) return;
        document.body.classList.add('no-scroll');
        if (prefersReducedMotion) {
            hideLoader();
            return;
        }
        window.setTimeout(hideLoader, 3400);
    }

    /* ---------- Theme toggle (persisted) ---------- */
    const themeToggle = document.getElementById('theme-toggle');
    const STORAGE_KEY = 'dinie-theme';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    applyTheme(savedTheme || 'dark');

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const current = document.documentElement.getAttribute('data-theme');
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    /* ---------- Nav background on scroll ---------- */
    const header = document.getElementById('site-header');

    function onScrollHeader() {
        if (!header) return;
        header.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScrollHeader, { passive: true });
    onScrollHeader();

    /* ---------- Experience tabs ---------- */
    const tabs = Array.from(document.querySelectorAll('.exp-tab'));
    const panels = Array.from(document.querySelectorAll('.exp-panel'));

    function selectTab(tab) {
        const index = tab.getAttribute('data-tab');

        tabs.forEach(function (t) {
            const isActive = t === tab;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-selected', isActive ? 'true' : 'false');
            t.setAttribute('tabindex', isActive ? '0' : '-1');
        });
        panels.forEach(function (p) {
            const isActive = p.getAttribute('data-panel') === index;
            p.classList.toggle('active', isActive);
            p.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });
    }

    tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { selectTab(tab); });

        tab.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' ||
                e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
                const dir = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : -1;
                const next = tabs[(i + dir + tabs.length) % tabs.length];
                selectTab(next);
                next.focus();
            }
        });
    });

    /* ---------- Smooth scroll offset for fixed header ---------- */
    function scrollToSection(link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                const y = target.getBoundingClientRect().top + window.pageYOffset - 90;
                window.scrollTo({ top: y, behavior: 'smooth' });
                return true;
            }
        }
        return false;
    }

    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const mobileLinks = Array.from(document.querySelectorAll('.mobile-links a'));
    const allMenuLinks = navLinks.concat(mobileLinks);

    allMenuLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            if (scrollToSection(link)) {
                e.preventDefault();
                closeMenu();
            }
        });
    });

    /* ---------- Mobile menu ---------- */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    function closeMenu() {
        if (!hamburger || !mobileMenu) return;
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
        mobileMenu.classList.remove('is-active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
    }

    function openMenu() {
        if (!hamburger || !mobileMenu) return;
        hamburger.classList.add('is-active');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Close menu');
        mobileMenu.classList.add('is-active');
        mobileMenu.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
    }

    function onHamburgerClick() {
        const isOpen = hamburger.classList.contains('is-active');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    if (hamburger) {
        hamburger.addEventListener('click', onHamburgerClick);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) closeMenu();
    });

    /* ---------- Active nav link highlight ---------- */
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                allMenuLinks.forEach(function (link) {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    function initReveal() {
        sections.forEach(function (s) { sectionObserver.observe(s); });

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

        /* ---------- Staggered entrance groups ---------- */
        const staggerContainers = document.querySelectorAll('.stagger-entrance');

        function revealStagger(container) {
            if (container.classList.contains('is-visible')) return;
            container.classList.add('is-visible');
            Array.from(container.children).forEach(function (item, i) {
                item.style.animationDelay = (i * 80) + 'ms';
            });
        }

        staggerContainers.forEach(function (container) {
            if (container.classList.contains('hero-inner')) return;
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        revealStagger(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
            observer.observe(container);
        });

        const heroInner = document.querySelector('.hero-inner');
        if (heroInner) {
            requestAnimationFrame(function () {
                heroInner.classList.add('is-visible');
                Array.from(heroInner.children).forEach(function (item, i) {
                    item.style.animationDelay = (i * 80) + 'ms';
                });
            });
        }
    }

    /* ---------- Boot ---------- */
    initLoader();
    if (!loader || prefersReducedMotion || loader.classList.contains('is-hidden')) {
        initReveal();
    } else {
        window.setTimeout(initReveal, 3400);
    }
})();