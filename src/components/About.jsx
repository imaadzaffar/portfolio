import { aboutData } from '../data'

export default function About() {
  return (
    <div id="about" className="bg-slate-900">
      <div className="container mx-auto p-10">
        <div className="flex items-center text-teal-400">
          <h1 className="text-3xl md:text-5xl font-bold font-header lowercase">
            {aboutData.heading}
          </h1>
        </div>
        <div className="text-slate-300 mt-4 whitespace-pre-line">
          {aboutData.description}
        </div>
      </div>
    </div>
  )
}
