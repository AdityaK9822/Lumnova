import { isConnected, setAllowed, getAddress, getNetwork, signTransaction } from '@stellar/freighter-api';
import { Horizon, TransactionBuilder, Networks, Operation, Asset, BASE_FEE } from '@stellar/stellar-sdk';

const server = new Horizon.Server("https://horizon-testnet.stellar.org");

export async function checkConnection() {
  const connected = await isConnected();
  return { isConnected: connected };
}

export async function retrievePublicKey() {
  await setAllowed();
  const { address, error } = await getAddress();
  if (error) throw new Error(error);
  if (!address) throw new Error('No address returned from wallet');

  return address;
}

export async function checkNetwork() {
  const { network, error } = await getNetwork();
  if (error) throw new Error(error);
  return network;
}

export async function getBalance(publicKey) {
  if (!publicKey || publicKey.length !== 56 || !publicKey.startsWith('G')) {
    return "0";
  }
  try {
    const account = await server.loadAccount(publicKey);
    const nativeBalance = account.balances.find(b => b.asset_type === 'native');
    return nativeBalance ? nativeBalance.balance : "0";
  } catch (e) {
    // 404 means account is unfunded or doesn't exist
    if (e.response && e.response.status === 404) return "0";
    throw e;
  }
}

export async function buildPaymentXDR(sourcePublicKey, destinationPublicKey, amount) {
  if (!sourcePublicKey || sourcePublicKey.length !== 56 || !sourcePublicKey.startsWith('G')) {
    throw new Error('Invalid source public key');
  }
  const sourceAccount = await server.loadAccount(sourcePublicKey);

  // Patch for stellar-sdk version where build() expects sequenceNumber() method
  if (sourceAccount && typeof sourceAccount.sequenceNumber !== 'function') {
    sourceAccount.sequenceNumber = () => sourceAccount.sequence;
  }

  const transaction = await new TransactionBuilder(sourceAccount, {
      fee: BASE_FEE,
      networkPassphrase: Networks.TESTNET,
    })
    .addOperation(Operation.payment({
      destination: destinationPublicKey,
      asset: Asset.native(),
      amount: amount.toString()
    }))
    .setTimeout(60)
    .build();

  return transaction.toXDR();
}

export async function signUserTransaction(xdr, publicKey) {
  return await signTransaction(xdr, {
    networkPassphrase: Networks.TESTNET,
    address: publicKey
  });
}

export function formatError(err) {
  if (!err) return 'Something went wrong';
  if (typeof err === 'string') return err;
  if (err.code === -4 || /reject|cancel|dismiss|close/i.test(err.message || '')) {
    return 'Payment cancelled in wallet';
  }
  if (err.message) return err.message;
  try {
    return JSON.stringify(err);
  } catch {
    return 'Something went wrong';
  }
}

export async function submitSignedXDR(signedXdr) {
  try {
    const tx = TransactionBuilder.fromXDR(signedXdr, Networks.TESTNET);
    const result = await server.submitTransaction(tx);
    return result;
  } catch (err) {
    const resultCodes = err.response?.data?.extras?.result_codes;
    if (resultCodes) throw new Error(`Transaction failed: ${JSON.stringify(resultCodes)}`);
    throw new Error(formatError(err));
  }
}

// Note: Freighter has no real "disconnect" API. Disconnect is handled locally in App state.
