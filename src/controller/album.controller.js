const albums = [
  {
    title: 'Neo Seven',
    artist: '7038634357',
    release: '23/11/2022'
  },
  {
    title: 'My Way Out',
    artist: '7038634357',
    release: '15/11/2021'
  }
]

const randomAlbum = () => {
  const random = Math.floor(Math.random() * albums.length)
  const response = albums[random]
  return response
}

export { randomAlbum }