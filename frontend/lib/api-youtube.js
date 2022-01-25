import axios from 'axios'

function getYoutubeUrl(path = '') {
  return `https://youtube.googleapis.com/youtube/v3/${path}&key=AIzaSyB9GcLf4qoh4uACBNnHi5Q0B54Y5d9b9Xc`
}

async function getYoutubeAPI(path) {
  const requestUrl = getYoutubeUrl(path)
}

export async function getYoutubeVideos(maxResults) {
  const requestUrl = getYoutubeUrl(
    `search?part=snippet&channelId=UCRGp4IcgPuOIJ9aIYCh2VAA&maxResults=${maxResults}&order=date`
  )
  const videos = await axios.get(requestUrl).then((res) => {
    const data = res.data
    return data.items
  })
  return videos
}
