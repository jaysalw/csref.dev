(function () {
  // Simple Mermaid init for theme changes
  // (mermaid2 plugin handles diagram rendering at build-time)
  
  function currentTheme() {
    return document.documentElement.getAttribute('data-md-color-scheme') === 'slate'
      ? 'dark'
      : 'default';
  }

  function initTheme() {
    if (!window.mermaid) return;
    try {
      // Set theme and reset startOnLoad to prevent double-rendering
      mermaid.initialize({ startOnLoad: false, theme: currentTheme() });
    } catch (e) {
      // silent
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Re-run when theme toggles
  new MutationObserver(initTheme).observe(document.documentElement, { 
    attributes: true, 
    attributeFilter: ['data-md-color-scheme'] 
  });
})();