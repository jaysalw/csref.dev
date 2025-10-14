document$.subscribe(() => {
  const isDark = document.documentElement.getAttribute('data-md-color-scheme') === 'slate'
              || document.body.classList.contains('dark');
  mermaid.initialize({
    startOnLoad: true,
    theme: isDark ? 'dark' : 'default'
  });
  // Re-render diagrams in case of client-side nav
  mermaid.run();
});
