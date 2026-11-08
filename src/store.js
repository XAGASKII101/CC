// Reactive State Store for Cryptochains
import { sounds } from './audio.js';

const BIP39_WORDS = [
  'calm', 'quiet', 'shield', 'vault', 'private', 'harbor', 'amber', 'cipher',
  'stone', 'anchor', 'timber', 'summit', 'meadow', 'canvas', 'horizon', 'solitude',
  'cedar', 'glacier', 'breeze', 'mirror', 'drift', 'forest', 'passage', 'haven',
  'tempo', 'serene', 'lantern', 'signal', 'marble', 'pathway', 'stride', 'zenith'
];

const INITIAL_TRANSACTIONS = [
  {
    id: 'tx_9981',
    type: 'receive',
    asset: 'ETH',
    amount: 1.25,
    fiatAmount: 4225.00,
    from: '0x881a...d912',
    to: '0x71C8...5D51',
    hash: '0x3f9e...b201',
    network: 'Ethereum Mainnet',
    block: 21104829,
    status: 'Confirmed',
    timestamp: '12 mins ago',
    note: 'Consulting retainer deposit'
  },
  {
    id: 'tx_9980',
    type: 'send',
    asset: 'SOL',
    amount: 4.5,
    fiatAmount: 963.00,
    from: '9xQe...VFin',
    to: '4k3D...j8pL',
    hash: '5Rtv...8N2p',
    network: 'Solana',
    block: 298412093,
    status: 'Confirmed',
    timestamp: '2 hours ago',
    note: 'Calm hardware key payment'
  },
  {
    id: 'tx_9979',
    type: 'swap',
    asset: 'USDT',
    toAsset: 'ETH',
    amount: 1500,
    toAmount: 0.4437,
    fiatAmount: 1500.00,
    from: '0x71C8...5D51',
    to: 'Uniswap v3 CalmLiquidity',
    hash: '0xaa42...99ee',
    network: 'Ethereum Mainnet',
    block: 21104210,
    status: 'Confirmed',
    timestamp: 'Yesterday',
    note: 'Calm DEX routing swap'
  },
  {
    id: 'tx_9978',
    type: 'receive',
    asset: 'BTC',
    amount: 0.05,
    fiatAmount: 4571.00,
    from: 'bc1q9...w2ka',
    to: 'bc1qar...5mdq',
    hash: '7c89...111d',
    network: 'Bitcoin',
    block: 871204,
    status: 'Confirmed',
    timestamp: '3 days ago',
    note: 'Cold reserve rebalance'
  }
];

class Store {
  constructor() {
    this.listeners = new Set();

    // Check localStorage
    const savedCalmMode = localStorage.getItem('cc_calm_mode') === 'true';
    const savedCurrency = localStorage.getItem('cc_currency') || 'USD';
    const savedMnemonic = localStorage.getItem('cc_vault_mnemonic') || this.generateMnemonic();

    this.state = {
      isUnlocked: true,
      calmMode: savedCalmMode,
      currency: savedCurrency,
      currencySymbols: { USD: '$', EUR: '€', GBP: '£', JPY: '¥', BTC: '₿' },
      currencyRates: { USD: 1, EUR: 0.92, GBP: 0.79, JPY: 154.2, BTC: 0.0000109 },
      mnemonic: savedMnemonic,
      vaultAddress: '0x71C8A399c4F6f228b3B35d10d65b7582b2C85D51',
      assets: {
        BTC: { name: 'Bitcoin', symbol: 'BTC', balance: 0.385, price: 91420.00, change24h: 3.42, iconSymbol: '₿', network: 'Bitcoin' },
        ETH: { name: 'Ethereum', symbol: 'ETH', balance: 2.85, price: 3380.00, change24h: 2.15, iconSymbol: '◆', network: 'Ethereum' },
        SOL: { name: 'Solana', symbol: 'SOL', balance: 18.4, price: 214.00, change24h: 5.82, iconSymbol: '◎', network: 'Solana' },
        ARB: { name: 'Arbitrum', symbol: 'ARB', balance: 850.0, price: 1.15, change24h: -0.42, iconSymbol: '▲', network: 'Arbitrum' },
        XMR: { name: 'Monero', symbol: 'XMR', balance: 6.2, price: 172.00, change24h: 1.68, iconSymbol: 'ɱ', network: 'Monero' },
        USDT: { name: 'Tether USD', symbol: 'USDT', balance: 1240.0, price: 1.00, change24h: 0.01, iconSymbol: '₮', network: 'Ethereum' }
      },
      transactions: [...INITIAL_TRANSACTIONS],
      networksStatus: {
        'Bitcoin': { tps: 7.2, gas: '14 sat/vB', height: 871302, status: 'Optimal', latency: '9 min' },
        'Ethereum': { tps: 28.5, gas: '16 Gwei', height: 21105491, status: 'Optimal', latency: '12 sec' },
        'Solana': { tps: 2940, gas: '< 0.00001 SOL', height: 298428100, status: 'Optimal', latency: '400 ms' },
        'Arbitrum': { tps: 74.1, gas: '0.12 Gwei', height: 271032904, status: 'Optimal', latency: '1 sec' },
        'Base': { tps: 42.0, gas: '0.08 Gwei', height: 22194821, status: 'Optimal', latency: '2 sec' },
        'Polygon': { tps: 65.4, gas: '32 Gwei', height: 64920194, status: 'Optimal', latency: '2.1 sec' },
        'Monero': { tps: 4.8, gas: '0.00005 XMR', height: 3271004, status: 'Shielded', latency: '2 min' }
      }
    };

    // Periodically simulate subtle price and block ticks
    setInterval(() => this.tick(), 6000);
  }

