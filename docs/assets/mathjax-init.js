(function () {
  function typeset() {
    if (!window.MathJax) {
      console.warn('MathJax not loaded yet');
      return;
    }
    
    try {
      // Use typesetPromise if available (MathJax 3)
      if (typeof MathJax.typesetPromise === 'function') {
        MathJax.typesetPromise().catch(function (e) { 
          console.warn('MathJax typeset error:', e);
        });
      } 
      // Fallback for older versions
      else if (typeof MathJax.typeset === 'function') {
        MathJax.typeset();
      }
    } catch (e) {
      console.warn('MathJax error:', e);
    }
  }

  // Wait a bit for MathJax to fully load before calling typeset
  function scheduleTypeset(delay) {
    setTimeout(typeset, delay || 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      scheduleTypeset(100);
    });
  } else {
    scheduleTypeset(100);
  }

  // Re-run typesetting on SPA navigation (Material theme)
  var main = document.querySelector('main');
  if (main) {
    new MutationObserver(function() {
      scheduleTypeset(100);
    }).observe(main, { childList: true, subtree: true });
  }
})();
