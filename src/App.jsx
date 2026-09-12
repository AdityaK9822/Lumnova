import { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import PaymentForm from './PaymentForm';
import { Hero, Features, Security, FAQ, Footer } from './sections';
import { checkConnection, retrievePublicKey, checkNetwork, getBalance } from './freighter';
import './App.css';
import './sections.css';

function App() {
  const [publicKey, setPublicKey] = useState('');
  const [balance, setBalance] = useState('');
  const [network, setNetwork] = useState('');
  const [connected, setConnected] = useState(false);
  const [connectError, setConnectError] = useState('');

  async function handleConnect() {
    setConnectError('');
    try {
      const { isConnected } = await checkConnection();
      if (!isConnected) {
        setConnectError('Freighter is not connected.');
        return;
      }
      const pk = await retrievePublicKey();
      const net = await checkNetwork();
      const bal = await getBalance(pk);
      setPublicKey(pk);
      setNetwork(net);
      setBalance(bal);
      setConnected(true);
    } catch (e) {
      setConnectError(e.message);
      setConnected(false);
    }
  }

  function handleDisconnect() {
    setPublicKey('');
    setBalance('');
    setNetwork('');
    setConnected(false);
    setConnectError('');
  }

  async function refreshBalance() {
    if (publicKey) {
      try {
        const bal = await getBalance(publicKey);
        setBalance(bal);
      } catch (e) {
        console.error('Failed to refresh balance', e);
      }
    }
  }

  return (
    <div className="ln-app">
      <Navbar
        connected={connected}
        publicKey={publicKey}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />

      <main className="ln-main">
        <Hero />

        <Features />

        <Security />

        <section className="ln-section" id="wallet" aria-labelledby="wallet-heading">
          <div className="ln-section__head">
            <div className="ln-section__kicker">Wallet</div>
            <h2 id="wallet-heading" className="ln-section__title">
              Connect and send in seconds
            </h2>
            <p className="ln-section__sub">
              Powered by Freighter. View your address, balance, and submit payments on Stellar.
            </p>
          </div>

          <div className="ln-wallet-wrap">
            <Header
              publicKey={publicKey}
              balance={balance}
              network={network}
              connected={connected}
              connectError={connectError}
              onConnect={handleConnect}
              onDisconnect={handleDisconnect}
            />
            <PaymentForm
              publicKey={publicKey}
              connected={connected}
              onAfterSend={refreshBalance}
            />
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
