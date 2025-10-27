/* docs/assets/prefers-color-scheme.js
   Improved fallback for systems where the Material theme doesn't fully follow prefers-color-scheme
   - Applies 'slate' (dark) or 'default' (light) to the html attribute `data-md-color-scheme`
   - Persists manual choice to localStorage
   - Listens for system preference changes (when no manual choice saved)
   - Hooks native theme-toggle clicks if present and saves the user's choice
   - Inserts a small icon-only fallback toggle next to the search bar when the native toggle is missing/hidden
*/
(function () {
  const STORAGE_KEY = 'csref.theme';
  const DARK = 'slate';
  const LIGHT = 'default';
  const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(name) {
    try {
      document.documentElement.setAttribute('data-md-color-scheme', name);
      // Update fallback icon if present
      const fbIcon = document.querySelector('.csref-theme-toggle__icon');
      if (fbIcon) fbIcon.textContent = name === DARK ? 'dark_mode' : 'light_mode';
    } catch (e) {
      // silent
    }
  }

  function systemPreferred() {
    return mql && mql.matches ? DARK : LIGHT;
  }

  function saveTheme(name) {
    try { localStorage.setItem(STORAGE_KEY, name); } catch (e) { /* ignore */ }
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
    saveTheme(next);
    applyTheme(next);
  }

  function isVisible(el) {
    if (!el) return false;
    const s = window.getComputedStyle(el);
    return s && s.display !== 'none' && s.visibility !== 'hidden' && el.offsetParent !== null;
  }

  function findNativeToggle() {
    return document.querySelector('[data-md-toggle-theme], .md-toggle, .md-theme-toggle, button[title*="theme"], button[aria-pressed][title*="theme"]');
  }

  function createFallbackToggle() {
    // create a small icon button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'csref-theme-toggle';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.style.background = 'transparent';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';

    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined csref-theme-toggle__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.style.fontSize = '20px';
    icon.textContent = document.documentElement.getAttribute('data-md-color-scheme') === DARK ? 'dark_mode' : 'light_mode';
    btn.appendChild(icon);

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleThemeAndSave();
    });

    // prefer to place next to the search bar
    const searchEl = document.querySelector('.md-search, .md-header__search, .md-search__form, .md-search__inner');
    if (searchEl && searchEl.parentNode) {
      // insert after the search element
      if (searchEl.nextSibling) searchEl.parentNode.insertBefore(btn, searchEl.nextSibling);
      else searchEl.parentNode.appendChild(btn);
    } else {
      const container = document.querySelector('.md-header__meta') || document.querySelector('.md-header');
      if (container) container.insertBefore(btn, container.firstChild);
    }

    return btn;
  }

  function attachToNativeToggle() {
    const t = findNativeToggle();
    if (t && isVisible(t)) {
      t.addEventListener('click', function () {
        setTimeout(function () {
          const scheme = document.documentElement.getAttribute('data-md-color-scheme');
          if (scheme === DARK || scheme === LIGHT) saveTheme(scheme);
        }, 60);
      });
      return true;
    }
    return false;
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === DARK || saved === LIGHT) {
      applyTheme(saved);
    } else if (mql) {
      applyTheme(systemPreferred());
    }

    // listen for system changes when user hasn't chosen
    if (mql && typeof mql.addEventListener === 'function') mql.addEventListener('change', onSystemChange);
    else if (mql && typeof mql.addListener === 'function') mql.addListener(onSystemChange);

    // try to attach to native toggle; if not present, create a fallback
    if (!attachToNativeToggle()) {
      const fb = createFallbackToggle();
      // observe DOM for native toggle appearing; remove fallback when native appears
      const obs = new MutationObserver(function () {
        if (attachToNativeToggle()) {
          try { fb.remove(); } catch (e) {}
          obs.disconnect();
        }
      });
      obs.observe(document.documentElement || document.body, { childList: true, subtree: true, attributes: true });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
