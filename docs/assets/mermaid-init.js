(function () {
  // Client-side mermaid rendering (fast, no build-time processing)
  
  function currentTheme() {
    return document.documentElement.getAttribute('data-md-color-scheme') === 'slate'
      ? 'dark'
      : 'default';
  }

  function convertCodeBlocks() {
    // Find all code blocks with mermaid class/language
    var selectors = [
      'pre > code.language-mermaid',
      'pre > code.hljs.language-mermaid',
      'code.language-mermaid'
    ];
    
    document.querySelectorAll(selectors.join(', ')).forEach(function (code) {
      var pre = code.parentElement;
      
      // Skip if already converted
      if (pre && pre.classList && pre.classList.contains('mermaid-processed')) return;
      
      var text = (code.textContent || code.innerText || '').trim();
      if (!text) return;

      // Create mermaid container
      var container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = text;

      // Replace <pre> with container
      if (pre && pre.parentNode) {
        pre.classList.add('mermaid-processed');
        pre.parentNode.replaceChild(container, pre);
      }
    });
  }

  function initMermaid() {
    if (!window.mermaid) return;

    try {
      mermaid.initialize({ startOnLoad: false, theme: currentTheme() });
      convertCodeBlocks();
      
      // Render all .mermaid elements
      if (typeof mermaid.run === 'function') {
        mermaid.run().catch(function() { /* ignore */ });
      } else if (typeof mermaid.init === 'function') {
        var els = document.querySelectorAll('.mermaid');
        mermaid.init(undefined, els);
      }
    } catch (e) {
      console.warn('Mermaid error:', e);
    }
  }

  // Init on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }

  // Re-init on Material SPA navigation (content in <main> changes)
  var main = document.querySelector('main');
  if (main) {
    var observer = new MutationObserver(function() {
      setTimeout(initMermaid, 100);
    });
    observer.observe(main, { childList: true, subtree: true });
  }

  // Re-init when theme changes
  new MutationObserver(function() {
    // Re-initialize and re-render mermaid diagrams when the Material theme attribute changes
    try {
      initMermaid();
    } catch (e) {
      console.warn('Mermaid re-init failed:', e);
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-md-color-scheme'] });
})();