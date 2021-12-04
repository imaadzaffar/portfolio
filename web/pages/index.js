import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const emojis = [
    '👋🏽',
    '🤩',
    '🎱',
    '🍕',
    '🏓',
    '🍔',
    '🎾',
    '🍜',
    '🎵',
    '🍣',
    '♟️',
    '🍩',
  ]
  const [emojiIndex, setEmojiIndex] = useState(0)

  function clickEmoji() {
    setEmojiIndex((emojiIndex + 1) % emojis.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Imaad Zaffar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold font-header">
          Hi, I&apos;m{' '}
          <button
            onClick={() => clickEmoji()}
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-green-500 hover:to-blue-500"
          >
            Imaad
          </button>{' '}
          <div className="block mt-6 md:mt-0 md:inline-block animate-bounce">
            {emojis[emojiIndex]}
          </div>
        </h1>
        <nav>
          <div className="hidden md:block w-full flex-grow lg:flex lg:items-center lg:w-auto py-2">
            <a
              href="#"
              className="font-medium uppercase px-4 hover:text-green-500"
            >
              About
            </a>
            <a
              href="#"
              className="font-medium uppercase px-4 hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="#"
              className="font-medium uppercase px-4 hover:text-yellow-500"
            >
              Blog
            </a>
            <a
              href="#"
              className="font-medium uppercase px-4 hover:text-purple-500"
            >
              Socials
            </a>
          </div>
        </nav>
      </main>
    </div>
  )
}
