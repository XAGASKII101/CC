// Site Footer — Exact Original Structure
import { icon } from '../icons.js';
import { sounds } from '../audio.js';

export function renderFooter() {
  const wordmark = `
    <a class="wordmark" href="/" data-nav="/">
      <span class="wordmark-mark"><i></i><i></i><i></i></span>
      <span>cryptochains<span class="wordmark-dot">.</span>net</span>
    </a>
  `;

  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-lede">
          <div class="footer-mark">${wordmark}</div>
          <p>A calmer way to hold what matters.<br />Private by design.</p>
          <div class="footer-socials">
            <a href="/trust" data-nav="/trust" aria-label="Trust">✳</a>
            <a href="mailto:hello@cryptochains.net" aria-label="Email">@</a>
            <a href="/help" data-nav="/help" aria-label="Help">?</a>
          </div>
        </div>

        <div class="footer-col">
          <p class="footer-label">Explore</p>
          <a href="/product" data-nav="/product">The wallet</a>
          <a href="/privacy" data-nav="/privacy">Privacy & security</a>
          <a href="/how-it-works" data-nav="/how-it-works">How it works</a>
          <a href="/networks" data-nav="/networks">Networks</a>
        </div>

        <div class="footer-col">
          <p class="footer-label">Company</p>
          <a href="/trust" data-nav="/trust">Trust & principles</a>
          <a href="/help" data-nav="/help">Help center</a>
          <a href="/install" data-nav="/install">Install app</a>
          <a href="/legal" data-nav="/legal">Legal & risk</a>
        </div>

        <div class="footer-col footer-contact">
          <p class="footer-label">Stay close</p>
          <p>Product notes for people who<br />prefer signal over noise.</p>
          <form class="mini-form" id="newsletter-form">
            <input type="email" aria-label="Email address" placeholder="Your email address" required />
            <button aria-label="Subscribe">${icon('arrow', 17)}</button>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Cryptochains. Built for the considered.</span>
        <span>Private wallet use is responsibility. Read the <a href="/legal" data-nav="/legal">risk note</a>.</span>
      </div>
    </footer>
  `;
}
