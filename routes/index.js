var router = require('express').Router();
var cervezasRoutes = require('./cervezas');

router.use('/cervezas', cervezasRoutes);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Conectado a la API' });
});

module.exports = router;
