import { useState } from 'react';
import { buildPaymentXDR, signUserTransaction, submitSignedXDR, formatError } from './freighter';

export default function PaymentForm({ publicKey, connected, onAfterSend }) {
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'pending' | 'success' | 'error'
  const [txHash, setTxHash] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (destination.length !== 56 || !destination.startsWith('G')) {
      setErrorMessage('Invalid destination address');
      setStatus('error');
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setErrorMessage('Amount must be a positive number');
      setStatus('error');
      return;
    }

    setStatus('pending');
    setErrorMessage('');
    setTxHash('');

    try {
      const xdr = await buildPaymentXDR(publicKey, destination, numAmount);
      const signResult = await signUserTransaction(xdr, publicKey);
      if (signResult.error) throw new Error(signResult.error);

      const submitResult = await submitSignedXDR(signResult.signedTxXdr);
      setTxHash(submitResult.hash);
      setStatus('success');
      onAfterSend();
    } catch (e) {
      setErrorMessage(formatError(e));
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <h3 className="ln-form-title">Send Payment</h3>

      <div className="ln-field">
        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          type="text"
          className="ln-input"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="G… Stellar public address"
          spellCheck={false}
          autoComplete="off"
        />
      </div>

      <div className="ln-field">
        <label htmlFor="amount">Amount (XLM)</label>
        <input
          id="amount"
          type="number"
          step="0.0000001"
          min="0"
          className="ln-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
        />
      </div>

      <button
        type="submit"
        className="ln-btn-primary"
        disabled={!connected || status === 'pending'}
      >
        {status === 'pending' ? (
          <>
            <span className="ln-spinner" />
            Sending payment…
          </>
        ) : (
          'Send Payment'
        )}
      </button>

      {status !== 'idle' && (
        <div
          className={
            'ln-feedback ' +
            (status === 'error'
              ? 'ln-feedback--error'
              : status === 'success'
              ? 'ln-feedback--success'
              : '')
          }
          role={status === 'error' ? 'alert' : 'status'}
        >
          {status === 'pending' && 'Broadcasting transaction to Stellar…'}
          {status === 'error' && `Error: ${errorMessage}`}
          {status === 'success' && (
            <>
              <div>Payment successful.</div>
              {txHash && (
                <div style={{ marginTop: 6, opacity: 0.85, fontSize: '0.8125rem' }}>
                  TX: {txHash}
                </div>
              )}
              {txHash && (
                <a
                  href={`https://stellar.expert/explorer/testnet/tx/${txHash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ln-explorer-link"
                >
                  View on Explorer →
                </a>
              )}
            </>
          )}
        </div>
      )}
    </form>
  );
}
