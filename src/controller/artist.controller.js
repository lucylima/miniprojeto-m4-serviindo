const artists = [
  {
    artist: '7038634357'
  },
  {
    artist: 'lucy eris'
  }
]

const randomArtist = () => {
  const random = Math.floor(Math.random() * artists.length)
  const response = artists[random]
  return response
}

export { randomArtist }