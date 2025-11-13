import React, {useEffect, useState} from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DocSidebar(props) {
  const [mounted, setMounted] = useState(false);
  const [level, setLevel] = useState(null);
  const [currentModule, setCurrentModule] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;
    const p = window.location.pathname;
    if (p.includes('/docs/level-3/')) {
      setLevel('level-3');
      if (p.includes('/cs301/')) setCurrentModule('CS301');
      else if (p.includes('/cs302/')) setCurrentModule('CS302');
    } else if (p.includes('/docs/level-4/')) {
      setLevel('level-4');
      if (p.includes('/cs401/')) setCurrentModule('CS401');
    } else {
      setLevel(null);
    }
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

  const getCurrentModuleData = () => {
    if (!level || !currentModule) return null;
    return modules[level].find(m => m.label === currentModule);
  };

  const currentModuleData = getCurrentModuleData();

  return (
    <div>
      {mounted && level && currentModuleData && (
        <div className={styles.selector}>
          <button 
            className={styles.selectorHeader}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={styles.emoji}>{currentModuleData.emoji}</span>
            <span className={styles.headerTitle}>{currentModuleData.label}</span>
            <span className={`${styles.caret} ${isOpen ? styles.caretOpen : ''}`}>▼</span>
          </button>
          {isOpen && (
            <div className={styles.selectorList}>
              {modules[level].map((m) => (
                <Link 
                  key={m.to} 
                  className={`${styles.selectorItem} ${m.label === currentModule ? styles.active : ''}`} 
                  to={m.to}
                >
                  <span className={styles.emoji}>{m.emoji}</span>
                  <span className={styles.itemLabel}>{m.label}</span>
                  {m.label === currentModule && <span className={styles.checkmark}>✓</span>}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
      <OriginalDocSidebar {...props} />
    </div>
  );
}
