// Product Page — The Wallet, Rethought
import { icon } from '../icons.js';

export function renderProductPage() {
  return `
    <section class="inner-hero product-hero">
      <div class="inner-hero-copy">
        <p class="kicker"><span></span>The wallet, rethought</p>
        <h1>A clear view of your<br /><em>digital life.</em></h1>
        <p>Cryptochains brings the essential actions closer and the anxiety further away. One considered place for the assets you own, the people you pay, and the choices you make.</p>
        <div class="inner-hero-actions">
          <a class="button button-primary" href="/install" data-nav="/install">Install app ${icon('arrow', 17)}</a>
          <a class="button button-ghost" href="/help" data-nav="/help">Read the FAQ</a>
        </div>
      </div>

      <div class="inner-hero-visual">
        <div class="product-mockup">
          <div class="mockup-top">
            <span>cryptochains</span>
            <span>09:41</span>
          </div>
          <div class="mockup-balance-label">TOTAL BALANCE <span>USD</span></div>
          <div class="mockup-balance">$24,820<span>.38</span></div>
          <div class="mockup-change">↑ 8.42% <small>this month</small></div>
          <div class="mockup-chart">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            <i></i><i></i><i></i><i></i><i></i>
          </div>
          <div class="mockup-assets">
            <div>
              <b>₿</b>
              <span>Bitcoin<small>0.184 BTC</small></span>
              <strong>$12,240</strong>
            </div>
            <div>
              <b class="eth">◆</b>
              <span>Ethereum<small>2.48 ETH</small></span>
              <strong>$8,610</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-note">02 / <span>The wallet, rethought</span></div>
    </section>

    <!-- Visual Diagram Addition -->
    <section class="section-shell" style="padding-top: 20px;">
      <div class="landing-visual-wrap">
        <img class="landing-vector-img" src="/assets/vault-card.svg" alt="Physical & Web Architecture" width="560" />
      </div>
    </section>

    <section class="story-section section-shell">
      <div class="story-heading">
        <p class="kicker"><span></span>The details matter</p>
        <h2>Designed for the<br /><em>long way round.</em></h2>
      </div>

      <div class="story-list">
        <article class="story-row">
          <div class="story-index">01</div>
          <div class="story-copy">
            <h3>A home, not a cockpit</h3>
            <p>Your balance is not a market feed. The home view is deliberately quiet — see what is yours, understand what changed, and move on with your day.</p>
          </div>
          <div class="story-tag">home <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">02</div>
          <div class="story-copy">
            <h3>Transactions in plain English</h3>
            <p>Before you approve, you see the destination, the network, the fee, and the exact amount. No unexplained prompts hiding behind a button.</p>
          </div>
          <div class="story-tag">transaction <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">03</div>
          <div class="story-copy">
            <h3>Built for the everyday</h3>
            <p>Send to a friend, receive a payment, or move between chains without learning a new vocabulary each time.</p>
          </div>
          <div class="story-tag">send <span>${icon('arrow', 15)}</span></div>
        </article>
      </div>
    </section>

    <section class="page-end-cta section-shell">
      <div>
        <p class="kicker"><span></span>Keep exploring</p>
        <h2>Good tools make<br />room for <em>good decisions.</em></h2>
      </div>
      <div>
        <a class="button button-primary" href="/install" data-nav="/install">Install app ${icon('arrow', 17)}</a>
      </div>
    </section>
  `;
}
