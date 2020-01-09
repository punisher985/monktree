const mongoose = require('mongoose');
const RegistrationDetails = require('./register')
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
  },
  registering: {
    type: Schema.Types.ObjectId, ref: 'register'
  }
});

const UserDetails = mongoose.model('user', UserSchema);
module.exports = UserDetails;
