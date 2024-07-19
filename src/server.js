import express from 'express'

const app = express()
const port = 1436

app.use(express.json())

app.listen(port, () => {
  console.log(`rodando com sucesso na porta ${port}`)
})