# Signature Beauty Salon & Spa

A complete, beautiful, and fully responsive multi-page website for **Signature Beauty Salon**, a premier luxury women's beauty salon and spa sanctuary in East Nasirabad, Chattogram.

Built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript** without any external frameworks (no React, Vue, Angular, Bootstrap, or Tailwind CSS). Designed and implemented as a high-distinction, university-level frontend engineering project.

---

## 🌸 Live Pages & Architecture

The application consists of 7 interconnected, standalone HTML pages sharing a unified design system and centralized JavaScript module:

1. **Home (`index.html`)**
   - Elegant hero section with CTA, ratings badge, and responsive visual layout
   - Quick statistics counter highlighting 10+ years of craft, 15k+ happy guests, and master artists
   - Featured services showcase with direct links to booking
   - "Why Choose Us" core philosophy breakdown (Organic formulas, certified masters, medical sanitation, unhurried time)
   - Popular packages preview with featured discount pricing
   - Limited-time promotional banner with countdown timer & discount code
   - Verified guest testimonials with star ratings
   - Interactive FAQ accordion
   - Comprehensive footer with hours, links, and copyright

2. **Services (`services.html`)**
   - 18 meticulously detailed services across 6 distinct categories: Hair Care, Facial & Skincare, Makeup, Nail Care, Spa & Relaxation, and Bridal Services
   - Instant client-side category filtering using Vanilla JavaScript data attributes (`data-category`)
   - Service cards featuring photography, service description, exact pricing, duration, and direct pre-selected "Book Now" links

3. **About Us (`about.html`)**
   - The founding story of Signature Salon (Elena Vance, 2014)
   - Formal Mission & Vision statements
   - Salon facilities tour: The Botanical Wash Lounge, Private Esthetic Suites, Sunlit Nail Bar, and VIP Bridal Lounge
   - Professional team member profiles with bios, roles, and specialized credentials

4. **Packages (`packages.html`)**
   - 6 curated bundled treatment packages offering up to 25% savings:
     - Glow Package
     - Bridal Glow Package (*Most Popular*)
     - Self-Care Retreat
     - Hair Care Package
     - Complete Makeover
     - Royal Spa Retreat
   - Feature checklists with checkmark bullets and included perks
   - Custom group and bridal party private sanctuary inquiry banner

5. **Gallery (`gallery.html`)**
   - 16 high-resolution portfolio photographs
   - Category filtering (`All | Hair | Makeup | Nails | Facial | Salon`)
   - Vanilla JavaScript lightbox modal with keyboard navigation (`Escape` to close), image captions, and smooth backdrop animation

6. **Appointment (`appointment.html`)**
   - Comprehensive reservation form with client name, phone, email, specialist selector, service/package dropdown with organized `<optgroup>`s, date picker, time window selector, and notes
   - URL query parameter detection: automatically pre-selects treatments from `?service=` or `?package=` links across the site
   - Strict client-side form validation (email format, 10-digit phone verification, required inputs) with clear error highlights
   - Promo code applicator with real-time feedback (e.g., code `SIGNATUREGLOW` for 20% discount)
   - Elegant confirmation modal with dynamic reference code and complete appointment summary upon submission
   - Data payload structured as a JSON-ready JavaScript object logged to console for future backend API integration
   - Salon sanctuary policies & cancellation guidelines

7. **Contact (`contact.html`)**
   - Interactive inquiry form with subject categorization and input validation
   - Floating toast notification on message submission
   - Complete contact directory with direct phone and email links (Phone: 0196968133, Email: saimaislam.iiuc2017@gmail.com, Address: 1324 CDA/Avenue East Nasirabad, Chattogram)
   - Transit & landmark guidance
   - Social media directory (Instagram, Facebook, Pinterest, TikTok)

---

## 🎨 Design System & Aesthetics

The design follows a bespoke feminine luxury aesthetic engineered specifically for high-end wellness and beauty:

- **Color Palette**:
  - `--ivory: #FFF9F5` (Warm canvas background)
  - `--rose: #D98C8C` (Signature feminine rose accent)
  - `--rose-dark: #B26B6B` (Deep rose for high-contrast text & active buttons)
  - `--rose-light: #F9EBEA` (Delicate soft rose tint for chips & banners)
  - `--dark: #352B2B` (Soft charcoal espresso for body text; avoids harsh `#000`)
  - `--dark-light: #5A4B4B` (Secondary muted body tone)
  - `--nude: #EAD8D0` (Subtle divider and border neutral)
  - `--white: #FFFFFF` (Card surfaces & elevated containers)

- **Typography**:
  - **Headings & Display**: *Playfair Display* (Serif) — exudes editorial sophistication and timeless elegance
  - **Body & Controls**: *Plus Jakarta Sans* (Sans-serif) — crisp, modern, high legibility across all viewport sizes

- **Layout Principles**:
  - CSS Grid & Flexbox layouts with mathematically calculated padding and border-radii
  - Responsive breakpoints (`@media (max-width: 992px)`, `@media (max-width: 768px)`, `@media (max-width: 480px)`)
  - Touch-friendly tap targets (minimum 44px)
  - Zero framework dependencies

---

## ⚙️ JavaScript Features (Vanilla JS)

All interactions are implemented in `/js/script.js`:
- **Navigation & Mobile Drawer**: Hamburger menu toggle with aria attributes, body scroll lock, and touch-friendly outside-click backdrop closing.
- **Category Filter Engines**: Reusable filtering for both `/services.html` and `/gallery.html` using `dataset.category` and smooth fade transitions.
- **Accessible FAQ Accordion**: Keyboard-accessible accordion with ARIA `aria-expanded` toggle and smooth max-height transitions.
- **Lightbox Modal**: Dynamic image zoom, title extraction, and ESC key listener.
- **URL Parameter Sync**: Reads `window.location.search` to pre-select services or packages in the booking form.
- **Form Validation & Modals**: Comprehensive regex checks for email and phone numbers, inline error message rendering, confirmation modal generator, and toast notifications.
- **Promo Code Engine**: Validates promo codes and updates discount text in real time.
- **Back-to-Top Button**: Smooth window scrolling with scroll position threshold listener.

---

## 🚀 Running the Project

To preview or run the site locally:

```bash
# Install dependencies (Vite dev server)
npm install

# Start development server on port 3000
npm run dev

# Build production static assets
npm run build
```

Production output will be generated inside `/dist/` as pure static HTML, CSS, and JS files ready for deployment on any static host (GitHub Pages, Netlify, Cloud Run, Vercel, or Apache/Nginx).
