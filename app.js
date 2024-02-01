const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT ?? 1234

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).send('¡Hola, mundo!')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
