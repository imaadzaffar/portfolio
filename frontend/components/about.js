import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function About({ about }) {
  return (
    <div id="about" className="bg-slate-900">
      <div className="container mx-auto p-10">
        <div className="flex items-center text-teal-400">
          <h1 className="text-3xl md:text-5xl font-bold font-header lowercase">
            {about.data.attributes.heading}
          </h1>
        </div>
        <ReactMarkdown
          parserOptions={{ commonmark: true }}
          className="text-slate-300 mt-4"
        >
          {about.data.attributes.description}
        </ReactMarkdown>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {about.data.attributes.technologies.map((technology) => (
            <li key={technology.text} className="text-slate-300">
              {technology.text}
            </li>
          ))}
        </div> */}
      </div>
    </div>
  )
}
