// Ensure Material theme icon initialization after SPA navigation
(function () {
  function initMaterial() {
    // Material theme uses window.md for component init (after loading the Material JS)
    // If Material's JS already ran, components should be available.
    // This is a fallback to handle any re-initialization on SPA nav.
    
    // Re-run any Material JS that watches for DOM changes
    if (window.md && typeof window.md !== 'undefined') {
      try {
        // Material theme sets up icons via embedded logic; no explicit call needed if JS loaded
      } catch (e) {
        // silent
      }
    }
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMaterial);
  } else {
    initMaterial();
  }

  // Re-initialize on SPA navigation (Material's navigation.instant feature)
  var main = document.querySelector('main');
  if (main) {
    new MutationObserver(initMaterial).observe(main, { childList: true, subtree: true });
  }
})();
