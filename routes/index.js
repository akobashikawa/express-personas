var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/holamundo', function(req, res, next) {
  res.json({ saludo: 'Hola Mundo!'});
});

module.exports = router;
