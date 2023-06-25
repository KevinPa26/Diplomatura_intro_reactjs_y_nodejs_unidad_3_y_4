var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const texto = req.query.texto
  res.render('example/body', { title: 'Express', layout: 'example/layout', texto });
});

module.exports = router;
