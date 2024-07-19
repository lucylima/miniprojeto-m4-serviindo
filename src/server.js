import express from 'express'
import { songRouter } from './routes/song.routes.js'
import { artistRouter } from './routes/artist.routes.js'
import { albumRouter } from './routes/album.routes.js'

const app = express()
const port = 1436

app.use(express.json())
app.use(songRouter)
app.use(artistRouter)
app.use(albumRouter)

app.listen(port, () => {
  console.log(`rodando com sucesso na porta ${port}`)
})