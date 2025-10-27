/* docs/assets/prefers-color-scheme.js
   Fallback for systems where the Material theme doesn't fully follow prefers-color-scheme
   - Applies 'slate' (dark) or 'default' (light) to the html attribute `data-md-color-scheme`
   - Persists manual choice to localStorage
   - Listens for system preference changes (when no manual choice saved)
   - Hooks clicks on common theme-toggle elements and saves the user's choice
*/
(function () {
  const STORAGE_KEY = 'csref.theme';
  const DARK = 'slate';
  const LIGHT = 'default';
  const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(name) {
    try {
      document.documentElement.setAttribute('data-md-color-scheme', name);
    } catch (e) {
      // silent
    }
  }

  function systemPreferred() {
    return mql && mql.matches ? DARK : LIGHT;
  }

  function onSystemChange(e) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? DARK : LIGHT);
    }
  }

  function toggleThemeAndSave() {
    const current = document.documentElement.getAttribute('data-md-color-scheme');
    const nowDark = current === DARK;
    const next = nowDark ? LIGHT : DARK;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === DARK || saved === LIGHT) {
      applyTheme(saved);
    } else if (mql) {
      applyTheme(systemPreferred());
    }

    // watch for system changes (only when user hasn't set a preference)
    if (mql && (typeof mql.addEventListener === 'function')) {
      mql.addEventListener('change', onSystemChange);
    } else if (mql && (typeof mql.addListener === 'function')) {
      mql.addListener(onSystemChange);
    }

    // If the page includes a theme toggle button from Material, hook clicks and store preference.
    // Match common selectors used by the theme or custom toggles.
    document.addEventListener('click', function (ev) {
      const el = ev.target.closest && ev.target.closest('.md-toggle, [data-md-toggle-theme], [data-md-toggle]');
      if (!el) return;
      // small debounce: schedule toggle after DOM changes from the theme
      setTimeout(toggleThemeAndSave, 60);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
