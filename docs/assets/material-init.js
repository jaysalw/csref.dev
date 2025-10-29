// Ensure Material theme and icon fonts are properly loaded
(function () {
  // Load both Material Symbols and Material Icons fonts for icon support
  function ensureIconFonts() {
    // Material Symbols font (used by newer Material designs)
    if (!document.querySelector('link[href*="Material+Symbols"]')) {
      var symbolsLink = document.createElement('link');
      symbolsLink.rel = 'stylesheet';
      symbolsLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
      document.head.appendChild(symbolsLink);
    }
    
    // Material Icons font (legacy, but still used by Material theme)
    if (!document.querySelector('link[href*="Material+Icons"]')) {
      var iconsLink = document.createElement('link');
      iconsLink.rel = 'stylesheet';
      iconsLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      document.head.appendChild(iconsLink);
    }
  }

  function initMaterial() {
    ensureIconFonts();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMaterial);
  } else {
    initMaterial();
  }

  // Re-initialize on SPA navigation
  var main = document.querySelector('main');
  if (main) {
    new MutationObserver(ensureIconFonts).observe(main, { childList: true, subtree: true });
  }
})();
