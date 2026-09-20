/**
 * ==========================================================================
 * Signature Beauty Salon - Toast Notification Component
 * Pure Vanilla JavaScript ES Module
 * ==========================================================================
 * Renders floating non-blocking notification alerts with auto-dismiss.
 */

export class Toast {
  static show(message, type = 'success', duration = 4000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
      min-width: 300px;
      max-width: 420px;
      background: #FFFFFF;
      color: #352B2B;
      padding: 1rem 1.25rem;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(53, 43, 43, 0.15);
      border-left: 4px solid ${type === 'success' ? '#528F75' : '#D65A5A'};
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.95rem;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      pointer-events: auto;
    `;

    const iconSvg = type === 'success'
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#528F75" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D65A5A" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    toast.innerHTML = `
      <div style="flex-shrink: 0;">${iconSvg}</div>
      <div style="flex: 1; line-height: 1.4;">${message}</div>
      <button style="background: none; border: none; font-size: 1.25rem; cursor: pointer; color: #7E6F6F; padding: 0 0 0 0.5rem;" aria-label="Close notification">&times;</button>
    `;

    container.appendChild(toast);

    // Fade in
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    const removeToast = () => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    };

    const closeBtn = toast.querySelector('button');
    if (closeBtn) {
      closeBtn.addEventListener('click', removeToast);
    }

    setTimeout(removeToast, duration);
  }
}
