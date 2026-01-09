const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String });

schema.methods.shout = function() {
   console.log(this.name + " поет Sognametal!");
}

const Member = mongoose.model('Member', schema);

const valfar = new Member({ name: 'Valfar' });

valfar.save().then(() => {
    valfar.shout();
    process.exit();
});