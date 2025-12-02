import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Link } from '@tanstack/react-router'
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine } from '@remixicon/react'
import { useState } from 'react'

import appCss from '../index.css?url'
import { ThemeProvider, useTheme } from '../components/ThemeProvider'
import { ThemeScript } from '../components/ThemeScript'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        title: 'Adhitya Giva Muhammad - Engineering Manager & Backend Specialist',
      },
      {
        name: 'description',
        content: 'Experienced Engineering Leader with 9+ years in software development. Head of Application and Development at PT Tempo Inti Media Tbk. Expertise in GoLang, AWS, team management, and scalable architecture.',
      },
      {
        name: 'keywords',
        content: 'Adhitya Giva Muhammad, Engineering Manager, Backend Developer, GoLang, AWS, Software Engineering, Team Leadership, Jakarta, Indonesia',
      },
      {
        name: 'author',
        content: 'Adhitya Giva Muhammad',
      },
      // Open Graph
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://adhityagiva.com/',
      },
      {
        property: 'og:title',
        content: 'Adhitya Giva Muhammad - Engineering Manager & Backend Specialist',
      },
      {
        property: 'og:description',
        content: 'Experienced Engineering Leader with 9+ years in software development. Expertise in GoLang, AWS, and team management.',
      },
      {
        property: 'og:image',
        content: 'https://adhityagiva.com/og-image.jpg',
      },
      // Twitter
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://adhityagiva.com/',
      },
      {
        property: 'twitter:title',
        content: 'Adhitya Giva Muhammad - Engineering Manager & Backend Specialist',
      },
      {
        property: 'twitter:description',
        content: 'Experienced Engineering Leader with 9+ years in software development. Expertise in GoLang, AWS, and team management.',
      },
      {
        property: 'twitter:image',
        content: 'https://adhityagiva.com/og-image.jpg',
      },
      // Additional
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'language',
        content: 'English',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'canonical',
        href: 'https://adhityagiva.com/',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/vite.svg',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <RootComponent>{children}</RootComponent>
          {/* <ThemeDebug /> */}
        </ThemeProvider>
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Life Logs', path: '/life-logs' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold font-display text-primary-600 dark:text-primary-400">
              ADHIVA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  activeProps={{
                    className: "text-primary-600 dark:text-primary-400 font-semibold"
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  activeProps={{
                    className: "text-primary-600 dark:text-primary-400 font-semibold"
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2">© {new Date().getFullYear()} Adhitya Giva Muhammad. All rights reserved.</p>
            <p className="text-sm">Built with React, TypeScript, TanStack Start & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
