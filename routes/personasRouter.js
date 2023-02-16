const express = require('express');
const router = express.Router();

const personasService = require('./personasService').create();

router.get('/personas/', (req, res) => {
  const personas = personasService.listar();
  return res.json(personas);
});

router.post('/personas/', (req, res) => {
  const nombre = req.body.nombre;
  const nuevaPersona = personasService.agregar(nombre);
  return res.json(nuevaPersona);
});

router.delete('/personas/:id', (req, res) => {
  const id = req.params.id;
  const personaEliminada = personasService.eliminar(id);
  return res.json(personaEliminada);
});

module.exports = router;
