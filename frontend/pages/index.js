import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'
import Socials from '../components/socials'
import Blog from '../components/blog'

export default function Index() {
  return (
    <>
      <Head>
        <title>Imaad Zaffar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main>
        <Home />
        <About />
        <Projects />
        <Socials />
        <Blog />
      </main>
    </>
  )
}
