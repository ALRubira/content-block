const express = require('express');
const bodyParser = require('body-parser');
const SDK = require('blocksdk');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir el archivo block.js
app.get('/block.js', (req, res) => {
  res.sendFile(__dirname + '/block.js');
});

// Ruta principal
app.get('/', (req, res) => {
  res.status(200).send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Función principal que se ejecuta al cargar el bloque
async function init() {
  // Registra un evento para el cambio de contenido en el formulario
  SDK.getData('userQuestion', async function (data) {
    // Realiza acciones según los datos recibidos
    // Puedes agregar lógica adicional aquí

    // Ejemplo: Loguea en la consola la pregunta del usuario
    console.log('Pregunta del usuario:', data.userQuestion);
  });

  // Registra un evento para el botón de envío
  SDK.registerSubmitHandler(async function () {
    // Realiza acciones al enviar el formulario
    // Puedes agregar lógica adicional aquí

    // Ejemplo: Envía un mensaje al usuario en el contenedor de diálogo
    SDK.setSuperContent('<div class="assistant-message">¡Mensaje del asistente!</div>');
  });

  // Ejecuta acciones adicionales según sea necesario
  // Puedes agregar más lógica aquí

  // Ejemplo: Loguea en la consola un mensaje de inicialización
  console.log('Bloque cargado y listo para su uso');
}

// Inicia el bloque llamando a la función principal
init();