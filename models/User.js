const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: String,
    Password: String,
    username: String,
    thumbnail: String,
    googleId: String

});

const User = mongoose.model('user', userSchema);

module.exports = User;
