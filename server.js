const express = require('express');

const app = express();

const PORT = 3000;


//express recibe el path y ejecuta la callback function,
//en la cual usamos res.send() para enviar info de vuelta al cliente
app.get("/", (req, res) => {
    res.send("Esta es la info que me has pedido desde la ruta /");
});

// Middleware para parsear JSON (muy útil, aunque aquí buscamos string)
// Express.json() es clave para manejar el cuerpo de las peticiones POST
app.use(express.json());
const messages = [];

app.post('/agregar-mensaje', (req, res) => {
  const mensaje = req.body.mensaje;

  if (!mensaje) {
    return res.status(400).send('No se proporcionó el mensaje');
  }
  messages.push(mensaje);
  console.log('Mensaje recibido:', mensaje);
  res.send('Mensaje recibido y guardado');
});

//obtener mensajes guardados
app.get('/messages', (req, res) => {
  res.json(messages);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// codigo para probar ruta post del lado del cliente (browser)

/**fetch('/agregar-mensaje', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ mensaje: 'Mensaje de prueba' })
});**/