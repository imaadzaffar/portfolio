import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'
import Videos from '../components/youtube'
import Blog from '../components/blog'
import Socials from '../components/socials'

import {
  getAboutPage,
  getBlogPage,
  getHomePage,
  getLatestPosts,
  getLatestVideos,
  getProjectsPage,
  getSocialsPage,
} from '../lib/api'
import Footer from '../components/footer'

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
        <Videos videos={videos} />
        <Blog blog={blog} posts={posts} />
        <Socials socials={socials} />
        <Footer />
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
      getLatestVideos(),
      getBlogPage(),
      getLatestPosts(),
    ])

  return {
    props: { home, about, projects, socials, videos, blog, posts },
  }
}

export default Index
