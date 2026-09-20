/**
 * ==========================================================================
 * Signature Beauty Salon - Environment Safeguards & Polyfills
 * ==========================================================================
 * Ensures window.fetch has a defined getter and setter to prevent
 * runtime TypeError exceptions in strict-mode sandboxed iframe environments.
 */
(function() {
  try {
    var g = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : self);
    if (!g) return;
    var _f = (typeof g.fetch === 'function') ? g.fetch.bind(g) : g.fetch;
    var _c = _f;
    try {
      Object.defineProperty(g, 'fetch', {
        get: function() { return _c; },
        set: function(v) { _c = v; },
        configurable: true,
        enumerable: true
      });
    } catch (_) {}
    try {
      if (g.Window && g.Window.prototype) {
        Object.defineProperty(g.Window.prototype, 'fetch', {
          get: function() { return _c; },
          set: function(v) { _c = v; },
          configurable: true,
          enumerable: true
        });
      }
    } catch (_) {}
  } catch (_) {}
})();
