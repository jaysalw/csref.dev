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

  // Inline SVGs for sun and moon (kept small and self-contained)
  const SVG_SUN = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79L3.17 4.83l1.79 1.79 1.8-1.78zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.03 1.04l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM17 11v2h3v-2h-3zM12 6a6 6 0 100 12 6 6 0 000-12zm4.24 11.16l1.8 1.79 1.79-1.79-1.79-1.79-1.8 1.79zM11 23h2v-3h-2v3zM4.24 18.36l1.79 1.79 1.8-1.79-1.8-1.79-1.79 1.79z"/></svg>';
  const SVG_MOON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M9.37 5.51A7 7 0 0017 17a7 7 0 01-7.49-7.63 6.5 6.5 0 00-.14-3.86z"/></svg>';

  function applyTheme(name) {
    try {
      document.documentElement.setAttribute('data-md-color-scheme', name);
      // update fallback toggle UI if present
      const fb = document.querySelector('.csref-theme-toggle');
      if (fb) updateFallbackButton(fb, name);
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

  function saveTheme(name) {
    try {
      localStorage.setItem(STORAGE_KEY, name);
    } catch (e) {
      // ignore storage errors
    }
  }

  function toggleThemeAndSave() {
    const current = document.documentElement.getAttribute('data-md-color-scheme');
    const nowDark = current === DARK;
    const next = nowDark ? LIGHT : DARK;
    saveTheme(next);
    applyTheme(next);
  }

  function isVisible(el) {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    return style && style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null;
  }

  function findThemeToggle() {
    return document.querySelector('[data-md-toggle-theme], .md-toggle, .md-theme-toggle, button[aria-pressed][title*="theme"], button[title*="theme"]');
  }

  function createFallbackToggle() {
    // create a small button in the header meta area
    const container = document.querySelector('.md-header__meta') || document.querySelector('.md-header');
    if (!container || document.querySelector('.csref-theme-toggle')) return null;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'csref-theme-toggle';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.style.cssText = 'margin-left:0.6rem;padding:0.35rem 0.6rem;border-radius:6px;border:none;cursor:pointer;font-size:0.9rem;background:transparent;color:inherit;';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleThemeAndSave();
    });

    // Use inline SVG icons (sun / moon) to avoid external CDN dependencies
    const icon = document.createElement('span');
    icon.className = 'csref-theme-toggle__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = document.documentElement.getAttribute('data-md-color-scheme') === DARK ? SVG_MOON : SVG_SUN;
    btn.appendChild(icon);

    // Prefer placing next to the search bar if available
    // Try multiple selectors to handle different Material for MkDocs versions/configurations
    const searchEl = document.querySelector('.md-search, .md-header__search, .md-search__form, .md-search__inner');
    if (searchEl && searchEl.parentNode) {
      if (searchEl.nextSibling) searchEl.parentNode.insertBefore(btn, searchEl.nextSibling);
      else searchEl.parentNode.appendChild(btn);
    } else {
      // fallback: insert at start of header meta for visibility
      container.insertBefore(btn, container.firstChild);
    }
    // set initial state
    updateFallbackButton(btn, document.documentElement.getAttribute('data-md-color-scheme'));
    return btn;
  }

  function updateFallbackButton(btn, scheme) {
    if (!btn) return;
    const icon = btn.querySelector('.csref-theme-toggle__icon');
    if (scheme === DARK) {
      if (icon) icon.innerHTML = SVG_MOON;
      btn.style.background = 'rgba(255,255,255,0.04)';
    } else {
      if (icon) icon.innerHTML = SVG_SUN;
      btn.style.background = 'rgba(0,0,0,0.04)';
    }
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
    // Also create a fallback toggle if the theme toggle is not visible.
    function attachToThemeToggleOnce() {
      const t = findThemeToggle();
      if (t && isVisible(t)) {
        // ensure we capture clicks on the theme toggle to persist choice
        t.addEventListener('click', function () {
          // small delay to allow theme to update the DOM
          setTimeout(function () {
            const scheme = document.documentElement.getAttribute('data-md-color-scheme');
            if (scheme === DARK || scheme === LIGHT) saveTheme(scheme);
          }, 60);
        });
        // remove fallback if exists
        const fb = document.querySelector('.csref-theme-toggle');
        if (fb) fb.remove();
        return true;
      }
      return false;
    }

    // try immediate attachment; if not found, create fallback and observe
    if (!attachToThemeToggleOnce()) {
      createFallbackToggle();

      // observe DOM for the native toggle to appear or become visible, then remove fallback
      const obs = new MutationObserver(function () {
        if (attachToThemeToggleOnce()) {
          obs.disconnect();
        }
      });
      obs.observe(document.documentElement || document.body, { childList: true, subtree: true, attributes: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
