var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/hola/', (req, res) => {
  const nombre = req.body.nombre;
  return res.json({
    saludo: `Hola ${nombre}!`
  });
});

module.exports = router;
