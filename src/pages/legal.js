// Legal & Risk Disclosure Page
import { icon } from '../icons.js';

export function renderLegalPage() {
  return `
    <section class="legal-hero section-shell">
      <p class="kicker"><span></span>The fine print, made readable</p>
      <h1>Honest about<br /><em>the edges.</em></h1>
      <p>Cryptochains is software for secured custody. It is not a bank, an exchange, a broker, or investment advice. Digital assets can lose value, transactions can be irreversible, and the responsibility of protecting your authentication details and reviewing transactions remains with you.</p>
    </section>

    <section class="legal-body section-shell">
      <aside>
        <span>Last updated</span>
        <strong>08 Nov 2026</strong>
        <a href="/privacy" data-nav="/privacy">Privacy model</a>
        <a href="/trust" data-nav="/trust">Trust & principles</a>
        <a href="/help" data-nav="/help">Help center</a>
      </aside>

      <div class="legal-copy">
        <h2>Risk note</h2>
        <p>Using a private web wallet still requires care. Check every transaction before signing, protect your authentication details, and understand that on-chain transfers can be irreversible.</p>

        <h2>Privacy note</h2>
        <p>We aim to minimize data collection. Product details will evolve during installation, and the current privacy model will always be published here before a material change.</p>

        <h2>Terms</h2>
        <p>By using Cryptochains, you agree to use the product lawfully and to evaluate whether digital assets are appropriate for you. Nothing on this site is a recommendation to buy, sell, or hold any asset.</p>

        <a class="inline-link" href="mailto:legal@cryptochains.net">
          Questions for legal? Contact us ${icon('arrow', 15)}
        </a>
      </div>
    </section>
  `;
}
