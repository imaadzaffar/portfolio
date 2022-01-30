const qs = require('qs')
import { fetchStrapiAPI } from './api-strapi'
import { getYoutubeVideos } from './api-youtube'
import { getHashnodePosts } from './api-hashnode'

export async function getHomePage() {
  const query = qs.stringify(
    {
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  )

  return fetchStrapiAPI(`/api/home-page?${query}`)
}

export async function getAboutPage() {
  const query = qs.stringify(
    {
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  )

  return fetchStrapiAPI(`/api/about-page?${query}`)
}

export async function getProjectsPage() {
  const query = qs.stringify(
    {
      populate: {
        projects: {
          populate: ['technologies'],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  )

  return fetchStrapiAPI(`/api/projects-page?${query}`)
}

export async function getSocialsPage() {
  const query = qs.stringify(
    {
      populate: {
        socials: {
          populate: ['icon'],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  )

  return fetchStrapiAPI(`/api/socials-page?${query}`)
}

export async function getBlogPage() {
  return fetchStrapiAPI('/api/blog-page')
}

export async function getLatestVideos() {
  return getYoutubeVideos(3)
}

export async function getLatestPosts() {
  return getHashnodePosts(0)
}
