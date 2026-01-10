var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Маршрутизатор для участников Windir');
});

router.get("/:nick", function(req, res, next) {
    res.send("Вы запрашиваете информацию об участнике: " + req.params.nick);
});

module.exports = router;