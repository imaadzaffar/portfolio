import React from 'react'
import { IconContext } from 'react-icons'
import { FaLaptopCode } from 'react-icons/fa'

export default function Projects() {
  let projects = [
    {
      title: 'Family Fitness',
      description:
        'Leaderboard for family members to compete based on exercise.',
      technologies: ['HTML', 'CSS', 'JS', 'Django'],
      linkLive: 'https://zafaris-family-fitness.herokuapp.com/',
      linkCode: 'hi',
    },
    {
      title: 'Cubyl Battles',
      description:
        'Battle to solve the Rubik’s cube the fastest, with a scramble generator and timer.',
      technologies: ['HTML', 'CSS', 'JS'],
      linkLive: 'http://cubyl-battles.herokuapp.com/',
      linkCode: '',
    },
    {
      title: 'Weekly',
      description:
        'Small app to show which school week it is - A, B or holiday.',
      technologies: ['Kotlin', 'Android Studio'],
      linkLive:
        'https://play.google.com/store/apps/details?id=com.zafaris.whichweek',
      linkCode: '',
    },
  ]

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-sky-100 to-sky-300 min-h-screen"
    >
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-sky-500">
          <a href="#" className="hidden md:block hover:text-sky-700 transition">
            <FaLaptopCode size={40} />
          </a>
          <h1 className="text-5xl font-bold font-header">Projects</h1>
        </div>
        <p className="text-2xl text-sky-500 mt-4">
          Here are some of my projects :)
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <ProjectCard project={project} key={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard(props) {
  let { title, description, technologies, linkLive, linkCode } = props.project

  return (
    <div className="card bg-sky-50 shadow-sky-300">
      <h3 className="text-2xl text-slate-700 font-header font-bold">{title}</h3>
      <div className="mt-2">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="inline-block bg-sky-500 text-sm text-white rounded-full mr-2 mb-2 px-4 py-1"
          >
            {tech}
          </div>
        ))}
      </div>
      <p className="text-base text-slate-500 mt-4">{description}</p>
      <div className="mt-4">
        {linkLive && (
          <a
            href={linkLive}
            target="_blank"
            rel="noreferrer"
            className="inline-block uppercase font-medium text-emerald-500 hover:text-emerald-700 mr-4 transition"
          >
            Live Project
          </a>
        )}
        {linkCode && (
          <a
            href={linkCode}
            target="_blank"
            rel="noreferrer"
            className="inline-block uppercase font-medium text-purple-500 hover:text-purple-700 transition"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  )
}
