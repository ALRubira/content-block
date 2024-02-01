// Importa el módulo del Blocks SDK
const SDK = require('blocksdk')

// Crea una instancia del SDK
const sdk = new SDK()

// Función principal que se ejecuta al cargar el bloque
async function init () {
  // Registra un evento para el cambio de contenido en el formulario
  sdk.getData('userQuestion', async function (data) {
    // Realiza acciones según los datos recibidos
    // Puedes agregar lógica adicional aquí

    // Ejemplo: Loguea en la consola la pregunta del usuario
    console.log('Pregunta del usuario:', data.userQuestion)
  })

  // Registra un evento para el botón de envío
  sdk.registerSubmitHandler(async function () {
    // Realiza acciones al enviar el formulario
    // Puedes agregar lógica adicional aquí

    // Ejemplo: Envía un mensaje al usuario en el contenedor de diálogo
    sdk.setSuperContent('<div class="assistant-message">¡Mensaje del asistente!</div>')
  })

  // Ejecuta acciones adicionales según sea necesario
  // Puedes agregar más lógica aquí

  // Ejemplo: Loguea en la consola un mensaje de inicialización
  console.log('Bloque cargado y listo para su uso')
}

// Inicia el bloque llamando a la función principal
init()
