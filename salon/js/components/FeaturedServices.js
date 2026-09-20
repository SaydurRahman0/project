/**
 * ==========================================================================
 * Signature Beauty Salon - Featured Services Component
 * Web Component: <featured-services data-source="services.html" limit="4"></featured-services>
 * ==========================================================================
 * Dynamically loads and renders featured treatment cards directly from
 * services.html (the single source of truth). Any update to titles, prices,
 * descriptions, or featured status on services.html immediately displays here.
 */

import { FALLBACK_SERVICES, renderServiceCardHtml } from '../data/services.js';

export class FeaturedServices extends HTMLElement {
  async connectedCallback() {
    const sourceUrl = this.getAttribute('data-source') || 'services.html';
    const limitAttr = this.getAttribute('limit');
    const limit = limitAttr ? parseInt(limitAttr, 10) : 4;

    try {
      await this.loadFromServicesPage(sourceUrl, limit);
    } catch (err) {
      console.warn('[FeaturedServices] Notice: Loading fallback services catalog:', err.message || err);
      // If container has no rendered cards, render fallback dataset
      if (!this.querySelector('.service-card')) {
        this.renderFallback(limit);
      }
    }
  }

  /**
   * Fetches and parses the live services.html document
   * @param {string} sourceUrl
   * @param {number} limit
   */
  async loadFromServicesPage(sourceUrl, limit = 4) {
    const response = await fetch(sourceUrl);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} when loading ${sourceUrl}`);
    }

    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    const servicesGrid = doc.querySelector('#services-grid') || doc.querySelector('.services-grid');
    if (!servicesGrid) {
      throw new Error('Services grid not found in target page');
    }

    // 1. Select cards explicitly tagged as featured
    let featuredCards = Array.from(servicesGrid.querySelectorAll('.service-card[data-featured="true"]'));

    // 2. If fewer than desired limit, fill remaining slots with diverse services from grid
    if (featuredCards.length < limit) {
      const allCards = Array.from(servicesGrid.querySelectorAll('.service-card'));
      for (const card of allCards) {
        if (featuredCards.length >= limit) break;
        if (!featuredCards.includes(card)) {
          featuredCards.push(card);
        }
      }
    }

    if (featuredCards.length === 0) {
      throw new Error('No service cards found in services page');
    }

    const selectedCards = featuredCards.slice(0, limit);

    // Replace container content with cloned cards from services.html
    this.innerHTML = '';
    selectedCards.forEach(card => {
      const clone = card.cloneNode(true);
      // Remove page-specific category filter class so it stays visible on home page
      clone.classList.remove('service-item');
      clone.classList.add('service-card');
      // Reset any hidden or inline styles
      clone.style.display = '';
      clone.style.opacity = '';
      clone.style.transform = '';
      this.appendChild(clone);
    });

    // Dispatch event in case other listeners want to hook in
    this.dispatchEvent(new CustomEvent('featured-services:rendered', {
      bubbles: true,
      detail: { count: selectedCards.length, source: sourceUrl }
    }));
  }

  /**
   * Renders fallback cards from shared data catalog
   * @param {number} limit
   */
  renderFallback(limit = 4) {
    const featured = FALLBACK_SERVICES.filter(s => s.featured).slice(0, limit);
    this.innerHTML = featured.map(s => renderServiceCardHtml(s)).join('\n');
  }
}

// Auto-register custom element
if (!customElements.get('featured-services')) {
  customElements.define('featured-services', FeaturedServices);
}
