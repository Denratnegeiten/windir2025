const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const WindirMember = require('./models/windir-member.js').WindirMember;

const membersData = [
    {
        title: "Terje 'Valfar' Bakken",
        nick: "valfar",
        avatar: "/images/pic8.jpg",
        desc: "Основатель, вокал. Создатель жанра Sognametal. Его видение сформировало уникальную атмосферу и лирическую глубину Windir."
    },
    {
        title: "Jarle 'Hvall' Kvåle",
        nick: "hvall",
        avatar: "/images/pic9.png",
        desc: "Бас-гитара. Основатель и ключевой автор музыки группы Vreid, развивающей наследие Sognametal в новом ключе."
    },
    {
        title: "Sture Dingsøyr",
        nick: "sture",
        avatar: "/images/pic11.png",
        desc: "Ритм-гитара. Участник Vreid (гитара) и Cor Scorpii. Внес значительный вклад в мелодическое оформление поздних альбомов."
    },
    {
        title: "Jørn 'Steingrim' Holen",
        nick: "steingrim",
        avatar: "/images/pic13.jpg",
        desc: "Ударные. Член Windir на протяжении всего периода полного состава. Один из основателей и ритмическая основа группы Vreid."
    }
];

async function seed() {
    try {
        await WindirMember.deleteMany({});
        await WindirMember.insertMany(membersData);
        console.log("База данных Windir обновлена! Все участники добавлены.");
        process.exit();
    } catch (err) {
        console.error("Ошибка:", err);
        process.exit(1);
    }
}

seed();