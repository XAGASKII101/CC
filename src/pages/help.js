// Help Center — Searchable FAQs
import { icon } from '../icons.js';
import { sounds } from '../audio.js';

const FAQS = [
  {
    q: "What is Cryptochains?",
    a: "Cryptochains is a private web wallet for holding, sending, and receiving digital assets. Your wallet access is protected through a secured, custodial-style experience. We build the interface; you stay in control of how you use it."
  },
  {
    q: "How does account recovery work?",
    a: "Cryptochains is designed around a secure recovery flow and clear access boundaries. We will document the final recovery and support process before launch; never share passwords or verification codes with anyone."
  },
  {
    q: "Which assets are supported?",
    a: "We are starting with Bitcoin, Ethereum, Base, Solana, and Polygon. Support can vary by asset and network, and the app will make that clear before you confirm a transaction."
  },
  {
    q: "Are there fees?",
    a: "Cryptochains does not add a spread to your assets. Network fees still apply and go to the relevant network. Any optional product fee will be shown clearly before you approve it."
  },
  {
    q: "How private is it?",
    a: "We are building for data minimization. We do not want transaction histories or account activity to become advertising profiles. Read the privacy page for the current model and its stated limits."
  },
  {
    q: "How do I get support?",
    a: "Install the app to access the private web wallet. Support will be available through the in-app help route and hello@cryptochains.net."
  }
];

export function renderHelpPage() {
  return `
    <section class="help-hero section-shell">
      <div class="help-hero-inner">
        <p class="kicker"><span></span>Everything we get asked, answered.</p>
        <h1>Questions,<br /><em>addressed plainly.</em></h1>
        <p>A private web wallet only works if you understand what it does and does not do. Here are the answers to the questions we hear most often.</p>

        <!-- Live Instant Search -->
        <div class="faq-search-wrapper">
          ${icon('search', 16)}
          <input type="text" id="faq-search-input" placeholder="Search questions (e.g., 'recovery', 'fees', 'support')..." autocomplete="off" />
        </div>
      </div>
    </section>

    <section class="faq-section section-shell">
      <div class="faq-list" id="faq-list-container">
        ${renderFaqList(FAQS)}
      </div>
    </section>

    <section class="help-bottom">
      <div class="help-bottom-inner">
        <span>Need the source?</span>
        <a href="/privacy" data-nav="/privacy">Read our privacy model ${icon('arrow', 16)}</a>
        <a href="/legal" data-nav="/legal">Read the risk note ${icon('arrow', 16)}</a>
      </div>
    </section>
  `;
}

function renderFaqList(list) {
  return list.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'is-open' : ''}">
      <button class="faq-question" aria-expanded="${idx === 0}" aria-controls="faq-answer-${idx}">
        <span>${item.q}</span>
        <i>${icon('plus', 18)}</i>
      </button>
      <div class="faq-answer" id="faq-answer-${idx}" aria-hidden="${idx !== 0}">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

export function setupHelpInteractivity() {
  const container = document.getElementById('faq-list-container');
  const searchInput = document.getElementById('faq-search-input');

  function bindAccordions() {
    container.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        sounds.playClick();
        const item = btn.parentElement;
        const isOpen = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(isOpen));
        btn.nextElementSibling.setAttribute('aria-hidden', String(!isOpen));
      });
    });
  }

  bindAccordions();

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      const filtered = FAQS.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
      container.innerHTML = renderFaqList(filtered);
      bindAccordions();
    });
  }
}
