/**
 * ==========================================================================
 * Signature Beauty Salon - Gallery Lightbox Component
 * Web Component: <gallery-lightbox></gallery-lightbox>
 * ==========================================================================
 * Renders the lightbox modal markup and handles image zooming, captions,
 * keyboard Escape closing, and focus management.
 */

export class GalleryLightbox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="lightbox-modal" class="lightbox" role="dialog" aria-modal="true" aria-label="Image Preview">
        <button id="lightbox-close-btn" class="lightbox-close" aria-label="Close Lightbox">&times;</button>
        <div class="lightbox-content">
          <div class="lightbox-img-wrapper">
            <img id="lightbox-main-img" src="" alt="Signature Beauty Salon Showcase">
          </div>
          <div class="lightbox-caption">
            <h4 id="lightbox-title-text"></h4>
            <p id="lightbox-category-text"></p>
          </div>
        </div>
      </div>
    `;

    this.initLightbox();
  }

  initLightbox() {
    const modal = this.querySelector('#lightbox-modal');
    const closeBtn = this.querySelector('#lightbox-close-btn');
    const mainImg = this.querySelector('#lightbox-main-img');
    const titleText = this.querySelector('#lightbox-title-text');
    const categoryText = this.querySelector('#lightbox-category-text');

    if (!modal || !closeBtn || !mainImg) return;

    const closeModal = () => {
      modal.classList.remove('open', 'active');
      document.body.style.overflow = '';
    };

    const openModal = (src, title, category) => {
      mainImg.src = src;
      mainImg.alt = title || 'Signature Beauty Salon Gallery Showcase';
      if (titleText) titleText.textContent = title || '';
      if (categoryText) categoryText.textContent = category ? `Category: ${category}` : '';
      modal.classList.add('open', 'active');
      document.body.style.overflow = 'hidden';
    };

    // Attach to all .gallery-item on the page
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      const openFromItem = () => {
        const img = item.querySelector('img');
        const titleEl = item.querySelector('.gallery-item-title');
        const catEl = item.querySelector('.gallery-item-cat');

        if (!img) return;
        const src = img.src;
        const title = titleEl ? titleEl.textContent : (img.alt || '');
        const category = catEl ? catEl.textContent : (item.getAttribute('data-category') || '');
        openModal(src, title, category);
      };

      item.addEventListener('click', openFromItem);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openFromItem();
        }
      });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }
}

if (!customElements.get('gallery-lightbox')) {
  customElements.define('gallery-lightbox', GalleryLightbox);
}
