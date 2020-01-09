const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RegisterSchema = new Schema({
  Course: {
    type: String,
  },
  College: {
    type: String,
  },
  Stream: {
    type: String,
  },
  Aadhar: {
    type: String,
  },
  Adminyear: {
    type: String,
  },
  Compyear: {
    type: String,
  },
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Contact: {
    type: String,
  },
  AltContact: {
    type: String,
  },
  Address: {
    type: String,
  },
  Landmark: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  pincode: {
    type: String,
    },
});

const RegistrationDetails = mongoose.model('register', RegisterSchema);
module.exports = RegistrationDetails;
