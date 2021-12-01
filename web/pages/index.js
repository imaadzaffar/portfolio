import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const emojis = ['👋', '🤩', '🎱', '🍕', '🏓', '🍔', '🎾', '🍜']
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
          Hi I&apos;m{' '}
          <button
            onClick={() => clickEmoji()}
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400"
          >
            Imaad
          </button>{' '}
          <div className="inline-block animate-bounce">
            {emojis[emojiIndex]}
          </div>
        </h1>
        <p>Welcome to my lil corner on the interwebs 🕸</p>
      </main>
    </div>
  )
}
