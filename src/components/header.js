// Site Header — Clean, Faithful to Original Landing Experience
import { icon } from '../icons.js';
import { sounds } from '../audio.js';

export function renderHeader(currentPath) {
  const isSound = sounds.enabled;

  const navLinks = [
    { path: '/product', label: 'Product' },
    { path: '/privacy', label: 'Privacy' },
    { path: '/how-it-works', label: 'How it works' },
    { path: '/networks', label: 'Networks' },
    { path: '/trust', label: 'Trust' },
    { path: '/help', label: 'Help' }
  ];

  const wordmark = `
    <a class="wordmark" href="/" data-nav="/">
      <span class="wordmark-mark"><i></i><i></i><i></i></span>
      <span>cryptochains<span class="wordmark-dot">.</span>net</span>
    </a>
  `;

  return `
    <header class="site-header">
      <div class="nav-wrap">
        <div class="nav-left">
          ${wordmark}
          <nav class="desktop-nav">
            ${navLinks.map(l => `
              <a class="nav-link ${currentPath === l.path ? 'is-active' : ''}" href="${l.path}" data-nav="${l.path}">
                ${l.label}
              </a>
            `).join('')}
          </nav>
        </div>

        <div class="nav-actions">
          <!-- Audio Toggle -->
          <button class="nav-tool-btn sound-toggle ${isSound ? 'is-active' : ''}" title="${isSound ? 'Calm Audio Enabled' : 'Enable Calm Audio Effects'}">
            ${icon(isSound ? 'soundOn' : 'soundOff', 15)}
          </button>

          <!-- Web Wallet Action (triggers interactive Vault Preview) -->
          <a class="nav-login" href="#wallet" id="nav-open-wallet-btn">Web wallet</a>

          <!-- Install App Button -->
          <a class="button button-primary button-compact" href="/install" data-nav="/install">
            Install app ${icon('arrow', 17)}
          </a>

          <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
            ${icon('menu', 22)}
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu">
        <div class="mobile-menu-inner">
          ${navLinks.map(l => `
            <a class="${currentPath === l.path ? 'is-active' : ''}" href="${l.path}" data-nav="${l.path}">
              ${l.label} <span>${icon('arrow', 16)}</span>
            </a>
          `).join('')}
          <a href="#wallet" id="mobile-open-wallet-btn">
            Web wallet <span>${icon('arrow', 16)}</span>
          </a>
          <a href="/install" data-nav="/install">
            Install app <span>${icon('arrow', 16)}</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
