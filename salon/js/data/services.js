/**
 * ==========================================================================
 * Signature Beauty Salon - Services Data Catalog
 * Pure Vanilla JavaScript ES Module
 * ==========================================================================
 * Centralized dataset of all 18 salon treatments and rituals.
 * Used for fallback rendering, dynamic filtering, and appointment linkages.
 */

export const FALLBACK_SERVICES = [
  {
    id: 'hair-artisan-balayage',
    title: 'Artisan Balayage & Gloss',
    category: 'hair',
    categoryLabel: 'Hair Care',
    description: 'Custom hand-painted highlights that mimic sun-dappled brilliance, finished with an organic Italian silk glaze for lasting shine and softness.',
    price: 185,
    priceDisplay: '$185',
    duration: '120 mins',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    bookingParam: 'Hair:+Artisan+Balayage+%26+Gloss'
  },
  {
    id: 'hair-precision-cut',
    title: 'Signature Precision Cut & Blowout',
    category: 'hair',
    categoryLabel: 'Hair Care',
    description: 'Bespoke scissor work structured to enhance your bone structure and natural movement, followed by a botanical scalp wash and velvet blowout.',
    price: 85,
    priceDisplay: '$85',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Hair:+Signature+Precision+Cut+%26+Blowout'
  },
  {
    id: 'hair-scalp-detox',
    title: 'Botanical Scalp Detox & Keratin Repair',
    category: 'hair',
    categoryLabel: 'Hair Care',
    description: 'Invigorating exfoliating scalp mask infused with rosemary and tea tree, paired with an amino-acid bonding treatment to heal compromised strands.',
    price: 110,
    priceDisplay: '$110',
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Hair:+Botanical+Scalp+Detox+%26+Keratin'
  },
  {
    id: 'facial-hydrafacial',
    title: 'HydraFacial Radiance Boost',
    category: 'facial',
    categoryLabel: 'Facial & Skincare',
    description: 'Patented vortex extraction removes impurities while flooding the dermal layers with antioxidant serums, peptides, and ultra-hydrating hyaluronic acid.',
    price: 140,
    priceDisplay: '$140',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    featured: true,
    bookingParam: 'Facial:+HydraFacial+Radiance+Boost'
  },
  {
    id: 'facial-gua-sha',
    title: 'Gua Sha & Lymphatic Sculpt',
    category: 'facial',
    categoryLabel: 'Facial & Skincare',
    description: 'Holistic facial massage utilizing chilled rose quartz crystals to flush stagnant lymphatic fluid, define cheekbones, and relieve jaw tension.',
    price: 115,
    priceDisplay: '$115',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1512290900672-1f417f7a7f45?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Facial:+Gua+Sha+%26+Lymphatic+Sculpt'
  },
  {
    id: 'facial-24k-gold',
    title: '24k Gold Collagen Anti-Aging Ritual',
    category: 'facial',
    categoryLabel: 'Facial & Skincare',
    description: 'Pure 24k gold leaf application combined with micro-current muscle toning and bio-active marine collagen for an instant luminous lift.',
    price: 165,
    priceDisplay: '$165',
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Facial:+24k+Gold+Collagen+Ritual'
  },
  {
    id: 'makeup-soft-dewy',
    title: 'Soft Dewy Daylight Glam',
    category: 'makeup',
    categoryLabel: 'Makeup',
    description: 'Fresh skin-tint complexion, featherweight brow grooming, delicate warm rose flush, and sheer tinted lip glaze for daytime brunches or meetings.',
    price: 75,
    priceDisplay: '$75',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Makeup:+Soft+Dewy+Daylight+Glam'
  },
  {
    id: 'makeup-red-carpet',
    title: 'Red Carpet Evening Glamour',
    category: 'makeup',
    categoryLabel: 'Makeup',
    description: 'Flawless long-wearing airbrush foundation, seductive smoked shadow or classic winged liner, custom individual lashes, and velvet lip sculpting.',
    price: 130,
    priceDisplay: '$130',
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Makeup:+Red+Carpet+Evening+Glamour'
  },
  {
    id: 'makeup-masterclass',
    title: '1-on-1 Makeup Artistry Masterclass',
    category: 'makeup',
    categoryLabel: 'Makeup',
    description: 'Sit down with senior artist Isabella Rossi to audit your personal makeup bag, learn application tailored to your face shape, and receive product recommendations.',
    price: 195,
    priceDisplay: '$195',
    duration: '90 mins',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Makeup:+1-on-1+Artistry+Masterclass'
  },
  {
    id: 'nails-japanese-gel',
    title: 'Japanese Gel Spa Manicure',
    category: 'nails',
    categoryLabel: 'Nail Care',
    description: 'Non-invasive e-file cuticle detailing, organic odorless Japanese leaf gel that promotes natural nail growth, and hot towel arm massage.',
    price: 65,
    priceDisplay: '$65',
    duration: '50 mins',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    featured: true,
    bookingParam: 'Nails:+Japanese+Gel+Spa+Manicure'
  },
  {
    id: 'nails-deluxe-pedicure',
    title: 'Deluxe Rose Petal Pedicure',
    category: 'nails',
    categoryLabel: 'Nail Care',
    description: 'Warm coconut milk and fresh rose foot soak, natural cane sugar scrub, callus smoothing, warm paraffin bootie wrap, and long-wear polish.',
    price: 80,
    priceDisplay: '$80',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Nails:+Deluxe+Rose+Petal+Pedicure'
  },
  {
    id: 'nails-chrome-art',
    title: 'Minimalist Chrome & Fine Line Art',
    category: 'nails',
    categoryLabel: 'Nail Care',
    description: 'Full manicure topped with glazed donut chrome powders, micro French tips, tortoiseshell accents, or hand-painted negative space geometry.',
    price: 95,
    priceDisplay: '$95',
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Nails:+Chrome+%26+Fine+Line+Art'
  },
  {
    id: 'spa-hot-stone',
    title: 'Aromatherapy Hot Stone Ritual',
    category: 'spa',
    categoryLabel: 'Spa & Relaxation',
    description: 'Smooth basalt volcanic stones paired with warm organic sweet almond, bergamot, and cedarwood oils to dissolve muscular tightness and induce deep calm.',
    price: 120,
    priceDisplay: '$120',
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    featured: true,
    bookingParam: 'Spa:+Aromatherapy+Hot+Stone+Ritual'
  },
  {
    id: 'spa-body-polish',
    title: 'Wild Lavender Full Body Polish',
    category: 'spa',
    categoryLabel: 'Spa & Relaxation',
    description: 'Gentle whole-body mineral sea salt exfoliation blended with French lavender flowers, followed by an application of whipped shea body butter.',
    price: 95,
    priceDisplay: '$95',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Spa:+Wild+Lavender+Body+Polish'
  },
  {
    id: 'spa-herbal-compress',
    title: 'Warm Herbal Compress Tension Relief',
    category: 'spa',
    categoryLabel: 'Spa & Relaxation',
    description: 'Steamed muslin poultices packed with organic turmeric, camphor, and lemongrass kneaded gently along spine and shoulder energy channels.',
    price: 130,
    priceDisplay: '$130',
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Spa:+Warm+Herbal+Compress+Relief'
  },
  {
    id: 'bridal-hair-couture',
    title: 'Bridal Hair Couture & Veil Styling',
    category: 'bridal',
    categoryLabel: 'Bridal Services',
    description: 'Intricate textured romantic chignons, Hollywood waves, or bohemian braided half-up styles engineered for all-day comfort and weather resilience.',
    price: 220,
    priceDisplay: '$220',
    duration: '90 mins',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Bridal:+Hair+Couture+%26+Veil+Styling'
  },
  {
    id: 'bridal-airbrush-makeup',
    title: 'Luminous Airbrush Bridal Makeup',
    category: 'bridal',
    categoryLabel: 'Bridal Services',
    description: 'High-definition waterproof airbrush foundation that reads flawlessly in 4K photography, luxury silk mink lashes, and a bespoke bridal touch-up kit.',
    price: 250,
    priceDisplay: '$250',
    duration: '90 mins',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Bridal:+Luminous+Airbrush+Makeup'
  },
  {
    id: 'bridal-bridesmaid-elegance',
    title: 'Bridesmaid Elegance Hair & Makeup',
    category: 'bridal',
    categoryLabel: 'Bridal Services',
    description: 'Harmonized styling for the bridal party. Soft textured waves or sleek updos paired with radiant natural glam to complement the bride’s aesthetic.',
    price: 160,
    priceDisplay: '$160',
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    featured: false,
    bookingParam: 'Bridal:+Bridesmaid+Elegance+Service'
  }
];

/**
 * Renders HTML markup for a single service card
 * @param {Object} service 
 * @returns {string}
 */
export function renderServiceCardHtml(service) {
  return `
    <article class="service-card" data-category="${service.category}">
      <div class="service-card-media">
        <img src="${service.image}" alt="${service.title}" loading="lazy">
        <span class="badge badge-rose service-card-category">${service.categoryLabel}</span>
      </div>
      <div class="service-card-body">
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.description}</p>
        <div class="service-card-footer">
          <div>
            <div class="service-meta-price">${service.priceDisplay}</div>
            <div class="service-meta-duration">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${service.duration}
            </div>
          </div>
          <a href="appointment.html?service=${service.bookingParam}" class="btn btn-outline-rose btn-sm">Book Now</a>
        </div>
      </div>
    </article>
  `.trim();
}
