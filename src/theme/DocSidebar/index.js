import React, {useEffect, useState} from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DocSidebar(props) {
  const [mounted, setMounted] = useState(false);
  const [level, setLevel] = useState(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;
    const p = window.location.pathname;
    if (p.includes('/docs/level-3/')) setLevel('level-3');
    else if (p.includes('/docs/level-4/')) setLevel('level-4');
    else setLevel(null);
  }, []);

  const modules = {
    'level-3': [
      {emoji: '📘', label: 'CS301', to: '/docs/level-3/cs301/'},
      {emoji: '📗', label: 'CS302', to: '/docs/level-3/cs302/'},
    ],
    'level-4': [
      {emoji: '🎓', label: 'CS401', to: '/docs/level-4/cs401/'},
    ],
  };

  return (
    <div>
      {mounted && level && (
        <div className={styles.selector}>
          <div className={styles.selectorHeader}>
            <span className={styles.headerIcon}>📚</span>
            <span className={styles.headerTitle}>{level === 'level-3' ? 'Level 3' : 'Level 4'}</span>
            <span className={styles.caret}>▾</span>
          </div>
          <div className={styles.selectorList}>
            {modules[level].map((m) => (
              <Link key={m.to} className={styles.selectorItem} to={m.to}>
                <span className={styles.emoji}>{m.emoji}</span>
                <span className={styles.itemLabel}>{m.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      <OriginalDocSidebar {...props} />
    </div>
  );
}
