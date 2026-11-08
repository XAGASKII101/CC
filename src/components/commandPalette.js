// Command Palette (Cmd+K / Ctrl+K)
import { icon } from '../icons.js';
import { store } from '../store.js';
import { sounds } from '../audio.js';
import { showToast } from './toast.js';

let isOpen = false;

export function renderCommandPalette() {
  return `
    <div class="cmd-overlay" id="cmd-palette-overlay" aria-hidden="true">
      <div class="cmd-modal" role="dialog" aria-modal="true">
        <div class="cmd-search-bar">
          ${icon('search', 18)}
          <input type="text" id="cmd-input" placeholder="Type a command or search (e.g. 'send', 'swap', 'networks', 'privacy')..." autocomplete="off" />
          <button class="cmd-close-btn" id="cmd-close-btn">${icon('close', 16)}</button>
        </div>

        <div class="cmd-results" id="cmd-results">
          <!-- Dynamically populated -->
        </div>

        <div class="cmd-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          <span><kbd>↵</kbd> to select</span>
          <span><kbd>esc</kbd> to close</span>
        </div>
      </div>
    </div>
  `;
}

const COMMANDS = [
  { id: 'wallet', title: 'Open Web Wallet', desc: 'View balances, send, receive and swap', icon: 'wallet', action: (navigate) => navigate('/wallet') },
  { id: 'send', title: 'Send Assets', desc: 'Transfer BTC, ETH, SOL with plain-English review', icon: 'send', action: (navigate) => { navigate('/wallet'); setTimeout(() => window.dispatchEvent(new CustomEvent('cc-open-modal', { detail: 'send' })), 100); } },
  { id: 'receive', title: 'Receive Crypto & QR Code', desc: 'Generate multi-chain address and SVG QR code', icon: 'qrCode', action: (navigate) => { navigate('/wallet'); setTimeout(() => window.dispatchEvent(new CustomEvent('cc-open-modal', { detail: 'receive' })), 100); } },
  { id: 'swap', title: 'Calm Swap Engine', desc: 'Instant DEX swap with 0% spread', icon: 'swap', action: (navigate) => { navigate('/wallet'); setTimeout(() => window.dispatchEvent(new CustomEvent('cc-open-modal', { detail: 'swap' })), 100); } },
  { id: 'calm', title: 'Toggle Calm Mode (Privacy Blur)', desc: 'Instantly blur or unblur sensitive balances', icon: 'eye', action: () => { store.toggleCalmMode(); showToast(store.state.calmMode ? 'Calm Mode Active — Balances Masked' : 'Calm Mode Inactive — Balances Visible', 'info'); } },
  { id: 'networks', title: 'Networks & Gas Monitor', desc: 'Live TPS, block heights, and Gwei across 7 chains', icon: 'network', action: (navigate) => navigate('/networks') },
  { id: 'privacy', title: 'Privacy & Security Manifesto', desc: 'Zero-knowledge, client-side encryption, and entropy demo', icon: 'shield', action: (navigate) => navigate('/privacy') },
  { id: 'product', title: 'Product Overview', desc: 'Deliberately quiet design philosophy', icon: 'sparkle', action: (navigate) => navigate('/product') },
  { id: 'how-it-works', title: 'How It Works', desc: 'Interactive 3-step onboarding walkthrough', icon: 'key', action: (navigate) => navigate('/how-it-works') },
  { id: 'trust', title: 'Trust & Principles', desc: 'No shortcuts, self-custody, open limits', icon: 'check', action: (navigate) => navigate('/trust') },
  { id: 'help', title: 'Help Center & Searchable FAQs', desc: 'Answers to common questions and support', icon: 'info', action: (navigate) => navigate('/help') },
  { id: 'sound', title: 'Toggle Calm Audio Engine', desc: 'Enable or disable soft haptic sound effects', icon: 'soundOn', action: () => { const en = sounds.toggle(); showToast(en ? 'Audio Effects Enabled' : 'Audio Effects Muted', 'info'); } },
  { id: 'reset', title: 'Panic Wipe / Reset Demo Vault', desc: 'Re-generate fresh mnemonic and seed state', icon: 'trash', action: () => { store.resetVault(); showToast('Vault state purged and regenerated', 'warning'); } }
];

export function setupCommandPalette(navigate) {
  const overlay = document.getElementById('cmd-palette-overlay');
  const input = document.getElementById('cmd-input');
  const resultsContainer = document.getElementById('cmd-results');
  const closeBtn = document.getElementById('cmd-close-btn');

  let selectedIndex = 0;
  let filteredCommands = [...COMMANDS];

  function renderList() {
    if (filteredCommands.length === 0) {
      resultsContainer.innerHTML = `
        <div class="cmd-empty">
          <p>No matching commands found</p>
          <small>Try searching "send", "wallet", "swap", "networks", or "privacy"</small>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filteredCommands.map((cmd, idx) => `
      <div class="cmd-item ${idx === selectedIndex ? 'is-selected' : ''}" data-idx="${idx}">
        <span class="cmd-item-icon">${icon(cmd.icon, 18)}</span>
        <div class="cmd-item-text">
          <strong>${cmd.title}</strong>
          <small>${cmd.desc}</small>
        </div>
        <span class="cmd-item-enter">${icon('chevronRight', 14)}</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.cmd-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-idx'), 10);
        executeCommand(filteredCommands[idx]);
      });
      el.addEventListener('mouseenter', () => {
        selectedIndex = parseInt(el.getAttribute('data-idx'), 10);
        updateSelectionHighlight();
      });
    });
  }

  function updateSelectionHighlight() {
    resultsContainer.querySelectorAll('.cmd-item').forEach((el, idx) => {
      el.classList.toggle('is-selected', idx === selectedIndex);
    });
  }

  function executeCommand(cmd) {
    if (!cmd) return;
    closePalette();
    sounds.playClick();
    cmd.action(navigate);
  }

  function openPalette() {
    isOpen = true;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    input.value = '';
    filteredCommands = [...COMMANDS];
    selectedIndex = 0;
    renderList();
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    isOpen = false;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  // Keyboard shortcut listener
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (isOpen) closePalette();
      else openPalette();
    } else if (e.key === 'Escape' && isOpen) {
      closePalette();
    } else if (isOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % filteredCommands.length;
        updateSelectionHighlight();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
        updateSelectionHighlight();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          executeCommand(filteredCommands[selectedIndex]);
        }
      }
    }
  });

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    filteredCommands = COMMANDS.filter(c => 
      c.title.toLowerCase().includes(query) || 
      c.desc.toLowerCase().includes(query) ||
      c.id.toLowerCase().includes(query)
    );
    selectedIndex = 0;
    renderList();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePalette();
  });

  closeBtn.addEventListener('click', closePalette);

  // Expose global trigger for buttons
  window.openCommandPalette = openPalette;
}
