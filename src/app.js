// Cryptochains Application Orchestrator & Client-Side Landing Router
import { sounds } from './audio.js';
import { icon } from './icons.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderVaultModal, setupVaultModalEvents } from './components/vaultModal.js';
import { showToast } from './components/toast.js';

// Pages
import { renderHomePage, setupHomeInteractivity } from './pages/home.js';
import { renderProductPage } from './pages/product.js';
import { renderPrivacyPage, setupPrivacyInteractivity } from './pages/privacy.js';
import { renderHowItWorksPage } from './pages/howItWorks.js';
import { renderNetworksPage } from './pages/networks.js';
import { renderTrustPage } from './pages/trust.js';
import { renderHelpPage, setupHelpInteractivity } from './pages/help.js';
import { renderLegalPage } from './pages/legal.js';
import { renderInstallPage, setupInstallInteractivity } from './pages/install.js';

class App {
  constructor() {
    this.currentPath = this.getInitialPath();
    this.init();
  }

  getInitialPath() {
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    return path;
  }

  init() {
    window.addEventListener('popstate', () => {
      this.currentPath = this.getInitialPath();
      this.render();
    });

    this.render();
    this.setupGlobalEvents();
  }

  navigate(path) {
    if (this.currentPath === path) return;
    this.currentPath = path;
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
    sounds.playClick();
  }

  render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    let pageHtml = '';
    let pageTitle = 'Cryptochains — Private by design';
    let mainClass = '';

    switch (this.currentPath) {
      case '/':
        pageHtml = renderHomePage();
        pageTitle = 'Cryptochains — Private by design';
        mainClass = 'home-page';
        break;
      case '/product':
        pageHtml = renderProductPage();
        pageTitle = 'Cryptochains — Product';
        mainClass = '';
        break;
      case '/privacy':
        pageHtml = renderPrivacyPage();
        pageTitle = 'Cryptochains — Privacy';
        mainClass = '';
        break;
      case '/how-it-works':
        pageHtml = renderHowItWorksPage();
        pageTitle = 'Cryptochains — How it works';
        mainClass = '';
        break;
      case '/networks':
        pageHtml = renderNetworksPage();
        pageTitle = 'Cryptochains — Networks';
        mainClass = '';
        break;
      case '/trust':
        pageHtml = renderTrustPage();
        pageTitle = 'Cryptochains — Trust';
        mainClass = '';
        break;
      case '/help':
        pageHtml = renderHelpPage();
        pageTitle = 'Cryptochains — Help';
        mainClass = 'help-page';
        break;
      case '/legal':
        pageHtml = renderLegalPage();
        pageTitle = 'Cryptochains — Legal';
        mainClass = 'legal-page';
        break;
      case '/install':
      case '/join':
        pageHtml = renderInstallPage();
        pageTitle = 'Cryptochains — Install';
        mainClass = 'join-page-shell';
        break;
      default:
        pageHtml = renderHomePage();
        pageTitle = 'Cryptochains — Private by design';
        mainClass = 'home-page';
        break;
    }

    document.title = pageTitle;

    appEl.innerHTML = `
      ${renderHeader(this.currentPath)}
      <main class="${mainClass}">
        ${pageHtml}
      </main>
      ${renderFooter()}
      ${renderVaultModal()}
    `;

    // Setup interactive handlers
    this.setupHeaderEvents();
    this.setupFooterEvents();
    setupVaultModalEvents();
    this.setupScrollReveal();

    // Page-specific setup
    if (this.currentPath === '/') setupHomeInteractivity();
    else if (this.currentPath === '/privacy') setupPrivacyInteractivity();
    else if (this.currentPath === '/help') setupHelpInteractivity();
    else if (this.currentPath === '/install' || this.currentPath === '/join') setupInstallInteractivity();
  }

  setupGlobalEvents() {
    // Intercept client-side navigation clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-nav]');
      if (link) {
        const href = link.getAttribute('data-nav');
        if (href && !href.startsWith('mailto:') && !href.startsWith('http') && !href.startsWith('#')) {
          e.preventDefault();
          this.navigate(href);
        }
      }
    });

    // Vault preview modal triggers
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('#nav-open-wallet-btn, #mobile-open-wallet-btn, .open-preview-trigger');
      if (trigger) {
        e.preventDefault();
        if (window.openVaultModal) window.openVaultModal();
      }
    });
  }

  setupHeaderEvents() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
        mobileMenu.classList.toggle('is-open', !isOpen);
        menuToggle.innerHTML = icon(!isOpen ? 'close' : 'menu', 22);
        sounds.playClick();
      });
    }

    // Audio toggle
    document.querySelectorAll('.sound-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const enabled = sounds.toggle();
        btn.classList.toggle('is-active', enabled);
        btn.innerHTML = icon(enabled ? 'soundOn' : 'soundOff', 15);
        showToast(enabled ? 'Calm Audio Enabled' : 'Calm Audio Muted', 'info');
      });
    });
  }

  setupFooterEvents() {
    const form = document.getElementById('newsletter-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        sounds.playSuccess();
        const btn = form.querySelector('button');
        if (btn) {
          btn.innerHTML = icon('check', 17);
          btn.classList.add('is-sent');
        }
        showToast('Subscribed to private product notes', 'success');
      });
    }
  }

  setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal, .story-row, .feature-card, .quote-inner, .cta-card, .faq-item').forEach(el => {
      observer.observe(el);
    });
  }
}

// Boot application
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
