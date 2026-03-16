import { useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import { homeData, socialLinks } from '../data'

const socialIcons = {
  YouTube: <FaYoutube size={32} />,
  Instagram: <FaInstagram size={32} />,
  Twitter: <FaTwitter size={32} />,
  GitHub: <FaGithub size={32} />,
  LinkedIn: <FaLinkedin size={32} />,
}

export default function Home() {
  const [iconIndex, setIconIndex] = useState(0)

  function clickIcon() {
    setIconIndex((iconIndex + 1) % homeData.icons.length)
  }

  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center text-center">
      <div className="py-20 md:py-32">
        <div className="text-4xl md:text-6xl lowercase font-header text-slate-300">
          {homeData.greeting}{' '}
          <button
            onClick={clickIcon}
            className="font-bold lowercase text-sky-400 hover:text-teal-400 transition duration-300 border-b-2 md:border-b-4 border-sky-400 hover:border-teal-400"
          >
            {homeData.name}
          </button>{' '}
          <span className="inline-block animate-bounce">
            {homeData.icons[iconIndex]}
          </span>
        </div>
        <div className="mt-4 text-xl md:text-4xl text-slate-500">
          {homeData.shortDescription}
        </div>
        <div className="mt-12 flex flex-row gap-4 justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              className="text-slate-500 hover:text-slate-300 transition-all duration-100"
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              {socialIcons[social.name]}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
