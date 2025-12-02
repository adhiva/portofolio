/**
 * ThemeScript component that injects a blocking script to set theme before React hydration
 * This prevents flash of wrong theme (FOUC) in SSR mode
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              console.log('[ThemeScript] Running before hydration');
              const darkMode = localStorage.getItem('darkMode') === 'true';
              console.log('[ThemeScript] localStorage darkMode:', localStorage.getItem('darkMode'), '-> darkMode:', darkMode);
              if (darkMode) {
                document.documentElement.classList.add('dark');
                console.log('[ThemeScript] Added dark class to html');
              } else {
                document.documentElement.classList.remove('dark');
                console.log('[ThemeScript] Removed dark class from html');
              }
              console.log('[ThemeScript] html classList:', document.documentElement.className);
            } catch (e) {
              console.error('[ThemeScript] Error setting theme:', e);
            }
          })();
        `,
      }}
    />
  )
}
