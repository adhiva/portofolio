import { lazy } from 'react'

export interface LifeLogMeta {
  title: string
  excerpt: string
  date: string
  category: 'tech' | 'career' | 'personal' | 'thoughts'
  tags: string[]
  readTime: number
}

export interface LifeLog {
  slug: string
  meta: LifeLogMeta
  Component: React.LazyExoticComponent<React.ComponentType>
}

export const lifeLogs: LifeLog[] = [
  {
    slug: 'journey-to-engineering-leadership',
    meta: {
      title: 'My Journey to Engineering Leadership',
      excerpt: 'Reflecting on the path from junior developer to Head of Application and Development, and the lessons learned along the way.',
      date: '2024-11-15',
      category: 'career',
      tags: ['leadership', 'career growth', 'engineering'],
      readTime: 5
    },
    Component: lazy(() => import('../content/life-logs/journey-to-engineering-leadership.mdx'))
  },
  {
    slug: 'why-golang-backend',
    meta: {
      title: 'Why I Chose GoLang for Backend Development',
      excerpt: 'Exploring the reasons behind choosing Go as my primary backend language and how it has shaped my approach to building scalable systems.',
      date: '2024-10-20',
      category: 'tech',
      tags: ['golang', 'backend', 'programming'],
      readTime: 4
    },
    Component: lazy(() => import('../content/life-logs/why-golang-backend.mdx'))
  },
  {
    slug: 'building-teams-remote-era',
    meta: {
      title: 'Building High-Performing Teams in the Remote Era',
      excerpt: 'Strategies and insights on managing and growing engineering teams in a hybrid/remote work environment.',
      date: '2024-09-10',
      category: 'career',
      tags: ['leadership', 'remote work', 'team management'],
      readTime: 6
    },
    Component: lazy(() => import('../content/life-logs/building-teams-remote-era.mdx'))
  }
]

export const lifeLogCategories = ['all', 'tech', 'career', 'personal', 'thoughts'] as const
export type LifeLogCategory = typeof lifeLogCategories[number]

export function getLifeLogBySlug(slug: string): LifeLog | undefined {
  return lifeLogs.find(log => log.slug === slug)
}

export function getLifeLogsByCategory(category: LifeLogCategory): LifeLog[] {
  if (category === 'all') return lifeLogs
  return lifeLogs.filter(log => log.meta.category === category)
}
