const express = require('express');
const router = express.Router();

const personasService = require('./personasService').create();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const persona = personasService.traer(id);
  return res.json(persona);
});

router.get('/', (req, res) => {
  const personas = personasService.listar();
  return res.json(personas);
});

router.post('/', (req, res) => {
  const nombre = req.body.nombre;
  const nuevaPersona = personasService.agregar(nombre);
  return res.json(nuevaPersona);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const nombre = req.body.nombre;
  const persona = personasService.guardar(id, nombre);
  return res.json(persona);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const personaEliminada = personasService.eliminar(id);
  return res.json(personaEliminada);
});

module.exports = router;
