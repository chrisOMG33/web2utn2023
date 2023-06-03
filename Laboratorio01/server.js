const express = require('express');
const app = express();

// routes
app.get('/clientes', clienteController.obtenerTodos);
app.get('/clientes/:cedula', clienteController.obtenerPorCedula);

// listen port
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
