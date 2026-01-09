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

/* Обработка формы подписки */
router.post('/subscribe', function(req, res) {
  const email = req.body.user_email;
  console.log("Получен email для подписки:", email);
  
  res.send("Спасибо за подписку! Мы будем присылать новости на " + email);
});

module.exports = router;
