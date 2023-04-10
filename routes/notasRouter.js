const express = require('express');
const router = express.Router();

const notasService = require('./notasService').create();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const nota = notasService.traer(id);
  return res.json(nota);
});

router.get('/', (req, res) => {
  const notas = notasService.listar();
  return res.json(notas);
});

router.post('/', (req, res) => {
  const texto = req.body.texto;
  const nuevanota = notasService.agregar(texto);
  return res.json(nuevanota);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const texto = req.body.texto;
  const nota = notasService.guardar(id, texto);
  return res.json(nota);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const notaEliminada = notasService.eliminar(id);
  return res.json(notaEliminada);
});

module.exports = router;
