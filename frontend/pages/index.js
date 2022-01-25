import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'
import Socials from '../components/socials'
import Blog from '../components/blog'

import {
  getAboutPage,
  getBlogPage,
  getBlogPosts,
  getHomePage,
  getProjectsPage,
  getSocialsPage,
  getVideos,
} from '../lib/api'

function Index({ home, about, projects, socials, videos, blog, posts }) {
  return (
    <>
      <Head>
        <title>Imaad Zaffar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main>
        <Home home={home} />
        <About about={about} />
        <Projects projects={projects} />
        <Socials socials={socials} videos={videos} />
        <Blog blog={blog} posts={posts} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const [home, about, projects, socials, videos, blog, posts] =
    await Promise.all([
      getHomePage(),
      getAboutPage(),
      getProjectsPage(),
      getSocialsPage(),
      getVideos(),
      getBlogPage(),
      getBlogPosts(),
    ])

  return {
    props: { home, about, projects, socials, videos, blog, posts },
    revalidate: 1,
  }
}

export default Index
