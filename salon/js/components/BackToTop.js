/**
 * ==========================================================================
 * Signature Beauty Salon - Back to Top Component
 * Web Component: <back-to-top></back-to-top>
 * ==========================================================================
 * Shows smooth floating button when user scrolls down and smoothly scrolls back up.
 */

export class BackToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button id="back-to-top-btn" class="back-to-top" aria-label="Back to top">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
      </button>
    `;

    this.initScrollListener();
  }

  initScrollListener() {
    const btn = this.querySelector('#back-to-top-btn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

if (!customElements.get('back-to-top')) {
  customElements.define('back-to-top', BackToTop);
}
