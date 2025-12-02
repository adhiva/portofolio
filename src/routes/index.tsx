import { createFileRoute, Link } from "@tanstack/react-router";
import {
	RiArrowRightLine,
	RiGithubLine,
	RiLinkedinBoxLine,
	RiMailLine,
} from "@remixicon/react";
import { profileData } from "../data/profile";

function HomePage() {
	return (
		<>
			{/* Hero Section */}
			<section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
				<div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-3">
            <img
							className="h-60 w-60 rounded-full object-cover"
							src="/assets/DSCF0804.JPG"
							alt="nature image"
						/>
          </div>
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gray-900 dark:text-white">
							Hi, I'm{" "}
							<span className="text-primary-600 dark:text-primary-400">
								Adhitya Giva Muhammad
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
							{profileData.title}
						</p>
						<p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
							{profileData.tagline}
						</p>
						<p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
							{profileData.bio}
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
							<Link
								to="/projects"
								className="btn-primary inline-flex items-center justify-center"
							>
								View Projects <RiArrowRightLine className="ml-2" size={20} />
							</Link>
							<Link
								to="/contact"
								className="btn-secondary inline-flex items-center justify-center"
							>
								Contact Me <RiMailLine className="ml-2" size={20} />
							</Link>
						</div>

						{/* Social Links */}
						<div className="flex justify-center space-x-6">
							<a
								href={profileData.github}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
								aria-label="GitHub"
							>
								<RiGithubLine
									size={24}
									className="text-gray-700 dark:text-gray-300"
								/>
							</a>
							<a
								href={profileData.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
								aria-label="LinkedIn"
							>
								<RiLinkedinBoxLine
									size={24}
									className="text-gray-700 dark:text-gray-300"
								/>
							</a>
							<a
								href={`mailto:${profileData.email}`}
								className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
								aria-label="Email"
							>
								<RiMailLine
									size={24}
									className="text-gray-700 dark:text-gray-300"
								/>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Stats */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
								9+
							</div>
							<div className="text-gray-600 dark:text-gray-400">
								Years of Experience
							</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
								6
							</div>
							<div className="text-gray-600 dark:text-gray-400">
								Companies Worked With
							</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
								50+
							</div>
							<div className="text-gray-600 dark:text-gray-400">
								Projects Delivered
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Key Skills Preview */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
				<div className="max-w-7xl mx-auto">
					<h2 className="section-title text-center">Core Expertise</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{Object.entries(profileData.skills)
							.slice(0, 6)
							.map(([category, skills]) => (
								<div key={category} className="card">
									<h3 className="text-xl font-semibold mb-3 capitalize text-primary-600 dark:text-primary-400">
										{category}
									</h3>
									<ul className="space-y-2">
										{skills.slice(0, 4).map((skill, index) => (
											<li
												key={index}
												className="text-gray-600 dark:text-gray-300 text-sm"
											>
												• {skill}
											</li>
										))}
									</ul>
								</div>
							))}
					</div>
					<div className="text-center mt-8">
						<Link to="/about" className="btn-primary inline-flex items-center">
							Learn More About Me{" "}
							<RiArrowRightLine className="ml-2" size={20} />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export const Route = createFileRoute("/")({
	component: HomePage,
});
