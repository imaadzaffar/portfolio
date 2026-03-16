import { FaYoutube } from 'react-icons/fa'
import { youtubeData } from '../data'

export default function Videos() {
  return (
    <div id="youtube" className="bg-slate-900">
      <div className="container mx-auto p-10">
        <div className="flex items-center text-red-400">
          <h1 className="text-3xl md:text-5xl font-bold font-header lowercase">
            YouTube
          </h1>
        </div>
        <div className="mt-10 flex flex-col items-center gap-6 py-12">
          <FaYoutube size={64} className="text-red-500" />
          <p className="text-slate-400 text-xl text-center max-w-md">
            Check out my latest videos on YouTube
          </p>
          <a
            href={youtubeData.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-colors duration-200"
          >
            <FaYoutube size={20} />
            Visit {youtubeData.channelName}
          </a>
        </div>
      </div>
    </div>
  )
}
