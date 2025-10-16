(function () {
  function currentTheme() {
    return document.documentElement.getAttribute('data-md-color-scheme') === 'slate'
      ? 'dark'
      : 'default';
  }

  function init() {
    if (window.mermaid && typeof window.mermaid.initialize === 'function') {
      mermaid.initialize({ startOnLoad: true, theme: currentTheme() });
      try { mermaid.run(); } catch (e) { /* ignore */ }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-run mermaid when theme toggles
  new MutationObserver(init).observe(
    document.documentElement,
    { attributes: true, attributeFilter: ['data-md-color-scheme'] }
  );
})();