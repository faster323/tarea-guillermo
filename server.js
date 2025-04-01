const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); // Agrega esta línea

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Modifica esta línea
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});