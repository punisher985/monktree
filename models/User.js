const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  password: {
    type: String
  },
  conpassword: {
    type: String
  }
});

const UserDetails = mongoose.model('user', UserSchema);
module.exports = UserDetails;
