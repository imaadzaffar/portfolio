import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projectsData } from '../data'

export default function Projects() {
  return (
    <div id="projects" className="bg-slate-900">
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-sky-400">
          <h1 className="text-3xl md:text-5xl font-bold font-header lowercase">
            {projectsData.heading}
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projectsData.projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const { name, description, type, technologies, linkLive, linkCode } = project

  return (
    <div className="card-text">
      <div className="flex">
        <h3 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-header font-bold">
          {name}
        </h3>
        <div className="ml-auto">
          {linkLive && (
            <a
              href={linkLive}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-slate-300 hover:text-slate-500 mr-2 transition"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
          {linkCode && (
            <a
              href={linkCode}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-slate-300 hover:text-slate-500 transition"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-base text-slate-500 dark:text-slate-400 mt-2">
        {description}
      </p>
      <div className="mt-4">
        <div className="tag text-slate-300">{type}</div>
        {technologies.map((tech) => (
          <div key={tech.id} className="tag text-sky-500">
            {tech.tag}
          </div>
        ))}
      </div>
    </div>
  )
}
