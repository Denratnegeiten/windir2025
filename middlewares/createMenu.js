// Подключаем ТВОЮ модель участников
var WindirMember = require("../models/windir-member").WindirMember;

module.exports = async function(req, res, next) {
  res.locals.nav = []; // Создаем пустой массив для навигации

  try {
    // Ищем всех участников, берем только title и nick
    var menu = await WindirMember.find({}, { _id: 0, title: 1, nick: 1 });
    console.log("Сформированное меню:", menu); // Для отладки

    if (menu.length !== 0) {
      res.locals.nav = menu; // Записываем данные в глобальную переменную шаблонов
    }
  } catch (err) {
    console.error("Ошибка при создании меню:", err);
  }
  
  next();
};