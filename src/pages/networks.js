// Assets & Networks Page
import { icon } from '../icons.js';
import { store } from '../store.js';

export function renderNetworksPage() {
  const nets = store.state.networksStatus;
  const netKeys = Object.keys(nets);

  return `
    <section class="inner-hero networks-hero">
      <div class="inner-hero-copy">
        <p class="kicker"><span></span>Assets & networks</p>
        <h1>Your assets.<br /><em>One calm place.</em></h1>
        <p>Start with the networks you use today, not every network that exists. Cryptochains is expanding carefully, with compatibility details you can actually read.</p>
        <div class="inner-hero-actions">
          <a class="button button-primary" href="/install" data-nav="/install">Install app ${icon('arrow', 17)}</a>
          <a class="button button-ghost" href="/help" data-nav="/help">Read the FAQ</a>
        </div>
      </div>

      <div class="inner-hero-visual">
        <div class="network-visual">
          <div class="network-sphere">
            <span class="sphere-center">CC</span>
            <i class="coin coin-btc">₿</i>
            <i class="coin coin-eth">◆</i>
            <i class="coin coin-sol">◎</i>
            <i class="coin coin-base">B</i>
          </div>
          <div class="network-legend">
            <span><i class="legend-dot dot-live"></i>On launch map</span>
            <span><i class="legend-dot dot-next"></i>Coming carefully</span>
          </div>
        </div>
      </div>

      <div class="hero-note">05 / <span>Assets & networks</span></div>
    </section>

    <!-- Visual Diagram Addition -->
    <section class="section-shell" style="padding-top: 20px;">
      <div class="landing-visual-wrap">
        <img class="landing-vector-img" src="/assets/network-constellation.svg" alt="Network Ecosystem" width="560" />
      </div>
    </section>

    <!-- Live Telemetry Matrix -->
    <section class="section-shell">
      <div class="telemetry-table-container">
        <table class="telemetry-table">
          <thead>
            <tr>
              <th>CHAIN</th>
              <th>STATUS</th>
              <th>GAS METER</th>
              <th>THROUGHPUT</th>
              <th>FINALITY</th>
            </tr>
          </thead>
          <tbody>
            ${netKeys.map(k => `
              <tr>
                <td><strong>${k}</strong></td>
                <td><span class="telemetry-status-pill"><span class="chip-dot" style="width:4px;height:4px;border-radius:50%;background:var(--acid);display:inline-block;"></span> ${nets[k].status}</span></td>
                <td><code style="color:var(--acid); font-family:var(--mono);">${nets[k].gas}</code></td>
                <td>${nets[k].tps} TPS</td>
                <td>${nets[k].latency}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
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
            <h3>The essentials, first</h3>
            <p>Bitcoin, Ethereum, Base, Solana, and Polygon are on our launch map. Asset support can vary by network and account type; the wallet will always tell you what is supported before you act.</p>
          </div>
          <div class="story-tag">coins <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">02</div>
          <div class="story-copy">
            <h3>A network is a choice</h3>
            <p>We show the network name, address format, estimated fee, and what a transfer means before signing. The most expensive mistake is the one you were not told was possible.</p>
          </div>
          <div class="story-tag">network <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">03</div>
          <div class="story-copy">
            <h3>Built to keep opening</h3>
            <p>As layer-twos and privacy-preserving execution environments mature, Cryptochains adds them without cluttering the screen or altering your existing habits.</p>
          </div>
          <div class="story-tag">future <span>${icon('arrow', 15)}</span></div>
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
