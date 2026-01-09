const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var WindirMember = require('./models/windir-member.js').WindirMember;

var valfar = new WindirMember({
   title: "Terje Bakken",
   nick: "valfar", 
   desc: "Valfar — вокалист и основатель Windir."
});

valfar.save()
  .then(() => {
      console.log("Участник Windir сохранен!");
      process.exit();
  })
  .catch(err => {
      console.log("Ошибка валидации:", err.message);
      process.exit();
  });