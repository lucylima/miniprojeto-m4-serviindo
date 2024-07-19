const artists = [
  {
    name: '7038634357'
  },
  {
    name: 'lucy eris'
  }
]

const randomArtist = () => {
  const random = Math.floor(Math.random() * artists.length)
  const response = artists[random]
  return { response }
}

export { randomArtist }