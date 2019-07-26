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
    required: [true, 'Name field is required']
  },
  Email: {
    type: String,
    required: [true, 'Email field is required']
  },
  Contact: {
    type: String,
    required: [true, 'Contact field is required']
  },
  AltContact: {
    type: String,
    required: [true, 'AltContact field is required']
  },
  Address: {
    type: String,
    required: [true, 'Address field is required']
  },
  Landmark: {
    type: String,
  },
  City: {
    type: String,
    required: [true, 'City field is required']
  },
  State: {
    type: String,
    required: [true, 'State field is required']
  },
  pincode: {
    type: String,
    required: [true, 'pincode field is required']
  },
});

const RegistrationDetails = mongoose.model('register', RegisterSchema);
module.exports = RegistrationDetails;
