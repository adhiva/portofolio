import { createFileRoute } from '@tanstack/react-router'
import { RiBriefcaseLine, RiMapPinLine, RiCalendarLine } from '@remixicon/react'
import { experiences } from '../data/experience'

function ExperiencePage() {
  return (
    <>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="section-title">Work Experience</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              9+ years of professional experience in software engineering and leadership
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>

                {/* Content Card */}
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="card">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <RiBriefcaseLine className="text-primary-600 dark:text-primary-400 flex-shrink-0 ml-2" size={20} />
                      </div>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <RiCalendarLine size={16} className="mr-1" />
                          {exp.period}
                        </span>
                        <span className="hidden sm:block">•</span>
                        <span className="flex items-center">
                          <RiMapPinLine size={16} className="mr-1" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex">
                            <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {exp.technologies && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const Route = createFileRoute('/experience')({
  component: ExperiencePage,
})
