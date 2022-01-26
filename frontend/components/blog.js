import moment from 'moment'
import React from 'react'
import { IconContext } from 'react-icons'
import { FaPen } from 'react-icons/fa'
import { getBlogURL } from '../lib/api-hashnode'

export default function Blog({ blog, posts }) {
  return (
    <div
      id="blog"
      className="bg-gradient-to-b from-violet-100 to-violet-300 dark:from-slate-800 dark:to-slate-900 min-h-screen"
    >
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-violet-500">
          <a
            href="#"
            className="hidden md:block hover:text-violet-700 dark:hover:text-violet-300 transition"
          >
            <FaPen size={40} />
          </a>
          <h1 className="text-5xl font-bold font-header">
            {blog.data.attributes.heading}
          </h1>
        </div>
        <p className="text-2xl text-violet-500 mt-4">
          {blog.data.attributes.description}
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PostCard(props) {
  const { coverImage, title, brief, slug, dateAdded } = props.post
  const link = getBlogURL(slug)

  const dateString = moment(dateAdded).fromNow()

  return (
    <div className="img-card bg-violet-50 dark:bg-slate-700 shadow-violet-300 dark:shadow-none overflow-hidden">
      {/* <div className="w-full aspect-[1.9/1] bg-slate-500"></div> */}
      <img src={coverImage} alt="" className="w-full aspect-[1.9/1]"></img>
      <div className="p-6">
        <h3 className="text-xl text-slate-700 dark:text-slate-100 font-header font-bold">
          {title}
        </h3>
        <p className="text-base text-slate-300 dark:text-slate-400 mt-2">
          {dateString}
        </p>
        <p className="text-base text-slate-500 dark:text-slate-300 mt-4">
          {brief}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block uppercase font-medium text-violet-500 hover:text-violet-700 dark:hover:text-violet-300 mt-4 transition"
        >
          Read More
        </a>
      </div>
    </div>
  )
}
