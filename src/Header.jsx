import React from 'react';

function WarnIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export default function Header({
  publicKey,
  balance,
  network,
  connected,
  connectError,
  onConnect,
  onDisconnect,
}) {
  if (!connected) {
    return (
      <div>
        <div className="ln-btn-row" style={{ marginBottom: 12 }}>
          <button type="button" className="ln-btn-primary" onClick={onConnect}>
            Connect Freighter Wallet
          </button>
        </div>
        {connectError && (
          <div className="ln-network-warn" role="alert">
            <WarnIcon />
            <span>{connectError}</span>
          </div>
        )}
      </div>
    );
  }

  const truncatedPk = `${publicKey.slice(0, 4)}…${publicKey.slice(-4)}`;

  return (
    <div>
      <div className="ln-wallet-rows">
        <div className="ln-wallet-row">
          <span className="ln-wallet-row__label">Address</span>
          <span className="ln-wallet-row__value" title={publicKey}>{truncatedPk}</span>
        </div>
        <div className="ln-wallet-row">
          <span className="ln-wallet-row__label">Balance</span>
          <span className="ln-wallet-row__value">{balance} XLM</span>
        </div>
      </div>

      {network !== 'TESTNET' && (
        <div className="ln-network-warn" role="alert">
          <WarnIcon />
          <span>Please switch Freighter to Testnet</span>
        </div>
      )}

      <div className="ln-btn-row">
        <button type="button" className="ln-btn-ghost" onClick={onDisconnect}>
          Disconnect Wallet
        </button>
      </div>
    </div>
  );
}