  generateMnemonic() {
    const list = [];
    for (let i = 0; i < 12; i++) {
      const idx = Math.floor(Math.random() * BIP39_WORDS.length);
      list.push(BIP39_WORDS[idx]);
    }
    return list.join(' ');
  }

  tick() {
    // Subtle realistic market tick
    const btc = this.state.assets.BTC;
    const delta = (Math.random() - 0.48) * 15;
    btc.price = Math.round((btc.price + delta) * 100) / 100;

    const eth = this.state.assets.ETH;
    const ethDelta = (Math.random() - 0.48) * 2;
    eth.price = Math.round((eth.price + ethDelta) * 100) / 100;

    // Increment block heights
    this.state.networksStatus.Ethereum.height += 1;
    this.state.networksStatus.Solana.height += 3;

    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  toggleCalmMode() {
    sounds.playClick();
    this.state.calmMode = !this.state.calmMode;
    localStorage.setItem('cc_calm_mode', String(this.state.calmMode));
    this.notify();
  }

  setCurrency(currency) {
    if (this.state.currencyRates[currency]) {
      this.state.currency = currency;
      localStorage.setItem('cc_currency', currency);
      sounds.playClick();
      this.notify();
    }
  }

  getTotalBalanceUSD() {
    let total = 0;
    for (const key in this.state.assets) {
      const a = this.state.assets[key];
      total += a.balance * a.price;
    }
    return total;
  }

  formatFiat(usdAmount) {
    const rate = this.state.currencyRates[this.state.currency] || 1;
    const symbol = this.state.currencySymbols[this.state.currency] || '$';
    const converted = usdAmount * rate;

    if (this.state.calmMode) {
      return `<span class="blurred-amount" title="Calm mode active">${symbol}••••••</span>`;
    }

    if (this.state.currency === 'JPY') {
      return `${symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  formatCrypto(amount, symbol) {
    if (this.state.calmMode) {
      return `<span class="blurred-amount" title="Calm mode active">•••• ${symbol}</span>`;
    }
    return `${amount} ${symbol}`;
  }

  sendTransaction({ asset, recipient, amount, feeTier, stealth }) {
    sounds.playClick();
    const token = this.state.assets[asset];
    if (!token || token.balance < amount) {
      throw new Error('Insufficient balance in vault');
    }

    const fiatVal = amount * token.price;
    token.balance = Math.round((token.balance - amount) * 1000000) / 1000000;

    const newTx = {
      id: 'tx_' + Math.floor(1000 + Math.random() * 9000),
      type: 'send',
      asset,
      amount,
      fiatAmount: fiatVal,
      from: 'Vault (' + this.state.vaultAddress.slice(0, 6) + '...)',
      to: recipient.slice(0, 6) + '...' + recipient.slice(-4),
      hash: '0x' + Array.from({ length: 8 }, () => Math.floor(Math.random()*16).toString(16)).join('') + '...',
      network: token.network,
      block: 21105495 + Math.floor(Math.random() * 50),
      status: 'Confirmed',
      timestamp: 'Just now',
      note: stealth ? 'Sent via Shielded Stealth Route' : 'Direct transfer'
    };

    this.state.transactions.unshift(newTx);
    sounds.playSuccess();
    this.notify();
    return newTx;
  }

  swapTokens({ fromAsset, toAsset, fromAmount, toAmount }) {
    sounds.playClick();
    const fromToken = this.state.assets[fromAsset];
    const toToken = this.state.assets[toAsset];

    if (!fromToken || !toToken || fromToken.balance < fromAmount) {
      throw new Error('Insufficient balance for swap');
    }

    fromToken.balance = Math.round((fromToken.balance - fromAmount) * 1000000) / 1000000;
    toToken.balance = Math.round((toToken.balance + toAmount) * 1000000) / 1000000;

    const newTx = {
      id: 'tx_' + Math.floor(1000 + Math.random() * 9000),
      type: 'swap',
      asset: fromAsset,
      toAsset: toAsset,
      amount: fromAmount,
      toAmount: toAmount,
      fiatAmount: fromAmount * fromToken.price,
      from: 'Vault',
      to: 'Calm DEX Engine',
      hash: '0x' + Array.from({ length: 8 }, () => Math.floor(Math.random()*16).toString(16)).join('') + '...',
      network: fromToken.network,
      block: 21105501,
      status: 'Confirmed',
      timestamp: 'Just now',
      note: `Swapped ${fromAmount} ${fromAsset} for ${toAmount} ${toAsset}`
    };

    this.state.transactions.unshift(newTx);
    sounds.playSuccess();
    this.notify();
    return newTx;
  }

  resetVault() {
    sounds.playWipe();
    localStorage.removeItem('cc_vault_mnemonic');
    this.state.mnemonic = this.generateMnemonic();
    localStorage.setItem('cc_vault_mnemonic', this.state.mnemonic);

    // Reset balances to fresh clean demo state
    this.state.assets.BTC.balance = 0.385;
    this.state.assets.ETH.balance = 2.85;
    this.state.assets.SOL.balance = 18.4;
    this.state.assets.ARB.balance = 850.0;
    this.state.assets.XMR.balance = 6.2;
    this.state.assets.USDT.balance = 1240.0;

    this.state.transactions = [...INITIAL_TRANSACTIONS];
    this.notify();
  }
}

export const store = new Store();
