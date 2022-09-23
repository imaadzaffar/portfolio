import React from 'react'
import { getStrapiMedia } from '../lib/media'

import moment from 'moment'

export default function Socials({ socials }) {
  return (
    <div id="connect" className="bg-slate-900">
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-yellow-400">
          <h1 className="text-3xl md:text-5xl font-bold font-header lowercase">
            {socials.data.attributes.heading}
          </h1>
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
      <img
        className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
        src={iconSrc}
      ></img>
    </a>
  )
}
