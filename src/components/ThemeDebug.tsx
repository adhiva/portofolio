import { useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'

export function ThemeDebug() {
  const { theme } = useTheme()
  const [domHasDark, setDomHasDark] = useState(false)
  const [localStorageValue, setLocalStorageValue] = useState<string | null>(null)
  const [htmlClasses, setHtmlClasses] = useState<string>('(loading...)')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const checkState = () => {
      setDomHasDark(document.documentElement.classList.contains('dark'))
      setLocalStorageValue(localStorage.getItem('darkMode'))
      setHtmlClasses(document.documentElement.className || '(empty)')
    }
    
    checkState()
    
    // Check every 500ms
    const interval = setInterval(checkState, 500)
    
    return () => clearInterval(interval)
  }, [])

  if (!isClient) {
    return null // Don't render on server
  }

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-500 rounded-lg p-4 text-sm font-mono z-[9999] shadow-lg max-w-sm">
      <div className="font-bold mb-2">Theme Debug Info:</div>
      <div>React state: <span className="font-bold">{theme}</span></div>
      <div>localStorage: <span className="font-bold">{localStorageValue ?? 'null'}</span></div>
      <div>DOM has 'dark': <span className="font-bold">{domHasDark ? 'YES' : 'NO'}</span></div>
      <div className="break-all">HTML classes: <span className="font-bold">{htmlClasses}</span></div>
      <div className="mt-2 p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
        This box should change color
      </div>
    </div>
  )
}
