import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { RiCalendarLine, RiTimeLine, RiFilterLine, RiBookOpenLine } from '@remixicon/react'
import { lifeLogs, lifeLogCategories, type LifeLogCategory } from '../data/lifeLogs'

export const Route = createFileRoute('/life-logs/')({
  component: LifeLogsPage,
})

function LifeLogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<LifeLogCategory>('all')

  const filteredLogs = selectedCategory === 'all'
    ? lifeLogs
    : lifeLogs.filter(log => log.meta.category === selectedCategory)

  const sortedLogs = [...filteredLogs].sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const categoryColors: Record<string, string> = {
    tech: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    career: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    personal: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    thoughts: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Life Logs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts, learnings, and reflections on technology and life
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <RiFilterLine className="mr-2 text-gray-600 dark:text-gray-400" size={20} />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {lifeLogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {sortedLogs.map((log) => (
            <article key={log.slug} className="card group hover:shadow-lg transition-shadow">
              <div className="flex flex-col">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${categoryColors[log.meta.category]}`}>
                    {log.meta.category}
                  </span>
                </div>

                {/* Title */}
                <Link
                  to="/life-logs/$slug"
                  params={{ slug: log.slug }}
                  className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {log.meta.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {log.meta.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <RiCalendarLine size={16} className="mr-1" />
                    {formatDate(log.meta.date)}
                  </span>
                  <span className="flex items-center">
                    <RiTimeLine size={16} className="mr-1" />
                    {log.meta.readTime} min read
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {log.meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  to="/life-logs/$slug"
                  params={{ slug: log.slug }}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  <RiBookOpenLine size={18} className="mr-2" />
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {sortedLogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
