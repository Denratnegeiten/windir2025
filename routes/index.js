var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { 
    title: 'Windir Legacy',
    subtitle: 'Наследие Согнаметала',
    albums: ['Likferd', '1184', 'Arntor', 'Sóknardalr']
  });
});

module.exports = router;
