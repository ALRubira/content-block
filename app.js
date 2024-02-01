const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// ... Resto de tu configuración ...

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
