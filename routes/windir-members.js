var express = require('express');
var router = express.Router();
var WindirMember = require('../models/windir-member').WindirMember;

router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор для участников Windir');
});

router.get("/:nick", async function(req, res, next) {
    try {
        var members = await WindirMember.find({nick: req.params.nick});
        
        console.log(members);

        if (!members.length) {
            return next(new Error("Такого участника нет в архивах Windir Legacy"));
        }

        var member = members[0];

        res.render('member', {
            title: member.title,
            picture: member.avatar,
            desc: member.desc
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;