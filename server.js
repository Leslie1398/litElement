const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // Sirve archivos estáticos desde tu directorio actual

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
