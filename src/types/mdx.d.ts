declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const meta: {
    title: string
    excerpt: string
    date: string
    category: 'tech' | 'career' | 'personal' | 'thoughts'
    tags: string[]
    readTime: number
  }

  const MDXComponent: ComponentType
  export default MDXComponent
}
