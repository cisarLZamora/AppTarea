var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tasks', function(req, res, next)  {
  res.send({
    nombre: "cisa",
    edad: 20
  })
});




module.exports = router;
