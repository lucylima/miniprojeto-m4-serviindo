import { Router } from 'express'
import { randomSong, showSomeSongs, createSong } from '../controller/song.controller.js'

const songRouter = Router()

songRouter.get("/songs", (req, res) => {
  const response = randomSong()
  res.json({ response })
})

songRouter.get("/songs/:number", (req,res) => {
  const { number } = req.params
  const response = showSomeSongs(number)
  res.json({ response })
})

songRouter.post("/songs", (req,res) => {
  const { title, artist, album, genre } = req.body 
  const newSong = createSong(title, artist, album, genre)
  res.status(200).json({ newSong })
})

export { songRouter }