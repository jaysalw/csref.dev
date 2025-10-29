(function () {
  // Re-render mermaid diagrams when theme changes (for mermaid2 plugin-generated SVGs)
  
  function currentTheme() {
    return document.documentElement.getAttribute('data-md-color-scheme') === 'slate'
      ? 'dark'
      : 'default';
  }

  function rerenderMermaid() {
    if (!window.mermaid) return;
    try {
      // Set theme and reset startOnLoad to prevent double-rendering
      mermaid.initialize({ startOnLoad: false, theme: currentTheme() });
      // The mermaid2 plugin generates static SVGs; this just ensures theme is correct
    } catch (e) {
      console.warn('Mermaid theme update error:', e);
    }
  }

  // Re-run mermaid config when theme toggles to update diagram colors
  new MutationObserver(function () {
    rerenderMermaid();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-md-color-scheme'] });
})();