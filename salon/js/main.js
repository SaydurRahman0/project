/**
 * ==========================================================================
 * Signature Beauty Salon - Main Application Entry Point
 * Pure Vanilla JavaScript (ES Modules)
 * ==========================================================================
 * Central hub that registers Web Components (<site-header>, <site-footer>,
 * <back-to-top>, <gallery-lightbox>) and initializes feature modules.
 */

// Environment Safeguards & Polyfills
import './polyfill.js';

// 1. Web Components (Auto-registered)
import './components/Header.js';
import './components/Footer.js';
import './components/BackToTop.js';
import './components/Lightbox.js';
import { FeaturedServices } from './components/FeaturedServices.js';

// 2. Feature Modules & Controllers
import { CategoryFilter } from './components/CategoryFilter.js';
import { FaqAccordion } from './components/FaqAccordion.js';
import { AppointmentForm } from './components/AppointmentForm.js';
import { ContactForm } from './components/ContactForm.js';
import { Toast } from './components/Toast.js';

// Export for window or debugging access
export { FeaturedServices, CategoryFilter, FaqAccordion, AppointmentForm, ContactForm, Toast };

// Run when DOM is parsed
document.addEventListener('DOMContentLoaded', () => {
  // Sticky header shadow on scroll
  initStickyHeader();

  // Initialize Services Category Filter
  new CategoryFilter({
    buttonsSelector: '.service-filter-btn',
    itemsSelector: '.service-item',
    filterAttr: 'data-filter',
    categoryAttr: 'data-category'
  });

  // Initialize Gallery Category Filter
  new CategoryFilter({
    buttonsSelector: '.gallery-filter-btn',
    itemsSelector: '.gallery-item',
    filterAttr: 'data-filter',
    categoryAttr: 'data-category'
  });

  // Initialize FAQ Accordion
  new FaqAccordion('.faq-grid');

  // Initialize Appointment Booking Controller
  new AppointmentForm('appointment-form');

  // Initialize Contact Form Controller
  new ContactForm('contact-form');
});

/**
 * Adds subtle elevation to header on scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
