import { createFileRoute } from '@tanstack/react-router'
import { RiDownloadLine, RiAwardLine, RiBriefcaseLine } from '@remixicon/react'
import { profileData } from '../data/profile'
import { education, certifications, organizations } from '../data/education'

function AboutPage() {
  return (
    <>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="section-title">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Engineering Leader | Backend Specialist | Team Builder
            </p>
          </div>

          {/* Bio Section */}
          <section className="mb-12">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                Professional Background
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {profileData.bio}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Throughout my career, I've had the privilege of working with diverse teams and technologies, 
                from building IoT platforms to architecting payment gateways and leading digital transformation 
                initiatives at major media companies. I'm passionate about creating scalable solutions, 
                mentoring engineers, and driving technical excellence.
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
              <RiAwardLine className="mr-3 text-primary-600 dark:text-primary-400" />
              Education
            </h2>
            <div className="card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {education.institution}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {education.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{education.location}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                GPA: <span className="font-semibold">{education.gpa}</span>
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Certifications & Training
            </h2>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Organizations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
              <RiBriefcaseLine className="mr-3 text-primary-600 dark:text-primary-400" />
              Organizations
            </h2>
            {organizations.map((org, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {org.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {org.role}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {org.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {org.description}
                </p>
                <ul className="space-y-1">
                  {org.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm">
                      • {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Technical Skills
            </h2>
            <div className="space-y-6">
              {Object.entries(profileData.skills).map(([category, skills]) => (
                <div key={category} className="card">
                  <h3 className="text-lg font-semibold mb-3 capitalize text-primary-600 dark:text-primary-400">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Download Resume */}
          <section className="text-center">
            <a
              href="/Adhitya Giva Muhammad - Resume.pdf"
              download
              className="btn-primary inline-flex items-center"
            >
              <RiDownloadLine className="mr-2" size={20} />
              Download Resume (PDF)
            </a>
          </section>
        </div>
      </div>
    </>
  )
}

export const Route = createFileRoute('/about')({
  component: AboutPage,
})
