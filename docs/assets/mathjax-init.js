(function () {
  function typeset() {
    if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
      MathJax.typesetPromise().catch(function () { /* ignore errors */ });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', typeset);
  } else {
    typeset();
  }

  // Re-run typesetting when main content changes (useful for Material's SPA navigation)
  var main = document.querySelector('main');
  if (main) {
    new MutationObserver(typeset).observe(main, { childList: true, subtree: true });
  }
})();
