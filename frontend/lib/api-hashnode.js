const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "imaadzaffar") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    coverImage
                    slug
                    dateAdded
                    contentMarkdown
                }
            }
        }
    }
`

async function fetchHashnodeAPI(query, variables = {}) {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  return data.json()
}

export function getBlogURL(slug) {
  return `https://blog.imaadzaffar.com/${slug}`
}

export async function getHashnodePosts(page) {
  const articles = fetchHashnodeAPI(GET_USER_ARTICLES, {
    page: page,
  }).then((result) => {
    return result.data.user.publication.posts
  })
  return articles
}
