/**
 * ==========================================================================
 * Signature Beauty Salon - Appointment Form Component
 * Pure Vanilla JavaScript ES Module
 * ==========================================================================
 * Handles booking form validation, URL parameter preselection,
 * promo code verification, and receipt modal rendering.
 */

export class AppointmentForm {
  constructor(formId = 'appointment-form') {
    this.form = document.getElementById(formId);
    this.modal = document.getElementById('booking-modal');
    this.modalCloseBtn = document.getElementById('modal-close-btn');

    if (this.form) {
      this.init();
    }
  }

  init() {
    this.handleUrlPreselection();
    this.setMinBookingDate();
    this.handlePromoCode();
    this.bindFormSubmission();
    this.bindModalClose();
  }

  /**
   * Pre-selects service/package from query parameter (e.g. ?service=... or ?package=...)
   */
  handleUrlPreselection() {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    const packageParam = params.get('package');
    const serviceSelect = this.form.querySelector('#service-select');

    if (!serviceSelect) return;

    const targetValue = serviceParam || packageParam;
    if (targetValue) {
      // Find option that contains targetValue
      for (let i = 0; i < serviceSelect.options.length; i++) {
        const option = serviceSelect.options[i];
        if (option.value.toLowerCase().includes(targetValue.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  /**
   * Disables dates in the past
   */
  setMinBookingDate() {
    const dateInput = this.form.querySelector('#appointment-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  }

  /**
   * Promo code verification
   */
  handlePromoCode() {
    const promoInput = this.form.querySelector('#promo-code');
    const promoBtn = this.form.querySelector('#apply-promo-btn');
    const promoMsg = this.form.querySelector('#promo-msg');

    if (!promoInput || !promoBtn || !promoMsg) return;

    promoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) {
        promoMsg.textContent = 'Please enter a voucher or promo code.';
        promoMsg.style.color = 'var(--error)';
        return;
      }

      if (code === 'SIGNATUREGLOW' || code === 'SIGNATURE' || code === 'LUNAGLOW') {
        promoMsg.textContent = '✓ 20% First Visit Discount Applied!';
        promoMsg.style.color = 'var(--success)';
      } else {
        promoMsg.textContent = 'Invalid promo code. Use SIGNATUREGLOW for 20% off.';
        promoMsg.style.color = 'var(--error)';
      }
    });
  }

  /**
   * Form validation and modal display
   */
  bindFormSubmission() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = this.form.querySelector('#client-name');
      const phoneInput = this.form.querySelector('#client-phone');
      const emailInput = this.form.querySelector('#client-email');
      const serviceInput = this.form.querySelector('#service-select');
      const dateInput = this.form.querySelector('#appointment-date');
      const timeInput = this.form.querySelector('#appointment-time');
      const specialistInput = this.form.querySelector('#specialist-select');
      const notesInput = this.form.querySelector('#client-notes');
      const promoInput = this.form.querySelector('#promo-code');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        this.setError(nameInput, true);
        isValid = false;
      } else {
        this.setError(nameInput, false);
      }

      // Validate Phone (at least 10 digits)
      const phoneDigits = phoneInput.value.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        this.setError(phoneInput, true);
        isValid = false;
      } else {
        this.setError(phoneInput, false);
      }

      // Validate Email (standard regex)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        this.setError(emailInput, true);
        isValid = false;
      } else {
        this.setError(emailInput, false);
      }

      // Validate Service
      if (!serviceInput.value) {
        this.setError(serviceInput, true);
        isValid = false;
      } else {
        this.setError(serviceInput, false);
      }

      // Validate Date
      if (!dateInput.value) {
        this.setError(dateInput, true);
        isValid = false;
      } else {
        this.setError(dateInput, false);
      }

      // Validate Time
      if (!timeInput.value) {
        this.setError(timeInput, true);
        isValid = false;
      } else {
        this.setError(timeInput, false);
      }

      if (!isValid) {
        const firstError = this.form.querySelector('.is-invalid');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Generate Reference Code
      const refCode = 'SIGNATURE-' + Math.floor(100000 + Math.random() * 900000);

      const reservationPayload = {
        referenceCode: refCode,
        clientName: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        serviceOrPackage: serviceInput.value,
        specialist: specialistInput ? specialistInput.value : 'Any Master Artist',
        date: dateInput.value,
        time: timeInput.value,
        notes: notesInput ? notesInput.value.trim() : '',
        promoCode: promoInput ? promoInput.value.trim().toUpperCase() : '',
        timestamp: new Date().toISOString()
      };

      console.info('✨ [Signature Salon Backend Ready] Appointment Payload:', reservationPayload);

      // Render Modal Summary
      this.showConfirmationModal(reservationPayload);

      // Reset form
      this.form.reset();
      this.setMinBookingDate();
      const promoMsg = this.form.querySelector('#promo-msg');
      if (promoMsg) promoMsg.textContent = '';
    });
  }

  setError(element, hasError) {
    element.classList.toggle('is-invalid', hasError);
    const errorMsg = element.parentNode.querySelector('.form-error');
    if (errorMsg) {
      errorMsg.style.display = hasError ? 'block' : 'none';
    }
  }

  showConfirmationModal(data) {
    if (!this.modal) return;

    const modalName = this.modal.querySelector('#modal-name');
    const modalSummary = this.modal.querySelector('#modal-summary');

    if (modalName) modalName.textContent = data.clientName;
    if (modalSummary) {
      modalSummary.innerHTML = `
        <div class="modal-detail-row">
          <span class="detail-label">Confirmation Code:</span>
          <span class="detail-value" style="color: var(--rose-dark); font-weight: 700;">${data.referenceCode}</span>
        </div>
        <div class="modal-detail-row">
          <span class="detail-label">Selected Ritual:</span>
          <span class="detail-value">${data.serviceOrPackage}</span>
        </div>
        <div class="modal-detail-row">
          <span class="detail-label">Master Specialist:</span>
          <span class="detail-value">${data.specialist}</span>
        </div>
        <div class="modal-detail-row">
          <span class="detail-label">Date & Time:</span>
          <span class="detail-value">${data.date} at ${data.time}</span>
        </div>
        <div class="modal-detail-row">
          <span class="detail-label">Contact Phone:</span>
          <span class="detail-value">${data.phone}</span>
        </div>
      `;
    }

    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  bindModalClose() {
    if (!this.modal) return;

    const closeModal = () => {
      this.modal.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', closeModal);
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('open')) {
        closeModal();
      }
    });
  }
}
