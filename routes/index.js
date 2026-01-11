var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

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

router.post('/logreg', async function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  
  console.log("Логин из формы:", username);
  
  // Ищем пользователя в базе данных
  var users = await User.find({username: username});

  if (!users.length) {
    // Если пользователя нет — создаем нового
    var user = new User({username: username, password: password});
    await user.save();
    
    // Сохраняем ID в сессию и редиректим на главную
    req.session.user_id = user._id;
    res.redirect('/');
  } else {
    // Если пользователь найден — проверяем пароль
    var foundUser = users[0];
    if (foundUser.checkPassword(password)) {
      // Пароль верный — сохраняем ID и на главную
      req.session.user_id = foundUser._id;
      res.redirect('/');
    } else {
      // Пароль неверный — возвращаем на страницу входа
      res.render('logreg', { title: 'Вход' });
    }
  }
});

module.exports = router;