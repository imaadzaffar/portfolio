import React, { useState } from 'react'
import Link from 'next/link'
import { getStrapiMedia } from '../lib/media'
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from 'react-icons/fa'

const socials = [
  {
    name: 'YouTube',
    icon: <FaYoutube size={32} />,
    link: 'https://youtube.com/zafaris',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={32} />,
    link: 'https://instagram.com/_zafaris',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={32} />,
    link: 'https://twitter.com/_zafaris',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={32} />,
    link: 'https://github.com/imaadzaffar',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={32} />,
    link: 'https://linkedin.com/in/imaadzafafr',
  },
]

const Home = ({ home }) => {
  const icons = home.data.attributes.icons
  const [iconIndex, setIconIndex] = useState(0)
  let icon = icons.data[iconIndex].attributes

  function clickIcon() {
    setIconIndex((iconIndex + 1) % icons.data.length)
  }

  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center text-center">
      {/* <nav className="hidden md:block mt-10">
        {home.data.attributes.navLinks.map((link, index) => (
          <NavLink text={link.text} href={link.href} key={index} />
        ))}
      </nav> */}
      <div className="py-20 md:py-32">
        <div className="text-4xl md:text-6xl lowercase font-header text-slate-300">
          {home.data.attributes.greeting}{' '}
          <button
            onClick={() => clickIcon()}
            className="font-bold lowercase text-sky-400 hover:text-teal-400 transition duration-300 border-b-2 md:border-b-4 border-sky-400 hover:border-teal-400"
          >
            Imaad
          </button>{' '}
          <img
            src={getStrapiMedia(icon)}
            className="inline-block w-[40px] h-[40px] md:w-[60px] md:h-[60px] animate-bounce"
          ></img>
        </div>
        <div className="mt-4 text-xl md:text-4xl text-slate-500">
          {home.data.attributes.shortDescription}
        </div>
        <div className="mt-12 flex flex-row gap-4 justify-center">
          {socials.map((socialInfo, i) => (
            <div key={i}>
              <a
                className="text-slate-500 hover:text-slate-300 transition-all duration-100 hover:w-[40] hover:h-[40]"
                href={socialInfo.link}
              >
                {socialInfo.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NavLink({ text, href }) {
  return (
    <Link href={href}>
      <a className="nav-link">{text}</a>
    </Link>
  )
}

export default Home
