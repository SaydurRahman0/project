/**
 * ==========================================================================
 * Signature Beauty Salon - FAQ Accordion Component
 * Pure Vanilla JavaScript ES Module
 * ==========================================================================
 * Handles accessible toggle for FAQ questions, ARIA attributes, and
 * animated expand/collapse.
 */

export class FaqAccordion {
  constructor(containerSelector = '.faq-grid') {
    this.container = document.querySelector(containerSelector);
    if (this.container) {
      this.init();
    }
  }

  init() {
    const faqItems = this.container.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (!questionBtn || !answer) return;

      questionBtn.addEventListener('click', () => {
        const isCurrentlyOpen = item.classList.contains('active');

        // Close other open accordion items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        item.classList.toggle('active', !isCurrentlyOpen);
        questionBtn.setAttribute('aria-expanded', !isCurrentlyOpen ? 'true' : 'false');
      });
    });
  }
}
