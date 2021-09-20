import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'y6l6wadq',
  dataset: 'production',
  useCdn: true,
})
