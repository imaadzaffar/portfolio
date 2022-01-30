import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects({ projects }) {
  return (
    <div id="projects" className="bg-slate-900">
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-sky-400">
          <h1 className="text-3xl md:text-5xl font-bold font-header lowercase">
            {projects.data.attributes.heading}
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.data.attributes.projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard(props) {
  const { name, description, type, technologies, linkLive, linkCode } =
    props.project

  let visibility = ''
  if (props.index >= 4) {
    visibility = 'hidden lg:block'
  } else if (props.index >= 3) {
    visibility = 'hidden md:block'
  }
  return (
    <div className={`card-text ${visibility}`}>
      <div className="flex">
        <h3 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-header font-bold">
          {`${name}`}
        </h3>
        <div className="ml-auto">
          {linkLive && (
            <a
              href={linkLive}
              className="inline-block text-slate-300 hover:text-slate-500 mr-2 transition"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
          {linkCode && (
            <a
              href={linkCode}
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
