// Install & Join Page
import { icon } from '../icons.js';
import { sounds } from '../audio.js';

export function renderInstallPage() {
  return `
    <section class="join-page">
      <div class="join-visual">
        <div class="join-visual-inner">
          <span class="join-orbit orbit-a"></span>
          <span class="join-orbit orbit-b"></span>
          <div class="join-monogram">CC</div>
          <p>PRIVATE BY DESIGN</p>
        </div>
        <div class="join-side-note">PRIVATE WALLET / 001</div>
      </div>

      <div class="join-content">
        <div class="join-content-inner">
          <p class="kicker"><span></span>Install app</p>
          <h1>Your private web wallet,<br /><em>ready when you are.</em></h1>
          <p class="join-lede">
            Install Cryptochains as a secured private web wallet with custodial-style convenience. Leave your email and we’ll send the secure install link when your account is ready.
          </p>

          <form class="join-form" id="install-form">
            <label>
              Email address
              <input type="email" name="email" id="install-email" placeholder="you@example.com" required />
            </label>
            <label class="consent">
              <input type="checkbox" required />
              <span>I agree to receive occasional Cryptochains updates. No selling, no noise. <a href="/legal" data-nav="/legal">Privacy & risk note</a>.</span>
            </label>
            <button class="button button-primary" type="submit">
              Get secure install link ${icon('arrow', 17)}
            </button>
          </form>

          <div class="form-success" id="install-success">
            <div>${icon('check', 22)}</div>
            <h3>Your install link is next.</h3>
            <p>We’ll send the next step when your secure install path is ready. Until then, keep your access details private.</p>
            <a href="/" data-nav="/">Back to the home page ${icon('arrow', 15)}</a>
          </div>

          <div class="join-footnote">
            <span>Already have access?</span>
            <a href="#wallet" id="install-open-preview">Experience the vault ${icon('arrow', 15)}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function setupInstallInteractivity() {
  const form = document.getElementById('install-form');
  const success = document.getElementById('install-success');
  const prevBtn = document.getElementById('install-open-preview');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      sounds.playSuccess();
      form.classList.add('is-hidden');
      success.classList.add('is-visible');
    });
  }

  if (prevBtn && window.openVaultModal) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openVaultModal();
    });
  }
}
