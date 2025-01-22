import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-10">
          Hi there! I'm Archer.
        </h1>

        <div className="space-y-8 text-lg mb-16">
          <p>
            I started building on the web in 2015 and never stopped.
          </p>

          <p>
          I graduated in 2019 and came to Shanghai to work as a single software development engineer at Wonders. The main technology stack includes Java/Python/Docker/LLM, etc.
          </p>

          <p>
          Recently, I found Next.js interesting, so I wrote this blog platform using this technology. Here are some of the projects I've written with Next.js
          </p>
        </div>

        <div className="grid gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="font-medium">{project.name}</span>
                  {project.isPublic && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800">
                      Public
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="flex items-center gap-1"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}