(function () {
  // Robust Mermaid initializer for client-side rendering
  // - Converts code fences (```mermaid) into div.mermaid
  // - Initializes mermaid, handles SPA-style navigation and theme toggles

  function currentTheme() {
    return document.documentElement.getAttribute('data-md-color-scheme') === 'slate'
      ? 'dark'
      : 'default';
  }

  function convertCodeBlocks() {
    // Find code blocks that indicate mermaid (common class names)
    var selectors = [
      'pre > code.language-mermaid',
      'pre > code.lang-mermaid',
      'pre > code[data-lang="mermaid"]'
    ];
    var nodes = document.querySelectorAll(selectors.join(','));
    nodes.forEach(function (code) {
      // Skip if already converted (e.g., plugin ran)
      if (code.closest('.mermaid') || code.classList.contains('mermaid-rendered')) return;

      var text = code.textContent || code.innerText || '';
      text = text.replace(/\r\n/g, '\n');

      var container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = text.trim();

      var pre = code.parentElement;
      // Replace the <pre> with our mermaid container
      if (pre && pre.parentNode) {
        pre.parentNode.replaceChild(container, pre);
      }
    });
  }

  function initMermaid() {
    if (!window.mermaid) return;

    try {
      mermaid.initialize({ startOnLoad: false, theme: currentTheme() });
      // Convert any code fences into mermaid containers before init
      convertCodeBlocks();
      // Initialize all mermaid diagrams found on the page
      var els = document.querySelectorAll('.mermaid');
      if (els.length) {
        // mermaid.init accepts a configuration first arg in older versions; passing undefined is safe
        if (typeof mermaid.init === 'function') {
          mermaid.init(undefined, els);
        } else if (typeof mermaid.run === 'function') {
          // fallback for other versions
          try { mermaid.run(); } catch (e) { /* ignore */ }
        }
      }
    } catch (e) {
      // Defensive: don't let mermaid errors break the page
      console.warn('Mermaid init error:', e);
    }
  }

  function init() {
    convertCodeBlocks();
    initMermaid();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-run when main content changes (Material theme SPA navigation)
  var main = document.querySelector('main');
  if (main) {
    new MutationObserver(function () {
      init();
    }).observe(main, { childList: true, subtree: true });
  }

  // Re-run mermaid when theme toggles
  new MutationObserver(function () {
    initMermaid();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-md-color-scheme'] });
})();