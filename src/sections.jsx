import React from 'react';

const FEATURES = [
  {
    title: 'Self-Custodial',
    desc: 'You hold the keys. Lumnova never touches your private seed — connect Freighter, sign in-browser, transact.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Sub-Second Finality',
    desc: 'Built on Stellar. Settle payments in 3–5 seconds for a fraction of a cent — anywhere on the network.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 L4 14 h7 l-1 8 9-12 h-7 z" />
      </svg>
    ),
  },
  {
    title: 'Zero Fees. Zero Signups.',
    desc: 'No accounts, no KYC, no email. Open the page, connect, send. Network fees are fractions of a cent.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
  {
    title: 'Multi-Asset Native',
    desc: 'Hold XLM and any issued asset on Stellar — USDC, BTC via anchors, custom tokens — all in one view.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: 'Auditable On-Chain',
    desc: 'Every transaction is verifiable on Stellar Explorer. Tamper-proof history you can prove.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3 8-8" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Open Source',
    desc: 'Auditable code, no backdoors. Built in public, reviewed by the Stellar developer community.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
];

const SECURITY = [
  { title: 'Keys never leave your device', desc: 'All signing happens inside Freighter. Lumnova only sees your public address.' },
  { title: 'No custodial storage', desc: 'We don’t hold deposits. There’s nothing to hack, freeze, or seize.' },
  { title: 'Testnet-first development', desc: 'Default network is TESTNET — experiment freely with no real-world risk.' },
  { title: 'On-chain receipts', desc: 'Every successful send returns a verifiable Stellar transaction hash.' },
];

const FAQS = [
  {
    q: 'What is Lumnova?',
    a: 'Lumnova is a non-custodial Stellar wallet interface. You connect your Freighter extension, and Lumnova lets you view balances and send payments on the Stellar network — without holding your funds.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. Lumnova has no signup, no email, no KYC. Install Freighter, fund it, and you have a wallet. That’s the whole flow.',
  },
  {
    q: 'What is Stellar?',
    a: 'Stellar is a decentralized payments network built for fast, low-cost money movement — settling in 3–5 seconds with fees measured in fractions of a cent.',
  },
  {
    q: 'Is Lumnova custodial?',
    a: 'No. Lumnova is a frontend that talks to the Stellar network through Freighter. Your secret key stays inside Freighter and never reaches our servers.',
  },
  {
    q: 'Which network does Lumnova use?',
    a: 'The app is configured for Stellar TESTNET by default. You can switch to PUBLIC network from inside Freighter at any time.',
  },
];

export function Hero() {
  return (
    <section className="ln-hero" id="top">
      <div className="ln-hero__eyebrow">Stellar · Testnet · Live</div>
      <h1 className="ln-hero__title">
        The wallet that <span className="ln-hero__title-grad">disappears</span>
        <br />
        into your flow.
      </h1>
      <p className="ln-hero__sub">
        Lumnova is a non-custodial, open-source Stellar wallet. Connect, send, and settle on-chain
        in seconds — no accounts, no custody, no compromises.
      </p>
      <div className="ln-hero__ctas">
        <a href="#wallet" className="ln-btn ln-btn--primary">
          Connect Wallet
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#features" className="ln-btn ln-btn--ghost">
          Explore Features
        </a>
      </div>
      <div className="ln-hero__stats" aria-label="Network stats">
        <div className="ln-hero__stat">
          <div className="ln-hero__stat-num">3–5s</div>
          <div className="ln-hero__stat-label">Settlement</div>
        </div>
        <div className="ln-hero__stat">
          <div className="ln-hero__stat-num">$0.00001</div>
          <div className="ln-hero__stat-label">Avg Fee</div>
        </div>
        <div className="ln-hero__stat">
          <div className="ln-hero__stat-num">100%</div>
          <div className="ln-hero__stat-label">Non-Custodial</div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="ln-section" id="features">
      <div className="ln-section__head">
        <div className="ln-section__kicker">Why Lumnova</div>
        <h2 className="ln-section__title">Built for the way crypto should work</h2>
        <p className="ln-section__sub">
          No hidden fees, no middlemen, no learning curve. Just a wallet that does what wallets should.
        </p>
      </div>
      <div className="ln-features">
        {FEATURES.map((f) => (
          <article key={f.title} className="ln-feature">
            <div className="ln-feature__icon" aria-hidden="true">
              {f.icon}
            </div>
            <h3 className="ln-feature__title">{f.title}</h3>
            <p className="ln-feature__desc">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Security() {
  return (
    <section className="ln-section" id="security">
      <div className="ln-section__head">
        <div className="ln-section__kicker">Security</div>
        <h2 className="ln-section__title">Your keys. Your crypto. Always.</h2>
        <p className="ln-section__sub">
          Lumnova is a window onto the Stellar network — not a custodian. Every layer of the
          stack is designed so that only you can move funds.
        </p>
      </div>
      <div className="ln-security">
        <ul className="ln-security__list">
          {SECURITY.map((s) => (
            <li key={s.title} className="ln-security__item">
              <span className="ln-security__check" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>
              <div>
                <h4 className="ln-security__item-title">{s.title}</h4>
                <p className="ln-security__item-desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <p style={{ color: 'var(--ln-text)', lineHeight: 1.65, margin: 0 }}>
            Built on top of <strong style={{ color: 'var(--ln-text-h)' }}>Freighter</strong>,
            the most trusted Stellar browser wallet. Every transaction is signed locally inside
            Freighter’s sandbox — Lumnova only sees the signed XDR after you approve.
          </p>
          <p style={{ color: 'var(--ln-text)', lineHeight: 1.65, margin: '16px 0 0' }}>
            Run on TESTNET by default. Switch to PUBLIC inside Freighter when you’re ready.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="ln-section" id="faq">
      <div className="ln-section__head">
        <div className="ln-section__kicker">FAQ</div>
        <h2 className="ln-section__title">Questions, answered</h2>
      </div>
      <div className="ln-faq">
        {FAQS.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ln-footer">
      <div>
        <span>LUMNOVA</span> · Non-custodial Stellar wallet · Built with React + Freighter
      </div>
      <div style={{ marginTop: 8, opacity: 0.7 }}>
        No funds are held by Lumnova. Always verify transactions on Stellar Explorer.
      </div>
    </footer>
  );
}
