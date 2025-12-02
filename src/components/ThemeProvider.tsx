import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always start with 'light' to match server-side rendering
  // This prevents hydration mismatch
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // After hydration, sync state with the actual DOM class (set by ThemeScript)
    const isDark = document.documentElement.classList.contains('dark')
    const currentTheme = isDark ? 'dark' : 'light'
    console.log('[ThemeProvider] Mount sync - DOM has dark class:', isDark, 'current state:', theme)
    if (currentTheme !== theme) {
      console.log('[ThemeProvider] Syncing state to match DOM:', currentTheme)
      setTheme(currentTheme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run once on mount

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    console.log('[ThemeProvider] Toggling theme from', theme, 'to', newTheme)
    setTheme(newTheme)
    localStorage.setItem('darkMode', String(newTheme === 'dark'))
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
      console.log('[ThemeProvider] Added dark class to html')
    } else {
      document.documentElement.classList.remove('dark')
      console.log('[ThemeProvider] Removed dark class from html')
    }
    
    // Verify the change
    setTimeout(() => {
      const hasDark = document.documentElement.classList.contains('dark')
      console.log('[ThemeProvider] Verification - html has dark class:', hasDark)
    }, 0)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
