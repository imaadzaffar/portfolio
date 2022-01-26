import React from 'react'
import {
  FaUserFriends,
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'
import { getStrapiMedia } from '../lib/media'

import moment from 'moment'

export default function Socials({ socials, videos }) {
  return (
    <div
      id="socials"
      className="bg-gradient-to-b from-orange-100 to-orange-300 dark:from-slate-800 dark:to-slate-900 min-h-screen"
    >
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-orange-500">
          <a
            href="#"
            className="hidden md:block hover:text-orange-700 dark:hover:text-orange-300 transition"
          >
            <FaUserFriends size={40} />
          </a>
          <h1 className="text-5xl font-bold font-header">
            {socials.data.attributes.heading}
          </h1>
        </div>
        <p className="text-2xl text-orange-500 mt-4">
          {socials.data.attributes.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {videos.map((video) => (
            <VideoCard video={video} key={video.id.videoId} />
          ))}
        </div>
        <div className="flex justify-center gap-4 md:gap-8 mt-10">
          {socials.data.attributes.socials.map((social, index) => (
            <SocialIcon social={social} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SocialIcon(props) {
  const { name, link, icon } = props.social
  const iconUrl = icon.data.attributes
  const iconSrc = getStrapiMedia(iconUrl)

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="shadow-lg shadow-orange-300 dark:shadow-none"
    >
      <img width={50} height={50} src={iconSrc}></img>
    </a>
  )
}

function VideoCard(props) {
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
      <div className="flex md:flex-col img-card bg-orange-50 dark:bg-slate-700 shadow-orange-300 dark:shadow-none overflow-hidden">
        <img
          src={thumbnailSrc}
          alt="video"
          className=" w-1/3 md:w-auto md:h-auto aspect-video object-cover"
        ></img>
        <div className="p-6">
          <h3 className="text-xl text-slate-700 dark:text-slate-100 font-header font-bold">
            {title}
          </h3>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-2">
            uploaded {dateString}
          </p>
        </div>
      </div>
    </a>
  )
}
