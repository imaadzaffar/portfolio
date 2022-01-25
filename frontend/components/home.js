import React, { useState } from 'react'

const Home = ({ home }) => {
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
    <div className="bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center text-center min-h-screen py-6">
      <div className="text-6xl font-medium font-header">
        <span className="text-slate-700 dark:text-slate-100">
          {home.data.attributes.greeting}{' '}
        </span>
        <button
          onClick={() => clickEmoji()}
          className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-green-500 hover:to-blue-500 transition-all"
        >
          Imaad
        </button>{' '}
        <div className="block mt-6 md:mt-0 md:inline-block animate-bounce">
          {emojis[emojiIndex]}
        </div>
      </div>
      <nav>
        <div className="hidden md:block w-full mt-6">
          <a className="nav-link hover:text-teal-500" href="#about">
            About
          </a>
          <a className="nav-link hover:text-sky-500" href="#projects">
            Projects
          </a>
          <a className="nav-link hover:text-orange-500" href="#socials">
            Socials
          </a>
          <a className="nav-link hover:text-violet-500" href="#blog">
            Blog
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Home
