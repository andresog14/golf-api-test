var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

// Middleware para manejar JSON y datos codificados
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importar las rutas desde la carpeta routes
var router = require('./routes');
app.use('/api', router);

// Definir la ruta raíz
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Bienvenido a la API de prueba' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});

module.exports = app;

