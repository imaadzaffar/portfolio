const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "imaadzaffar") {
            publication {
                posts(page: 0) {
                    title
                    brief
                    coverImage
                    dateAdded
                    slug
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

export async function getHashnodePosts(page) {
  const articles = fetchHashnodeAPI(GET_USER_ARTICLES, {
    page: page,
  }).then((result) => {
    console.log(result)
    return result.data.user.publication.posts
  })
}
