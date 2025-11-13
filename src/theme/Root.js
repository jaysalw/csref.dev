import React, {useEffect} from 'react';

export default function Root({children}) {
  useEffect(() => {
    // Wait for mermaid script to load on client
    function initMermaid() {
      if (typeof window === 'undefined' || !window.mermaid) return;
      try {
        window.mermaid.initialize({startOnLoad: false, theme: 'neutral'});
        // render all code blocks with language-mermaid
        const renderAll = () => {
          const blocks = document.querySelectorAll('code.language-mermaid');
          blocks.forEach((block, i) => {
            const pre = block.closest('pre');
            if (!pre) return;
            const container = document.createElement('div');
            container.className = 'mermaid';
            container.innerHTML = block.textContent || '';
            pre.parentNode.replaceChild(container, pre);
            try {
              window.mermaid.init(undefined, container);
            } catch (e) {
              // ignore individual render errors
              // eslint-disable-next-line no-console
              console.error('mermaid render error', e);
            }
          });
        };

        // Initial render
        renderAll();

        // Observe DOM for new mermaid code blocks (e.g., client-side navigation)
        const mo = new MutationObserver(() => renderAll());
        mo.observe(document.body, {childList: true, subtree: true});
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('mermaid init failed', e);
      }
    }

    if (typeof window !== 'undefined' && window.mermaid) {
      initMermaid();
    } else {
      // poll for mermaid script
      let attempts = 0;
      const id = setInterval(() => {
        attempts += 1;
        if (window.mermaid) {
          clearInterval(id);
          initMermaid();
        } else if (attempts > 50) {
          clearInterval(id);
        }
      }, 200);
    }
  }, []);

  return children;
}
