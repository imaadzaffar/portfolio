import React from 'react'
import { IconContext } from 'react-icons'
import { FaDna } from 'react-icons/fa'

export default function About({ about }) {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-teal-100 to-teal-300 dark:from-slate-800 dark:to-slate-900 min-h-screen"
    >
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-teal-500">
          <a
            href="#"
            className="hidden md:block hover:text-teal-700 dark:hover:text-teal-300 transition"
          >
            <FaDna size={40} />
          </a>
          <h1 className="text-5xl font-bold font-header">
            {about.data.attributes.heading}
          </h1>
        </div>
        <p className="text-teal-500 mt-4">
          {`Hi, I’m Imaad. I’m a 1st year Computer Science student at university.
          I enjoy making cool, interesting projects and diving straight into
          the deep end. I started coding around 5 years ago with Python in
          school and... I loved it! Since then, I’ve made many apps and websites,
          which I find pretty amazing. Fun fact: I can solve the Rubik’s cube in
          less than 30 seconds!`}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {about.data.attributes.skills.map((skill) => (
            <SkillCard skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillCard(props) {
  const { name, description, tags } = props.skill

  return (
    <div className="card bg-teal-50 dark:bg-slate-700 shadow-teal-300 dark:shadow-none">
      <h3 className="text-2xl text-slate-700 dark:text-slate-100 font-header font-bold">
        {name}
      </h3>
      <p className="text-base text-slate-500 dark:text-slate-300">
        {description}
      </p>
      <div className="mt-6">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="inline-block bg-teal-500 text-sm text-white rounded-full mr-2 mb-2 px-4 py-1"
          >
            {tag.tag}
          </div>
        ))}
      </div>
    </div>
  )
}
