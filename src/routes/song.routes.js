import { Router } from 'express'
import { randomSong } from '../controller/song.controller.js'

const songRouter = Router()

songRouter.get("/songs", (req, res) => {
  const response = randomSong()
  res.json({ response })
})

export { songRouter}