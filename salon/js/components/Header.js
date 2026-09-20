/**
 * ==========================================================================
 * Signature Beauty Salon - Header Component
 * Web Component: <site-header active="home|services|about|packages|gallery|appointment|contact"></site-header>
 * ==========================================================================
 * Encapsulates the Announcement Bar, Desktop Navbar, and Mobile Navigation Drawer.
 */

export class SiteHeader extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || 'home';

    this.innerHTML = `
      <!-- Announcement Bar -->
      <div class="announcement-bar">
        <span>✨ First visit to Signature? Receive <strong>20% OFF</strong> with code <strong>SIGNATUREGLOW</strong> | Complimentary herbal tea & organic consultation</span>
      </div>

      <!-- Header & Navbar -->
      <header class="site-header">
        <div class="container navbar">
          <a href="index.html" class="brand-logo" aria-label="Signature Beauty Salon Homepage">
            <div class="brand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <div class="brand-text">
              <span class="brand-name">Signature</span>
              <span class="brand-tagline">Beauty Salon & Spa</span>
            </div>
          </a>

          <nav class="nav-menu" aria-label="Main Navigation">
            <a href="index.html" class="nav-link ${active === 'home' ? 'active' : ''}">Home</a>
            <a href="services.html" class="nav-link ${active === 'services' ? 'active' : ''}">Services</a>
            <a href="about.html" class="nav-link ${active === 'about' ? 'active' : ''}">About Us</a>
            <a href="packages.html" class="nav-link ${active === 'packages' ? 'active' : ''}">Packages</a>
            <a href="gallery.html" class="nav-link ${active === 'gallery' ? 'active' : ''}">Gallery</a>
            <a href="appointment.html" class="nav-link ${active === 'appointment' ? 'active' : ''}">Appointment</a>
            <a href="contact.html" class="nav-link ${active === 'contact' ? 'active' : ''}">Contact</a>
          </nav>

          <div class="header-actions">
            <a href="appointment.html" class="btn btn-primary btn-sm">Book Appointment</a>
            <button id="menu-toggle" class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <!-- Mobile Drawer Backdrop & Drawer -->
      <div id="mobile-backdrop" class="mobile-nav-backdrop"></div>
      <aside id="mobile-drawer" class="mobile-nav-drawer" aria-label="Mobile Navigation Drawer">
        <div class="drawer-header">
          <div class="brand-text">
            <span class="brand-name">Signature Salon</span>
            <span class="brand-tagline">Bespoke Feminine Care</span>
          </div>
          <button id="drawer-close" class="drawer-close" aria-label="Close navigation menu">&times;</button>
        </div>
        <ul class="mobile-nav-list">
          <li><a href="index.html" class="mobile-nav-link ${active === 'home' ? 'active' : ''}">Home <span>&rarr;</span></a></li>
          <li><a href="services.html" class="mobile-nav-link ${active === 'services' ? 'active' : ''}">Services <span>&rarr;</span></a></li>
          <li><a href="about.html" class="mobile-nav-link ${active === 'about' ? 'active' : ''}">About Us <span>&rarr;</span></a></li>
          <li><a href="packages.html" class="mobile-nav-link ${active === 'packages' ? 'active' : ''}">Packages <span>&rarr;</span></a></li>
          <li><a href="gallery.html" class="mobile-nav-link ${active === 'gallery' ? 'active' : ''}">Gallery <span>&rarr;</span></a></li>
          <li><a href="appointment.html" class="mobile-nav-link ${active === 'appointment' ? 'active' : ''}">Appointment <span>&rarr;</span></a></li>
          <li><a href="contact.html" class="mobile-nav-link ${active === 'contact' ? 'active' : ''}">Contact <span>&rarr;</span></a></li>
        </ul>
        <a href="appointment.html" class="btn btn-primary btn-block mobile-drawer-btn">Book Appointment Now</a>
      </aside>
    `;

    this.initMobileEvents();
  }

  initMobileEvents() {
    const menuToggle = this.querySelector('#menu-toggle');
    const mobileDrawer = this.querySelector('#mobile-drawer');
    const mobileBackdrop = this.querySelector('#mobile-backdrop');
    const drawerClose = this.querySelector('#drawer-close');
    const mobileLinks = this.querySelectorAll('.mobile-nav-link, .mobile-drawer-btn');

    if (!menuToggle || !mobileDrawer || !mobileBackdrop) return;

    const setDrawerState = (open) => {
      menuToggle.classList.toggle('active', open);
      menuToggle.classList.toggle('open', open);
      mobileDrawer.classList.toggle('open', open);
      mobileBackdrop.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    menuToggle.addEventListener('click', () => {
      const isCurrentlyOpen = mobileDrawer.classList.contains('open');
      setDrawerState(!isCurrentlyOpen);
    });

    if (drawerClose) {
      drawerClose.addEventListener('click', () => setDrawerState(false));
    }

    mobileBackdrop.addEventListener('click', () => setDrawerState(false));

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => setDrawerState(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        setDrawerState(false);
      }
    });
  }
}

if (!customElements.get('site-header')) {
  customElements.define('site-header', SiteHeader);
}
