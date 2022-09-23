import React from 'react'
import { getStrapiMedia } from '../lib/media'

import moment from 'moment'

export default function Youtube({ videos }) {
  return (
    <div id="youtube" className="bg-slate-900">
      <div className="container mx-auto p-10">
        <div className="flex items-center text-red-400">
          <h1 className="text-3xl md:text-5xl font-bold font-header lowercase">
            YouTube
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {videos.map((video, index) => (
            <VideoCard video={video} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function VideoCard(props) {
  console.log(props)
  const { thumbnails, title, description, publishedAt } = props.video.snippet
  const videoId = props.video.id.videoId
  const thumbnailSrc = thumbnails.high.url

  const dateString = moment(publishedAt).fromNow()

  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="card flex flex-col overflow-hidden hover:opacity-70 transition-opacity">
        <img
          src={thumbnailSrc}
          alt="video"
          className="aspect-video object-cover"
        ></img>
        <div className="p-6">
          <h3 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-header font-bold">
            {title}
          </h3>
          <p className="text-base text-red-300 dark:text-red-400 mt-2">
            uploaded {dateString}
          </p>
        </div>
      </div>
    </a>
  )
}
