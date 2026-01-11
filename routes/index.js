var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.session.greeting = "Valfar is watching over the session";
  res.render('index', {
    title: 'Windir Legacy',
    subtitle: 'Наследие Согнаметала',
    counter: req.session.counter,
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

router.get('/logreg', function(req, res, next) {
  res.render('logreg', { title: 'Вход' });
});

router.post('/logreg', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  
  console.log("Логин из формы:", username);
  console.log("Пароль из формы:", password);
  
});

module.exports = router;