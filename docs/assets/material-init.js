// Ensure Material theme and icon fonts are properly loaded
(function () {
  // Load Material Symbols font for icons if not already present
  function ensureIconFont() {
    var fontLink = document.querySelector('link[href*="fonts.googleapis.com"][href*="Material+Symbols"]');
    if (!fontLink) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0';
      document.head.appendChild(link);
    }
  }

  // Material theme uses window.md object for component management
  function initMaterial() {
    ensureIconFont();
    
    // If Material's JS has loaded, any components should auto-initialize
    // This is mainly a safety net for SPA navigation
    if (window.md) {
      try {
        // Material theme automatically handles component initialization
        // We don't need to explicitly call anything
      } catch (e) {
        // silent
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMaterial);
  } else {
    initMaterial();
  }

  // Re-initialize on SPA navigation (Material's navigation.instant feature)
  var main = document.querySelector('main');
  if (main) {
    new MutationObserver(function () {
      ensureIconFont();
    }).observe(main, { childList: true, subtree: true });
  }
})();
