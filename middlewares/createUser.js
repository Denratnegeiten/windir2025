var User = require("../models/user").User;

module.exports = async function(req, res, next) {
  res.locals.user = null; // По умолчанию пользователя нет

  if (!req.session.user_id) {
    return next();
  }

  try {
    // Ищем пользователя по ID из сессии
    var user = await User.findById(req.session.user_id);
    if (user) {
      res.locals.user = user; // Передаем данные пользователя во все шаблоны
    }
    next();
  } catch (err) {
    next(err);
  }
};