const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000 // Usa el puerto proporcionado por Render o el 3000 si no está disponible

// ... Resto de tu configuración ...

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
