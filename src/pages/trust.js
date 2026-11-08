// Trust & Principles Page
import { icon } from '../icons.js';

export function renderTrustPage() {
  return `
    <section class="inner-hero trust-hero">
      <div class="inner-hero-copy">
        <p class="kicker"><span></span>Trust, without theatre</p>
        <h1>The boring parts<br />are the <em>important</em> parts.</h1>
        <p>We are building Cryptochains slowly on purpose. Our promise is not that nothing can go wrong. It is that we will be clear about how it works, where we are, and what remains your responsibility.</p>
        <div class="inner-hero-actions">
          <a class="button button-primary" href="/install" data-nav="/install">Install app ${icon('arrow', 17)}</a>
          <a class="button button-ghost" href="/legal" data-nav="/legal">Read risk note</a>
        </div>
      </div>

      <div class="inner-hero-visual">
        <div class="trust-visual">
          <div class="trust-stamp">
            <span>NO</span>
            <strong>SHORTCUTS</strong>
            <span>2026 · EST.</span>
          </div>
          <div class="trust-notes">
            <div><span>01</span>Self-custody</div>
            <div><span>02</span>Plain language</div>
            <div><span>03</span>Open limits</div>
          </div>
        </div>
      </div>

      <div class="hero-note">06 / <span>Trust & principles</span></div>
    </section>

    <!-- Visual Diagram Addition -->
    <section class="section-shell" style="padding-top: 20px;">
      <div class="landing-visual-wrap">
        <img class="landing-vector-img" src="/assets/vault-card.svg" alt="Cryptographic Trust" width="560" />
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
            <h3>No speculative token. Ever.</h3>
            <p>Cryptochains will never issue a governance token, run speculative farming pools, or encourage artificial transaction churn. Our incentive is purely to make the safest, calmest wallet on the web.</p>
          </div>
          <div class="story-tag">zero noise <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">02</div>
          <div class="story-copy">
            <h3>Transparent risk disclosure</h3>
            <p>Self-custody means ultimate freedom and ultimate responsibility. We don't hide the dangers behind flashy banners. If a network has high fees or a transaction is irreversible, you will know before confirming.</p>
          </div>
          <div class="story-tag">total clarity <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">03</div>
          <div class="story-copy">
            <h3>Auditable client code</h3>
            <p>All cryptographic signing and entropy generation happens locally in your browser sandbox using standard Web Crypto primitives. No backdoors, no remote key escrow.</p>
          </div>
          <div class="story-tag">client-side <span>${icon('arrow', 15)}</span></div>
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
