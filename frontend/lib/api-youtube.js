function getYoutubeUrl(path = '') {
  return `https://youtube.googleapis.com/youtube/v3/${path}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
}

async function getYoutubeAPI(path) {
  const requestUrl = getYoutubeUrl(path)
}

export async function getYoutubeVideos(maxResults) {
  const requestUrl = getYoutubeUrl(
    `search?part=snippet&channelId=UCRGp4IcgPuOIJ9aIYCh2VAA&maxResults=${maxResults}&order=date`
  )
  const videos = await fetch(requestUrl)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      const results = data.items
      return results.filter((result) => result.id.kind === 'youtube#video')
    })

  return videos
}
