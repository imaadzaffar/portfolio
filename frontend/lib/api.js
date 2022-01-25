import { fetchStrapiAPI } from './api-strapi'
import { getYoutubeVideos } from './api-youtube'
import { getHashnodePosts } from './api-hashnode'

export async function getHomePage() {
  return fetchStrapiAPI('/api/home-page')
}

export async function getAboutPage() {
  return fetchStrapiAPI(
    '/api/about-page?populate[0]=skills&populate[1]=skills.tags'
  )
}

export async function getProjectsPage() {
  return fetchStrapiAPI(
    '/api/projects-page?populate[0]=projects&populate[1]=projects.technologies'
  )
}

export async function getSocialsPage() {
  return fetchStrapiAPI(
    '/api/socials-page?populate[0]=socials&populate[1]=socials.icon'
  )
}

export async function getBlogPage() {
  return fetchStrapiAPI('/api/blog-page')
}

export async function getVideos() {
  return getYoutubeVideos(3)
}

export async function getBlogPosts() {
  return getHashnodePosts(0)
}
