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

router.get('/biography', (req, res) => res.render('biography', { title: 'Биография Windir' }));
router.get('/discography', (req, res) => res.render('discography', { title: 'Дискография Windir' }));
router.get('/gallery', (req, res) => res.render('gallery', { title: 'Галлерея Windir' }));

/* Обработка формы подписки */
/* Страница подтверждения (GET) */
router.get('/success', function(req, res) {
  res.render('success');
});

/* Обработка формы (POST) */
router.post('/subscribe', function(req, res) {
  const email = req.body.user_email;
  console.log("Подписан новый адрес:", email);
  
  // Вместо res.send используем редирект на созданный выше адрес
  res.redirect('/success'); 
});

module.exports = router;
