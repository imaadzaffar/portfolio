import React from 'react'
import { IconContext } from 'react-icons'
import {
  FaUserFriends,
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

export default function Socials() {
  let socials = [
    {
      icon: <FaYoutube />,
      colour: 'red',
      link: 'youtube.com',
    },
    {
      icon: <FaTwitter />,
      colour: 'blue',
      link: 'twitter.com/imaadzaffar',
    },
    {
      icon: <FaGithub />,
      colour: 'purple',
      link: 'github.com/imaadzaffar',
    },
    {
      icon: <FaEnvelope />,
      colour: 'green',
      link: 'mailto:iszaffar@gmail.com',
    },
  ]

  let videos = [
    {
      img: '',
      title: 'Video 1',
      description: 'Subscribe to my channel loser.',
      link: '',
    },
    {
      img: '',
      title: 'Video 2',
      description: 'Subscribe to my channel loser.',
      link: '',
    },
    {
      img: '',
      title: 'Video 3',
      description: 'Subscribe to my channel loser.',
      link: '',
    },
  ]

  return (
    <div
      id="socials"
      className="bg-gradient-to-b from-orange-100 to-orange-300 min-h-screen"
    >
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-orange-500">
          <a
            href="#"
            className="hidden md:block hover:text-orange-700 transition"
          >
            <FaUserFriends size={40} />
          </a>
          <h1 className="text-5xl font-bold font-header">Socials</h1>
        </div>
        <p className="text-2xl text-orange-500 mt-4">
          Connect with me bean. I make videos sometimes :)
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {videos.map((video) => (
            <VideoCard video={video} key={video} />
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="social-icon text-[#ff0000] hover:text-[#a80000]"
          >
            <FaYoutube size={40} />
          </a>
          <a
            href="https://twitter.com/imaadzaffar"
            target="_blank"
            rel="noreferrer"
            className="social-icon text-[#1da1f2] hover:text-[#13699e]"
          >
            <FaTwitter size={40} />
          </a>
          <a
            href="https://github.com/imaadzaffar"
            target="_blank"
            rel="noreferrer"
            className="social-icon text-[#6e5494] hover:text-[#532c8f]"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://linkedin.com/in/imaadzaffar"
            target="_blank"
            rel="noreferrer"
            className="social-icon text-[#0077b5] hover:text-[#00466b]"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="mailto:iszaffar@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon text-green-600 hover:text-green-800"
          >
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
    </div>
  )
}

function VideoCard(props) {
  let { img, title, description, link } = props.video

  return (
    <div className="img-card bg-orange-50 shadow-orange-300 overflow-hidden">
      <div className="w-full aspect-video bg-slate-500"></div>
      {/* <img src={img} alt="" className="w-full aspect-[1.9/1]"></img> */}
      <div className="p-6">
        <h3 className="text-2xl text-slate-700 font-header font-bold">
          {title}
        </h3>
        <p className="text-base text-slate-500">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block uppercase font-medium text-orange-500 hover:text-orange-700 mt-4 transition"
        >
          Watch Now
        </a>
      </div>
    </div>
  )
}
