/**
 * ==========================================================================
 * Signature Beauty Salon - Footer Component
 * Web Component: <site-footer></site-footer>
 * ==========================================================================
 * Encapsulates the 4-column footer, social icons, dynamic copyright, and policy links.
 */

export class SiteFooter extends HTMLElement {
  connectedCallback() {
    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <!-- Col 1: About Salon -->
            <div class="footer-col">
              <a href="index.html" class="brand-logo" style="margin-bottom: 1.25rem;">
                <div class="brand-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </div>
                <div class="brand-text">
                  <span class="brand-name" style="color: var(--white);">Signature</span>
                  <span class="brand-tagline">Beauty Salon & Spa</span>
                </div>
              </a>
              <p class="footer-desc">
                A luxury women’s beauty sanctuary in East Nasirabad, Chattogram. Dedicated to clean beauty, expert artistry, and unhurried feminine self-care.
              </p>
              <div class="footer-social-links">
                <a href="https://instagram.com" class="social-icon" aria-label="Instagram" target="_blank" rel="noopener">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://facebook.com" class="social-icon" aria-label="Facebook" target="_blank" rel="noopener">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://pinterest.com" class="social-icon" aria-label="Pinterest" target="_blank" rel="noopener">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </a>
                <a href="https://tiktok.com" class="social-icon" aria-label="TikTok" target="_blank" rel="noopener">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
              </div>
            </div>

            <!-- Col 2: Navigation Links -->
            <div class="footer-col">
              <h4>Explore</h4>
              <ul class="footer-links-list">
                <li><a href="index.html" class="footer-link">Home</a></li>
                <li><a href="services.html" class="footer-link">Services</a></li>
                <li><a href="about.html" class="footer-link">About Our Story</a></li>
                <li><a href="packages.html" class="footer-link">Beauty Packages</a></li>
                <li><a href="gallery.html" class="footer-link">Visual Gallery</a></li>
                <li><a href="appointment.html" class="footer-link">Book Appointment</a></li>
                <li><a href="contact.html" class="footer-link">Contact & Directions</a></li>
              </ul>
            </div>

            <!-- Col 3: Signature Treatments -->
            <div class="footer-col">
              <h4>Treatments</h4>
              <ul class="footer-links-list">
                <li><a href="services.html" class="footer-link">Artisan Balayage</a></li>
                <li><a href="services.html" class="footer-link">HydraFacial Glow</a></li>
                <li><a href="services.html" class="footer-link">Bridal Makeup & Hair</a></li>
                <li><a href="services.html" class="footer-link">Japanese Gel Nails</a></li>
                <li><a href="services.html" class="footer-link">Hot Stone Ritual</a></li>
              </ul>
            </div>

            <!-- Col 4: Hours & Location -->
            <div class="footer-col">
              <h4>Salon Hours</h4>
              <div class="footer-hours-list">
                <div class="footer-hour-item"><span>Saturday – Thursday</span><span>9:00 AM – 8:00 PM</span></div>
                <div class="footer-hour-item"><span>Friday</span><span>10:00 AM – 7:00 PM</span></div>
              </div>
              <div style="margin-top: 1.25rem; font-size: 0.88rem; color: #D5C8C8; display: flex; flex-direction: column; gap: 0.4rem;">
                <p>📍 1324 CDA/Avenue(Beside dainik pubokon) East Nasirabad, Chattogram</p>
                <p>📞 <a href="tel:01969686133" style="color: inherit; text-decoration: none;">01969686133</a></p>
                <p>✉️ <a href="mailto:saimaislam.iiuc2017@gmail.com" style="color: inherit; text-decoration: none;">saimaislam.iiuc2017@gmail.com</a></p>
              </div>
            </div>
          </div>

          <!-- Bottom Copyright Strip -->
          <div class="footer-bottom">
            <div>&copy; <span class="current-year">${currentYear}</span> Signature Beauty Salon. All rights reserved.</div>
            <div class="footer-bottom-links">
              <a href="appointment.html">Cancellation Policy</a>
              <a href="contact.html">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

if (!customElements.get("site-footer")) {
  customElements.define("site-footer", SiteFooter);
}
