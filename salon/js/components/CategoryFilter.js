/**
 * ==========================================================================
 * Signature Beauty Salon - Category Filter Component
 * Pure Vanilla JavaScript ES Module
 * ==========================================================================
 * Provides reusable client-side category filtering with smooth transitions.
 */

export class CategoryFilter {
  /**
   * @param {Object} options
   * @param {string} options.buttonsSelector - Selector for category filter buttons
   * @param {string} options.itemsSelector - Selector for grid items to filter
   * @param {string} [options.filterAttr='data-filter'] - Attribute on buttons
   * @param {string} [options.categoryAttr='data-category'] - Attribute on items
   */
  constructor({ buttonsSelector, itemsSelector, filterAttr = 'data-filter', categoryAttr = 'data-category' }) {
    this.buttons = document.querySelectorAll(buttonsSelector);
    this.items = document.querySelectorAll(itemsSelector);
    this.filterAttr = filterAttr;
    this.categoryAttr = categoryAttr;

    if (this.buttons.length && this.items.length) {
      this.init();
    }
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedFilter = button.getAttribute(this.filterAttr);

        // Update active class on buttons
        this.buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter items
        this.filterItems(selectedFilter);
      });
    });
  }

  filterItems(category) {
    this.items.forEach(item => {
      const itemCat = item.getAttribute(this.categoryAttr);
      const isMatch = category === 'all' || itemCat === category;

      if (isMatch) {
        item.style.display = '';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.96)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 200);
      }
    });
  }
}
