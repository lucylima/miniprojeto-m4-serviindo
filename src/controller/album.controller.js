const albums = [
  {
    name: 'Neo seven'
  },
  {
    name: 'Fountain baby'
  }
]

const randomAlbum = () => {
  const random = Math.floor(Math.random() * albums.length)
  const response = albums[random]
  return { response }
}

export { randomAlbum }