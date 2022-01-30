import React, { useState } from 'react'
import Link from 'next/link'
import { getStrapiMedia } from '../lib/media'

const Home = ({ home }) => {
  const icons = home.data.attributes.icons
  const [iconIndex, setIconIndex] = useState(0)
  console.log(icons.data[1])
  let icon = icons.data[iconIndex].attributes

  function clickIcon() {
    setIconIndex((iconIndex + 1) % icons.data.length)
  }

  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center text-center">
      <nav className="hidden md:block mt-10">
        {home.data.attributes.navLinks.map((link, index) => (
          <NavLink text={link.text} href={link.href} key={index} />
        ))}
      </nav>
      <div className="py-20 md:py-40">
        <div className="text-4xl md:text-6xl lowercase font-header text-slate-300">
          {home.data.attributes.greeting}{' '}
          <button
            onClick={() => clickIcon()}
            className="font-bold lowercase text-sky-400 hover:text-teal-400 transition duration-300"
          >
            Imaad
          </button>{' '}
          <img
            src={getStrapiMedia(icon)}
            className="inline-block w-[40px] h-[40px] md:w-[60px] md:h-[60px] animate-bounce"
          ></img>
        </div>
        <div className="mt-4 text-xl md:text-4xl text-slate-400">
          {home.data.attributes.shortDescription}
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
