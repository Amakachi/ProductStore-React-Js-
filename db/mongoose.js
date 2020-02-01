const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:daniella1@ds149998.mlab.com:49998/heroku_hxfjqrf6',{useNewUrlParser: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
    mongoose
}