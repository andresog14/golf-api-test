const express = require('express');
const router = express.Router();

// Definir las rutas para el recurso cervezas
router.get('/', (req, res) => {
  res.json({ message: 'Obteniendo todas las cervezas' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Obteniendo la cerveza con id ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Añadiendo una cerveza' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Actualizando la cerveza con id ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Eliminando la cerveza con id ${req.params.id}` });
});

module.exports = router;
