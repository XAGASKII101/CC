// Home Landing Page — Faithful to Original Aesthetic + Rich Visuals & Interactions
import { icon } from '../icons.js';
import { store } from '../store.js';

export function renderHomePage() {
  const assets = store.state.assets;

  return `
    <!-- 01 / HERO -->
    <section class="hero home-hero">
      <div class="hero-copy">
        <div class="reveal hero-reveal">
          <p class="kicker"><span></span>A private web wallet for a more intentional internet</p>
          <h1>Hold what matters.<br /><em>Quietly.</em></h1>
          <p class="hero-sub">
            Cryptochains is a secured private web wallet for your digital life — designed with custodial-style convenience, clear access controls, and a quieter relationship with your money.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="/install" data-nav="/install">
              Install the app ${icon('arrow', 17)}
            </a>
            <a class="button button-ghost open-preview-trigger" href="#preview" id="hero-preview-btn">
              Experience the vault
            </a>
          </div>
          <div class="hero-proof">
            <span class="proof-avatars"><i>R</i><i>M</i><i>J</i><i>+</i></span>
            <span>Private web wallet<br /><b>secured by design.</b></span>
          </div>
        </div>
      </div>

      <div class="hero-art">
        <div class="reveal art-reveal">
          <div class="vault-stage" id="interactive-vault" aria-label="Abstract visualization of a private wallet vault">
            <div class="vault-orbit orbit-one"></div>
            <div class="vault-orbit orbit-two"></div>
            <div class="vault-orbit orbit-three"></div>
            <div class="vault-core">
              <div class="vault-core-glow"></div>
              <span class="vault-core-label">PRIVATE</span>
              <strong>CC</strong>
              <span class="vault-core-line"></span>
              <small>secured by design</small>
            </div>
            <div class="vault-chip chip-top"><span class="chip-dot"></span>PRIVATE CUSTODY</div>
            <div class="vault-chip chip-bottom"><span class="chip-pulse"></span>SYNCED · 09:41</div>
            <div class="vault-axis axis-a"></div>
            <div class="vault-axis axis-b"></div>
          </div>
        </div>
      </div>

      <div class="hero-note">01 / <span>Private wallet security</span></div>
    </section>

    <!-- MARQUEE BAND -->
    <section class="marquee-band">
      <div class="marquee-track">
        <span>YOUR KEYS</span>
        <i>✴</i>
        <span>YOUR ASSETS</span>
        <i>✴</i>
        <span>YOUR PACE</span>
        <i>✴</i>
        <span>BTC $${assets.BTC.price.toLocaleString()}</span>
        <i>✴</i>
        <span>ETH $${assets.ETH.price.toLocaleString()}</span>
        <i>✴</i>
        <span>SOL $${assets.SOL.price.toLocaleString()}</span>
        <i>✴</i>
        <span>YOUR KEYS</span>
        <i>✴</i>
        <span>YOUR ASSETS</span>
        <i>✴</i>
        <span>YOUR PACE</span>
        <i>✴</i>
        <span>ZERO TELEMETRY</span>
        <i>✴</i>
        <span>PRIVATE BY DESIGN</span>
        <i>✴</i>
      </div>
    </section>

    <!-- 02 / INTRO -->
    <section class="home-intro section-shell">
      <div class="intro-aside">
        <p class="kicker"><span></span>A different kind of wallet</p>
        <span class="section-index">02 / 06</span>
      </div>
      <div class="intro-content">
        <h2>Less dashboard.<br /><span>More <em>ownership.</em></span></h2>
        <p>
          Most wallets ask you to think like a trader. Cryptochains asks a better question: what would it feel like to be fully in control, without the constant noise?
        </p>
        <a class="button button-text" href="/product" data-nav="/product">
          Meet the wallet ${icon('arrow', 17)}
        </a>

        <div class="signal-card">
          <div class="signal-top">
            <span>THE SIGNAL</span>
            <span>01 — 03</span>
          </div>
          <div class="signal-line">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <div class="signal-bottom">
            <span>Private by default</span>
            <span>Open by choice</span>
          </div>
        </div>

        <!-- High-End Luxury Hardware Card Visual -->
        <div class="landing-visual-wrap">
          <img class="landing-vector-img" src="/assets/vault-card.svg" alt="Cryptochains Physical Custody Card & Client Architecture" width="560" />
        </div>
      </div>
    </section>

    <!-- 03 / FEATURES -->
    <section class="home-features section-shell">
      <div class="feature-heading">
        <p class="kicker"><span></span>The essentials, considered</p>
        <h2>Everything you need.<br /><em>Nothing you don’t.</em></h2>
      </div>
      <div class="feature-grid">
        <article class="feature-card feature-card-dark">
          <div class="feature-number">01</div>
          <div class="feature-icon">${icon('lock', 25)}</div>
          <h3>Your access stays protected.</h3>
          <p>A private wallet experience with custodial-style convenience, layered access controls, and a clear view of what is protected.</p>
          <a href="/privacy" data-nav="/privacy">Our privacy model ${icon('arrow', 16)}</a>
        </article>

        <article class="feature-card feature-card-acid">
          <div class="feature-number">02</div>
          <div class="feature-icon">${icon('eye', 25)}</div>
          <h3>See what you sign.</h3>
          <p>Readable transaction details, clear network fees, and no dark patterns between you and your assets.</p>
          <a href="/product" data-nav="/product">Explore the product ${icon('arrow', 16)}</a>
        </article>

        <article class="feature-card feature-card-paper">
          <div class="feature-number">03</div>
          <div class="feature-icon">${icon('globe', 25)}</div>
          <h3>Move at your speed.</h3>
          <p>One calm home for the chains you actually use, with room to expand as your world does.</p>
          <a href="/networks" data-nav="/networks">Supported networks ${icon('arrow', 16)}</a>
        </article>
      </div>

      <!-- Plain-English Visual Illustration -->
      <div class="landing-visual-wrap" style="margin-top: 50px;">
        <img class="landing-vector-img" src="/assets/plain-english.svg" alt="Plain English Signature Verification" width="560" />
      </div>
    </section>

    <!-- 04 / QUOTE -->
    <section class="home-quote">
      <div class="quote-inner">
        <span class="quote-mark">“</span>
        <blockquote>
          Cryptochains is built for the moment after the hype — when you still believe in the technology, but you want to use it like a human.
        </blockquote>
        <div class="quote-byline">
          <span class="byline-line"></span>
          <span>Our founding principle<br /><b>Private by design.</b></span>
        </div>
      </div>
    </section>

    <!-- 05 / MULTI-CHAIN CONSTELLATION -->
    <section class="section-shell" style="padding: 70px 0 20px;">
      <div class="feature-heading">
        <p class="kicker"><span></span>Multi-chain serenity</p>
        <h2>One quiet home.<br /><em>Every chain you trust.</em></h2>
      </div>
      <div class="landing-visual-wrap">
        <img class="landing-vector-img" src="/assets/network-constellation.svg" alt="Multi-chain constellation" width="560" />
      </div>
    </section>

    <!-- 06 / CTA -->
    <section class="home-cta section-shell">
      <div class="cta-card">
        <div>
          <p class="kicker"><span></span>Install the private wallet</p>
          <h2>A quieter way<br />to <em>move.</em></h2>
        </div>
        <div class="cta-right">
          <p>Install Cryptochains as your private web wallet. Keep your access close, your data private, and your everyday moves clear.</p>
          <a class="button button-primary" href="/install" data-nav="/install">Install app ${icon('arrow', 17)}</a>
          <span class="microcopy">Private by design. No selling your data.</span>
        </div>
      </div>
    </section>
  `;
}

export function setupHomeInteractivity() {
  const vault = document.getElementById('interactive-vault');
  if (vault) {
    vault.addEventListener('mousemove', (e) => {
      const rect = vault.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      vault.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    });

    vault.addEventListener('mouseleave', () => {
      vault.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg)`;
    });
  }

  // Hero Preview button opens the Vault Preview modal
  const heroPrev = document.getElementById('hero-preview-btn');
  if (heroPrev && window.openVaultModal) {
    heroPrev.addEventListener('click', (e) => {
      e.preventDefault();
      window.openVaultModal();
    });
  }
}
