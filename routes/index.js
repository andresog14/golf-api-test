const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

// Middleware para manejar JSON y datos codificados
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importar las rutas desde la carpeta routes
const cervezasRoutes = require('./routes/cervezas');
app.use('/api/cervezas', cervezasRoutes);

// Definir la ruta raíz para la API
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Conectado a la API' });
});

// Ruta raíz del sitio
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Bienvenido a la API de prueba' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});

module.exports = app;
