const express = require('express');
const router = express.Router();

const personasService = require('./personasService').create();

router.post('/personas/', (req, res) => {
  const nombre = req.body.nombre;
  const nuevaPersona = personasService.agregar(nombre);
  return res.json(nuevaPersona);
});

module.exports = router;
