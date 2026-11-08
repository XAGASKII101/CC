# Cryptochains — Private by Design (Rebuilt & Supercharged)

> A private web wallet for a more intentional relationship with your money. Rebuilt from the ground up to transform the static concept into a live, fully-functional, ultra-calm crypto custody experience.

---

## ⚡ What was Improved ("Make Better")

| Aspect | Original (`cryptochains-zcqa878x.manus.space`) | Rebuilt & Supercharged Cryptochains |
| :--- | :--- | :--- |
| **The Wallet** | **Non-existent** (Only an email input waitlist form labeled "Install") | **Full Working Web Wallet**: Live balance, 6 multi-chain assets (BTC, ETH, SOL, ARB, XMR, USDT), interactive 30-day velocity chart, asset allocation grid. |
| **Privacy Shield** | Static marketing text | **Interactive "Calm Mode"**: Instant one-click toggle (eye icon) to blur all balances and addresses with frosted-glass privacy filter. |
| **Sending Assets** | None | **Interactive Send Modal**: Plain-English transaction preview before signing, multi-chain address validation, Calm/Standard/Urgent gas fee speeds, and Stealth Relay routing. |
| **Receiving Assets** | None | **Interactive Receive Screen**: Live high-contrast vector SVG QR code generation, address clipboard copy with toast feedback, and network confirmation warnings. |
| **Token Swaps** | None | **Calm In-Wallet Swap Engine**: Instant DEX swap between any pairs with live rates, zero extra spread, and automated slippage protection. |
| **Activity Ledger** | None | **Filterable History Ledger**: Sent, Received, and Swapped transactions with clickable detailed transaction inspection cards. |
| **Security & Keys** | None | **BIP-39 Mnemonic Phrase Engine**: 12-word seed phrase generator, copy backup, emergency panic wipe, and client-side encryption. |
| **Quick Actions** | None | **Command Palette (`Cmd+K` / `Ctrl+K`)**: Instant search and keyboard navigation across all features and actions. |
| **Sound & Haptics** | None | **Ambient Sound Synthesizer**: Web Audio API-synthesized mechanical clicks, chimes, and confirmation tones (with audio mute toggle). |
| **Interactive Pages** | Static text blocks | **Interactive Sandboxes**: Client-side entropy generator (canvas cursor tracking), 3-step walkthrough simulator, live consensus gas & TPS table, and real-time FAQ search. |
| **Routing** | Rigid pathname navigation | **Universal SPA Router**: Fluid history navigation, active states, and mobile overlay drawer. |

---

## 🚀 Getting Started

To launch the local web server:

```bash
# In the project directory:
node server.js
```

Then open **`http://localhost:3000`** (or `http://localhost:3000/wallet` to jump straight to the Web Wallet).

---

## 🧭 Page Routes

- **`/`** — Home (Hero with interactive 3D vault tilt, live crypto ticker, manifesto, and signal card)
- **`/wallet`** — **Private Web Wallet Application** (Portfolio, Send, Receive, Swap, Activity Ledger, Seed Backup)
- **`/product`** — Product Philosophy & Interactive Wallet Mockup
- **`/privacy`** — Privacy & Security (Client-side entropy harvesting sandbox & zero-telemetry guarantee)
- **`/how-it-works`** — 3-Step Interactive Onboarding Sandbox
- **`/networks`** — Live Consensus & Gas Telemetry Board (Bitcoin, Ethereum, Solana, Arbitrum, Base, Polygon, Monero)
- **`/trust`** — Trust Manifesto, Verification, and Open Boundaries
- **`/help`** — Help Center & Live Instant Searchable FAQs
- **`/legal`** — Legal, Self-Custody, and Risk Disclosures
- **`/install`** — Install Link Request & Instant Web Wallet Access

---

## 🎨 Design System

- **Background Palette**: Deep Obsidian `#0b0d0d`, Charcoal `#111515`, Slate `#171c1c`
- **Typography**: `Manrope` (UI & Body), `Playfair Display` (Editorial Serif Titles & Italics), `DM Mono` (Data, Tickers & Addresses)
- **Accents**: Neon Chartreuse `#d7ff61`, Cream Paper `#f0eee8`
- **Zero Heavy Dependencies**: Pure standard ES Modules, zero external node dependencies, instant sub-50ms startup.
