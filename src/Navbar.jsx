import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#security', label: 'Security' },
  { href: '#wallet', label: 'Wallet' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar({ connected, publicKey, onConnect, onDisconnect }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('lumnova-theme') || 'dark';
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('lumnova-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  const truncatedPk = publicKey
    ? `${publicKey.slice(0, 4)}…${publicKey.slice(-4)}`
    : '';

  return (
    <nav
      className={`ln-nav ${scrolled ? 'ln-nav--scrolled' : ''}`}
      aria-label="Primary"
    >
      <div className="ln-nav__inner">
        <a href="#top" className="ln-nav__brand" aria-label="Lumnova home">
          <span className="ln-nav__logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <defs>
                <linearGradient id="lnLogoGrad" x1="0" y1="0" x2="24" y2="24">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path
                d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z"
                stroke="url(#lnLogoGrad)"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M12 7 L17 9.5 V14.5 L12 17 L7 14.5 V9.5 Z"
                fill="url(#lnLogoGrad)"
                opacity="0.85"
              />
            </svg>
          </span>
          <span className="ln-nav__wordmark">LUMNOVA</span>
        </a>

        <ul className="ln-nav__links" role="menubar">
          {NAV_LINKS.map((l) => (
            <li key={l.href} role="none">
              <a role="menuitem" href={l.href} className="ln-nav__link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ln-nav__actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="ln-nav__icon-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {connected ? (
            <button
              type="button"
              onClick={onDisconnect}
              className="ln-nav__cta ln-nav__cta--connected"
              aria-label={`Disconnect wallet ${truncatedPk}`}
            >
              <span className="ln-nav__dot" aria-hidden="true" />
              {truncatedPk}
            </button>
          ) : (
            <button
              type="button"
              onClick={onConnect}
              className="ln-nav__cta"
            >
              Connect Wallet
            </button>
          )}

          <button
            type="button"
            className="ln-nav__icon-btn ln-nav__hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="ln-mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="ln-mobile-menu" className="ln-nav__mobile">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="ln-nav__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
