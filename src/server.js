import express from 'express'
import { songRouter } from './routes/song.routes.js'

const app = express()
const port = 1436

app.use(express.json())
app.use(songRouter)

app.listen(port, () => {
  console.log(`rodando com sucesso na porta ${port}`)
})