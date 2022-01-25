import React from 'react'
import { IconContext } from 'react-icons'
import { FaLaptopCode } from 'react-icons/fa'

export default function Projects({ projects }) {
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-sky-100 to-sky-300 dark:from-slate-800 dark:to-slate-900 min-h-screen"
    >
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-sky-500">
          <a
            href="#"
            className="hidden md:block hover:text-sky-700 dark:hover:text-sky-300 transition"
          >
            <FaLaptopCode size={40} />
          </a>
          <h1 className="text-5xl font-bold font-header">
            {projects.data.attributes.heading}
          </h1>
        </div>
        <p className="text-2xl text-sky-500 mt-4">
          {projects.data.attributes.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.data.attributes.projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard(props) {
  let { name, description, type, technologies, linkLive, linkCode } =
    props.project

  return (
    <div className="card bg-sky-50 dark:bg-slate-700 shadow-sky-300 dark:shadow-none">
      <h3 className="text-2xl text-slate-700 dark:text-slate-100 font-header font-bold">
        {`${name}`}
      </h3>
      <div className="mt-2">
        <div className="inline-block bg-sky-500 text-sm text-white rounded-full mr-2 mb-2 px-4 py-1">
          {type}
        </div>
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="inline-block bg-sky-50 text-sm text-sky-500 border-2 border-sky-500 rounded-full mr-2 mb-2 px-4 py-1"
          >
            {tech.tag}
          </div>
        ))}
      </div>
      <p className="text-base text-slate-500 dark:text-slate-300 mt-4">
        {description}
      </p>
      <div className="mt-4">
        {linkLive && (
          <a
            href={linkLive}
            target="_blank"
            rel="noreferrer"
            className="inline-block uppercase font-medium text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300 mr-4 transition"
          >
            Live Project
          </a>
        )}
        {linkCode && (
          <a
            href={linkCode}
            target="_blank"
            rel="noreferrer"
            className="inline-block uppercase font-medium text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 transition"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  )
}
