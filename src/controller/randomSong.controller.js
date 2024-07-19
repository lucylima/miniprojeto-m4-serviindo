const song = [
  {
    name: "Perfect night",
    artist: "7038634357",
    album: "Neo seven",
  },
  {
    name: "Acolyte",
    artist: "7038634357",
    album: "Neo seven",
  }
]

const randomSong = () => {
  const random = Math.floor(Math.random() * song.length)
  const response = song[random]
  return { response }
}

export { randomSong }