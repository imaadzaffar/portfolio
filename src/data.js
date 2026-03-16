export const homeData = {
  greeting: "hey, I'm",
  name: 'Imaad',
  shortDescription: 'software engineer & content creator',
  icons: ['👋', '💻', '🚀', '✨', '🎯', '🛠️'],
}

export const aboutData = {
  heading: 'about me',
  description: `I'm a software engineer and content creator based in London. I enjoy building things for the web and sharing what I learn along the way.

I have experience with modern web technologies including React, Node.js, and cloud platforms. When I'm not coding, you can find me creating content on YouTube.`,
}

export const projectsData = {
  heading: 'projects',
  projects: [
    {
      name: 'Portfolio Website',
      description:
        'Personal portfolio built with Vite, React, and TailwindCSS. Deployed on Netlify.',
      type: 'Web',
      technologies: [
        { id: 1, tag: 'React' },
        { id: 2, tag: 'Vite' },
        { id: 3, tag: 'TailwindCSS' },
      ],
      linkLive: 'https://imaadzaffar.com',
      linkCode: 'https://github.com/imaadzaffar/portfolio',
    },
    {
      name: 'Project Two',
      description: 'A short description of this project and what it does.',
      type: 'Web',
      technologies: [
        { id: 1, tag: 'React' },
        { id: 2, tag: 'Node.js' },
      ],
      linkLive: null,
      linkCode: 'https://github.com/imaadzaffar',
    },
    {
      name: 'Project Three',
      description: 'A short description of this project and what it does.',
      type: 'Mobile',
      technologies: [
        { id: 1, tag: 'React Native' },
        { id: 2, tag: 'TypeScript' },
      ],
      linkLive: null,
      linkCode: 'https://github.com/imaadzaffar',
    },
  ],
}

export const socialLinks = [
  { name: 'YouTube', link: 'https://youtube.com/zafaris' },
  { name: 'Instagram', link: 'https://instagram.com/_zafaris' },
  { name: 'Twitter', link: 'https://twitter.com/_zafaris' },
  { name: 'GitHub', link: 'https://github.com/imaadzaffar' },
  { name: 'LinkedIn', link: 'https://linkedin.com/in/imaadzafafr' },
]

export const youtubeData = {
  channelUrl: 'https://youtube.com/zafaris',
  channelName: '@zafaris',
}
