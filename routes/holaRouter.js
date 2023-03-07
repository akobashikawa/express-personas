const express = require("express");
const router = express.Router();

const holaService = require("./holaService").create();

router.get("/", (req, res) => {
  // #swagger.summary = 'Devuelve un saludo al mundo'
  const saludo = holaService.hola();
  return res.json(saludo);
});

router.post("/", (req, res) => {
  // #swagger.summary = 'Devuelve un saludo a la persona indicada'
  const nombre = req.body.nombre;
  const saludo = holaService.hola(nombre);
  return res.json(saludo);
});

module.exports = router;
