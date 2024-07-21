import { Router } from 'express'
import { randomArtist, showSomeArtists, createArtist } from '../controller/artist.controller.js'

const artistRouter = Router()

artistRouter.get('/artist', (req, res) => {
  const response = randomArtist()
  res.json({ response })
})

artistRouter.get("/artist/:number", (req,res) => {
  const { number } = req.params
  const response = showSomeArtists(number)
  res.json({ response })
})

artistRouter.post("/artist", (req,res) => {
  const { name } = req.body 
  const newArtist = createArtist(name)
  res.status(200).json({ newArtist })
})

export { artistRouter }