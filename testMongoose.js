const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const Member = mongoose.model('Member', { name: String });

const valfar = new Member({ name: 'Valfar' });

valfar.save().then(() => {
    console.log('Sognametal saved!');
    process.exit();
});