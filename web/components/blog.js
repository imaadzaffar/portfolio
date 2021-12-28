import React from 'react'
import { IconContext } from 'react-icons'
import { FaPen } from 'react-icons/fa'

export default function Blog() {
  let posts = [
    {
      img: '',
      title: 'Blog Post 1',
      excerpt: 'This is a cool excerpt.',
      link: '#',
    },
    {
      img: '',
      title: 'Blog Post 2',
      excerpt: 'This is a cool excerpt.',
      link: '#',
    },
    {
      img: '',
      title: 'Blog Post 3',
      excerpt: 'This is a cool excerpt.',
      link: '#',
    },
  ]

  return (
    <div
      id="blog"
      className="bg-gradient-to-b from-violet-100 to-violet-300 min-h-screen"
    >
      <div className="container mx-auto p-10">
        <div className="flex items-center gap-4 text-violet-500">
          <a
            href="#"
            className="hidden md:block hover:text-violet-700 transition"
          >
            <FaPen size={40} />
          </a>
          <h1 className="text-5xl font-bold font-header">Blog</h1>
        </div>
        <p className="text-2xl text-violet-500 mt-4">
          I write about my life sometimes...
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {posts.map((post) => (
            <PostCard post={post} key={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PostCard(props) {
  let { img, title, excerpt, link } = props.post

  return (
    <div className="img-card bg-violet-50 shadow-violet-300 overflow-hidden">
      <div className="w-full aspect-[1.9/1] bg-slate-500"></div>
      {/* <img src={img} alt="" className="w-full aspect-[1.9/1]"></img> */}
      <div className="p-6">
        <h3 className="text-2xl text-slate-700 font-header font-bold">
          {title}
        </h3>
        <p className="text-base text-slate-500">{excerpt}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block uppercase font-medium text-violet-500 hover:text-violet-700 mt-4 transition"
        >
          Read More
        </a>
      </div>
    </div>
  )
}
