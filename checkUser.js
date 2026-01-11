var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/windirMongoose2025");
var User = require("./models/user").User;

var first_user = new User({
  username: "Valfar_New", 
  password: "sognametal_password"
});

first_user.save()
  .then(() => {
    console.log("Пользователь сохранен!");
    process.exit();
  })
  .catch(err => {
    console.error("Ошибка при сохранении:", err);
    process.exit(1);
  });