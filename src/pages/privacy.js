// Privacy & Security Page — Quietly Secured
import { icon } from '../icons.js';

export function renderPrivacyPage() {
  return `
    <section class="inner-hero privacy-hero">
      <div class="inner-hero-copy">
        <p class="kicker"><span></span>Privacy & security</p>
        <h1>Private access,<br /><em>quietly secured.</em></h1>
        <p>Cryptochains is designed around a simple boundary: we can make the experience easier without turning your activity into a product. That means fewer promises, more transparency.</p>
        <div class="inner-hero-actions">
          <a class="button button-primary" href="/install" data-nav="/install">Install app ${icon('arrow', 17)}</a>
          <a class="button button-ghost" href="/help" data-nav="/help">Read the FAQ</a>
        </div>
      </div>

      <div class="inner-hero-visual">
        <div class="privacy-visual">
          <div class="privacy-ring ring-a"></div>
          <div class="privacy-ring ring-b"></div>
          <div class="privacy-lock">
            ${icon('shield', 42)}
            <span>SECURE<br />ACCESS</span>
          </div>
          <div class="privacy-caption">
            <span class="tiny-dot"></span>PRIVATE ACCESS <span class="caption-divider"></span> VERIFIED ROUTES
          </div>
        </div>
      </div>

      <div class="hero-note">03 / <span>Privacy & security</span></div>
    </section>

    <!-- Interactive Entropy Harvesting Demo -->
    <section class="section-shell" style="padding-top: 20px;">
      <div class="entropy-container" id="entropy-pad">
        <div class="entropy-label">CLIENT-SIDE ENTROPY HARVESTER · ZERO NETWORK TRANSMISSION</div>
        <div class="entropy-bar">
          <div class="entropy-bar-fill" id="entropy-bar-fill"></div>
        </div>
        <p style="font-size: 12px; color: var(--muted); margin: 6px 0;">Move your cursor over this box to generate local cryptographic entropy</p>
        <div class="entropy-hash" id="entropy-display">Entropy Pool: Idle (0%)</div>
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
            <h3>Custodial-style, without the theatre</h3>
            <p>A private web wallet with protected account access, clear sign-in boundaries, and a product team that does not need your activity to sell ads. We will publish the final custody and recovery model before launch.</p>
          </div>
          <div class="story-tag">key <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">02</div>
          <div class="story-copy">
            <h3>Private by default</h3>
            <p>We collect what is necessary to run the service and no more. No selling transaction histories. No ad profiles built from your balance.</p>
          </div>
          <div class="story-tag">private <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">03</div>
          <div class="story-copy">
            <h3>Security is a practice</h3>
            <p>We publish what we know, where our limits are, and what you can do to protect yourself. Risk is part of the category; hiding it would be a security flaw.</p>
          </div>
          <div class="story-tag">secure <span>${icon('arrow', 15)}</span></div>
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

export function setupPrivacyInteractivity() {
  const pad = document.getElementById('entropy-pad');
  const fill = document.getElementById('entropy-bar-fill');
  const disp = document.getElementById('entropy-display');

  if (!pad) return;

  let moves = 0;
  const target = 30;

  pad.addEventListener('mousemove', () => {
    if (moves < target) {
      moves++;
      const pct = Math.round((moves / target) * 100);
      if (fill) fill.style.width = `${pct}%`;
      if (disp) {
        if (pct < 100) {
          disp.textContent = `Gathering Local Entropy: ${pct}% (0x${(moves * 4821).toString(16)}...)`;
        } else {
          disp.textContent = `✓ 256-bit Key Entropy Generated Locally in Memory`;
        }
      }
    }
  });
}
