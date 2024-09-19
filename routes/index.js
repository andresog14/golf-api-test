const express = require('express');
const router = express.Router();
const cervezasRoutes = require('./cervezas');

// Ruta para cervezas
router.use('/cervezas', cervezasRoutes);

// Ruta para el prefijo /api
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Conectado a la API' });
});

module.exports = router;

