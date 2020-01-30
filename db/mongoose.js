const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProductStore',{useNewUrlParser: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
    mongoose
}