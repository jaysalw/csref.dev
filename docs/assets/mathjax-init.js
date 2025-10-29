(function () {
  function typeset() {
    if (!window.MathJax) {
      console.warn('MathJax not loaded yet');
      return;
    }
    
    try {
      if (typeof MathJax.typesetPromise === 'function') {
        MathJax.typesetPromise().catch(function (e) { 
          console.warn('MathJax typeset error:', e);
        });
      } 
      else if (typeof MathJax.typeset === 'function') {
        MathJax.typeset();
      }
    } catch (e) {
      console.warn('MathJax error:', e);
    }
  }

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

  var main = document.querySelector('main');
  if (main) {
    new MutationObserver(function() {
      scheduleTypeset(100);
    }).observe(main, { childList: true, subtree: true });
  }
})();
