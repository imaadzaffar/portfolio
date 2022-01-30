import moment from 'moment'
import React from 'react'
import { getBlogURL } from '../lib/api-hashnode'

export default function Blog({ blog, posts }) {
  return (
    <div id="blog" className="bg-slate-900">
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-violet-400">
          <h1 className="text-3xl md:text-5xl font-bold font-header lowercase">
            {blog.data.attributes.heading}
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {posts.map((post, index) => (
            <PostCard post={post} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PostCard(props) {
  const { coverImage, title, brief, slug, dateAdded, contentMarkdown } =
    props.post
  const link = getBlogURL(slug)

  const dateString = moment(dateAdded).fromNow()

  const wpm = 225
  const words = contentMarkdown.trim().replace('\n', '').split(/\s+/).length
  const estimatedTime = Math.ceil(words / wpm)

  let visibility = ''
  if (props.index >= 2) {
    visibility = 'hidden lg:block'
  } else if (props.index >= 1) {
    visibility = 'hidden md:block'
  }
  return (
    <div className={`card overflow-hidden ${visibility}`}>
      {/* <div className="w-full aspect-[1.9/1] bg-slate-500"></div> */}
      <img src={coverImage} alt="" className="w-full aspect-[1.9/1]"></img>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-header font-bold">
          {title}
        </h3>
        <p className="text-base text-violet-300 dark:text-violet-400 mt-2">
          {estimatedTime} mins read / posted {dateString}
        </p>
        <p className="text-base text-slate-500 dark:text-slate-400 mt-4">
          {brief}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block uppercase font-medium text-violet-400 hover:text-violet-300 dark:hover:text-violet-300 mt-4 transition"
        >
          Read More
        </a>
      </div>
    </div>
  )
}
