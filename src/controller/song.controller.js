const song = [
  {
    title: "Perfect Night",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic"
  },
  {
    title: "Acolyte",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic"
  },
  {
    title: "Winded",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic"
  },
  {
    title: "Overbraid",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic"
  },
  {
    title: "Eraser",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic"
  },
  {
    title: "Square Heart",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic"
  },
  {
    title: "Everytime",
    artist: "7038634357",
    album: "Neo Seven",
    genre: "Eletronic"
  },
  {
    title: "Ground (up)",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic"
  },
  {
    title: "Display",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic"
  },
  {
    title: "Automatic",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic"
  },
  {
    title: "Tarmac",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic"
  },
  {
    title: "Avoid",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic"
  },
  {
    title: "Dawn",
    artist: "7038634357",
    album: "My Way Out",
    genre: "Eletronic"
  },
  {
    title: "Menu",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic"
  },
  {
    title: "Runway",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic"
  },
  {
    title: "Overalign",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic"
  },
  {
    title: "Sink",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic"
  },
  {
    title: "Rose",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic"
  },
  {
    title: "Daybreak",
    artist: "7038634357",
    album: "Electric",
    genre: "Eletronic"
  }
]

const randomSong = () => {
  const random = Math.floor(Math.random() * song.length)
  const response = song[random]
  return response 
}

export { randomSong }