const express = require('express');
const router = express.Router();

const holaService = require('./holaService').create();

router.get('/', (req, res) => {
  const saludo = holaService.hola();
  return res.json(saludo);
});

router.post('/', (req, res) => {
    const nombre = req.body.nombre;
    const saludo = holaService.hola(nombre);
    return res.json(saludo);
  });

module.exports = router;
