// How It Works Page
import { icon } from '../icons.js';

export function renderHowItWorksPage() {
  return `
    <section class="inner-hero steps-hero">
      <div class="inner-hero-copy">
        <p class="kicker"><span></span>How it works</p>
        <h1>Three steps between<br />you and <em>confidence.</em></h1>
        <p>The first five minutes matter. We made them calm, legible, and honest — so you know exactly how a private web wallet works before you place anything inside.</p>
        <div class="inner-hero-actions">
          <a class="button button-primary" href="/install" data-nav="/install">Install app ${icon('arrow', 17)}</a>
          <a class="button button-ghost" href="/help" data-nav="/help">Read the FAQ</a>
        </div>
      </div>

      <div class="inner-hero-visual">
        <div class="steps-visual">
          <div class="step-line"></div>
          <div class="step-node node-1">
            <span>01</span>
            <b>create</b>
          </div>
          <div class="step-node node-2">
            <span>02</span>
            <b>make it yours</b>
          </div>
          <div class="step-node node-3">
            <span>03</span>
            <b>move</b>
          </div>
          <div class="step-caption">
            From first tap<br /><em>to everyday control.</em>
          </div>
        </div>
      </div>

      <div class="hero-note">04 / <span>How it works</span></div>
    </section>

    <!-- Visual Diagram Addition -->
    <section class="section-shell" style="padding-top: 20px;">
      <div class="landing-visual-wrap">
        <img class="landing-vector-img" src="/assets/plain-english.svg" alt="Plain English Step by Step" width="560" />
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
            <h3>Create your private account</h3>
            <p>Choose a strong passcode and complete the secure sign-in flow. Your account is designed around privacy-first access and clear recovery support.</p>
          </div>
          <div class="story-tag">create <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">02</div>
          <div class="story-copy">
            <h3>Make it yours</h3>
            <p>Add the networks you use, name your accounts, and choose the level of visibility that feels right. No address-book scraping. No hidden defaults.</p>
          </div>
          <div class="story-tag">custom <span>${icon('arrow', 15)}</span></div>
        </article>

        <article class="story-row">
          <div class="story-index">03</div>
          <div class="story-copy">
            <h3>Move with confidence</h3>
            <p>Review a transaction in human language, approve it, and keep a record you can understand later. The ritual stays yours.</p>
          </div>
          <div class="story-tag">move <span>${icon('arrow', 15)}</span></div>
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
