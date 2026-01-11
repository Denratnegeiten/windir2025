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
  res.render('success', { 
    title: 'Подписка оформлена' 
  });
});

router.post('/subscribe', function(req, res) {
  const email = req.body.user_email;
  console.log("Подписан новый адрес:", email);
  res.redirect('/success'); 
});

router.get('/logreg', function(req, res, next) {
  res.render('logreg', { title: 'Вход', error: null });
});

router.post('/logreg', async function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  
  var users = await User.find({username: username});

  if (!users.length) {
    var user = new User({username: username, password: password});
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
  } else {
    var foundUser = users[0];
    if (foundUser.checkPassword(password)) {
      req.session.user_id = foundUser._id;
      res.redirect('/');
    } else {
      res.render('logreg', { title: 'Вход', error: 'Пароль не верный' });
    }
  }
});

router.post('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    if (err) return next(err);
    res.locals.user = null;
    res.redirect('/');
  });
});

module.exports = router;