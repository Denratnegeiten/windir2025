var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Windir Legacy',
    subtitle: 'Наследие Согнаметала',
    albums: ['Likferd', '1184', 'Arntor', 'Sóknardalr']
  });
});

router.get('/biography', (req, res) => res.render('biography', { title: 'Биография Windir' }));
router.get('/discography', (req, res) => res.render('discography', { title: 'Дискография Windir' }));
router.get('/gallery', (req, res) => res.render('gallery', { title: 'Галлерея Windir' }));

router.get('/success', function(req, res) {
  res.render('success');
});

router.post('/subscribe', function(req, res) {
  const email = req.body.user_email;
  console.log("Подписан новый адрес:", email);
  res.redirect('/success'); 
});

module.exports = router;