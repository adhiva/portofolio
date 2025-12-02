import { createFileRoute, Link } from '@tanstack/react-router'
import { Suspense } from 'react'
import { RiArrowLeftLine, RiCalendarLine, RiTimeLine } from '@remixicon/react'
import { getLifeLogBySlug } from '../data/lifeLogs'

export const Route = createFileRoute('/life-logs/$slug')({
  component: LifeLogDetailPage,
})

function LifeLogDetailPage() {
  const { slug } = Route.useParams()
  const lifeLog = getLifeLogBySlug(slug)

  if (!lifeLog) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/life-logs"
            className="btn-primary inline-flex items-center"
          >
            <RiArrowLeftLine size={20} className="mr-2" />
            Back to Life Logs
          </Link>
        </div>
      </div>
    )
  }

  const { meta, Component } = lifeLog

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
        {/* Back Link */}
        <Link
          to="/life-logs"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <RiArrowLeftLine size={20} className="mr-2" />
          Back to Life Logs
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          {/* Category Badge */}
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${categoryColors[meta.category]}`}>
              {meta.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {meta.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center">
              <RiCalendarLine size={16} className="mr-1" />
              {formatDate(meta.date)}
            </span>
            <span className="flex items-center">
              <RiTimeLine size={16} className="mr-1" />
              {meta.readTime} min read
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-blockquote:border-primary-500 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 prose-hr:border-gray-200 dark:prose-hr:border-gray-700">
          <Suspense fallback={<div className="text-center py-8">Loading article...</div>}>
            <Component />
          </Suspense>
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/life-logs"
            className="btn-primary inline-flex items-center"
          >
            <RiArrowLeftLine size={20} className="mr-2" />
            Back to Life Logs
          </Link>
        </footer>
      </div>
    </div>
  )
}
