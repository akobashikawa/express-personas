var express = require('express');
var router = express.Router();

router.get('/holamundo/', (req, res) => {
  return res.json({
    saludo: `Hola Mundo!`
  });
});

router.post('/hola/', (req, res) => {
  const nombre = req.body.nombre;
  return res.json({
    saludo: `Hola ${nombre}!`
  });
});

module.exports = router;
