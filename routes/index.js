var express = require('express');
var router = express.Router();

/* Страница первого объекта */
router.get('/alb1', function(req, res, next) {
  res.send("<h1>Страница Альбома 1</h1>")
});

/* Страница второго объекта */
router.get('/alb2', function(req, res, next) {
  res.send("<h1>Страница Альбома 2</h1>")
});

/* Страница третьего объекта */
router.get('/alb3', function(req, res, next) {
  res.send("<h1>Страница Альбома 3</h1>")
});

module.exports = router;
