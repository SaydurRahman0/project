/**
 * ==========================================================================
 * Signature Beauty Salon - Contact Form Component
 * Pure Vanilla JavaScript ES Module
 * ==========================================================================
 * Validates inquiry inputs and displays floating toast notification feedback.
 */

import { Toast } from "./Toast.js";

export class ContactForm {
  constructor(formId = "contact-form") {
    this.form = document.getElementById(formId);
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = this.form.querySelector("#contact-name");
      const emailInput = this.form.querySelector("#contact-email");
      const phoneInput = this.form.querySelector("#contact-phone");
      const subjectInput = this.form.querySelector("#contact-subject");
      const messageInput = this.form.querySelector("#contact-message");

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        this.setError(nameInput, true);
        isValid = false;
      } else {
        this.setError(nameInput, false);
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        this.setError(emailInput, true);
        isValid = false;
      } else {
        this.setError(emailInput, false);
      }

      // Validate Subject
      if (!subjectInput.value) {
        this.setError(subjectInput, true);
        isValid = false;
      } else {
        this.setError(subjectInput, false);
      }

      // Validate Message (min 10 chars)
      if (messageInput.value.trim().length < 10) {
        this.setError(messageInput, true);
        isValid = false;
      } else {
        this.setError(messageInput, false);
      }

      if (!isValid) return;

      const inquiryPayload = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput ? phoneInput.value.trim() : "",
        subject: subjectInput.value,
        message: messageInput.value.trim(),
        submittedAt: new Date().toISOString(),
      };

      console.info(
        "💌 [Signature Salon Backend Ready] Contact Message:",
        inquiryPayload,
      );

      // Show Toast Notification
      Toast.show(
        `Thank you, ${inquiryPayload.name}! Your message has been received. Our concierge will respond within 2 hours.`,
        "success",
        5000,
      );

      // Reset form
      this.form.reset();
    });
  }

  setError(element, hasError) {
    element.classList.toggle("is-invalid", hasError);
    const errorMsg = element.parentNode.querySelector(".form-error");
    if (errorMsg) {
      errorMsg.style.display = hasError ? "block" : "none";
    }
  }
}
