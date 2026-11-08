// Interactive Vault Preview Modal (replaces separate dashboard, keeps 100% focus on landing page)
import { icon } from '../icons.js';
import { store } from '../store.js';
import { sounds } from '../audio.js';
import { showToast } from './toast.js';

let isModalOpen = false;

export function renderVaultModal() {
  const isCalm = store.state.calmMode;

  return `
    <div class="vault-preview-modal-backdrop" id="vault-modal-backdrop" style="display: none;">
      <div class="vault-preview-modal-box" role="dialog" aria-modal="true">
        <div class="vault-modal-header">
          <div>
            <strong>Cryptochains Vault Preview</strong>
            <small>Client-side verified · Self-custody</small>
          </div>
          <button class="vault-modal-close" id="vault-modal-close-btn">${icon('close', 18)}</button>
        </div>

        <div class="vault-modal-body">
          <div class="modal-balance-card">
            <div class="modal-bal-label">
              <span>ESTIMATED TOTAL BALANCE</span>
              <button class="modal-calm-btn" id="modal-calm-toggle" style="background:none; border:none; color:var(--acid); cursor:pointer; font-family:var(--mono); font-size:10px;">
                ${isCalm ? 'UNHIDE BALANCES' : 'CALM MODE (BLUR)'}
              </button>
            </div>
            <div class="modal-bal-num ${isCalm ? 'blurred-amount' : ''}" id="modal-bal-display">
              $24,820<span style="font-size:20px; color:var(--muted);">.38</span>
            </div>
            <div class="modal-bal-meta">
              ${icon('check', 12)} Protected by client passphrase · Zero telemetry
            </div>
          </div>

          <div class="modal-coins-list">
            <div class="modal-coin-row">
              <span>₿ Bitcoin (0.184 BTC)</span>
              <strong class="${isCalm ? 'blurred-amount' : ''}">$12,240.00</strong>
            </div>
            <div class="modal-coin-row">
              <span>◆ Ethereum (2.48 ETH)</span>
              <strong class="${isCalm ? 'blurred-amount' : ''}">$8,610.00</strong>
            </div>
            <div class="modal-coin-row">
              <span>◎ Solana (18.4 SOL)</span>
              <strong class="${isCalm ? 'blurred-amount' : ''}">$3,970.38</strong>
            </div>
          </div>

          <div class="modal-actions-grid">
            <button class="modal-act-btn button button-primary" id="modal-simulate-send">
              ${icon('send', 14)} Send in Plain English
            </button>
            <button class="modal-act-btn button button-ghost" id="modal-simulate-receive">
              ${icon('check', 14)} Verified Routes
            </button>
          </div>

          <div class="modal-footer-cta">
            <p>Ready to secure your personal private web wallet?</p>
            <a href="/install" data-nav="/install" class="button button-primary" id="modal-install-btn" style="width:100%; justify-content:center;">
              Get install link ${icon('arrow', 16)}
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupVaultModalEvents() {
  const backdrop = document.getElementById('vault-modal-backdrop');
  const closeBtn = document.getElementById('vault-modal-close-btn');
  const calmToggle = document.getElementById('modal-calm-toggle');
  const simulateSend = document.getElementById('modal-simulate-send');
  const simulateReceive = document.getElementById('modal-simulate-receive');
  const installBtn = document.getElementById('modal-install-btn');

  function open() {
    isModalOpen = true;
    backdrop.style.display = 'flex';
    sounds.playClick();
  }

  function close() {
    isModalOpen = false;
    backdrop.style.display = 'none';
    sounds.playClick();
  }

  window.openVaultModal = open;
  window.closeVaultModal = close;

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });
  }

  if (calmToggle) {
    calmToggle.addEventListener('click', () => {
      store.toggleCalmMode();
      const isCalm = store.state.calmMode;
      calmToggle.textContent = isCalm ? 'UNHIDE BALANCES' : 'CALM MODE (BLUR)';
      document.querySelectorAll('#modal-bal-display, .modal-coin-row strong').forEach(el => {
        el.classList.toggle('blurred-amount', isCalm);
      });
      showToast(isCalm ? 'Calm Mode Activated' : 'Calm Mode Deactivated', 'info');
    });
  }

  if (simulateSend) {
    simulateSend.addEventListener('click', () => {
      sounds.playSuccess();
      showToast('Plain English Signature: Send 0.25 ETH to Alex ($845.00) · Fee: $1.20', 'success', 4000);
    });
  }

  if (simulateReceive) {
    simulateReceive.addEventListener('click', () => {
      sounds.playClick();
      showToast('Client-side address verified: 0x71C8...5D51 (No cross-chain leaks)', 'info');
    });
  }

  if (installBtn) {
    installBtn.addEventListener('click', () => {
      close();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen) close();
  });
}
