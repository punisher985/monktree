const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ForgotSchema = new Schema({
  Email: {
    type: String,
    required: [true, 'Email field is required']
  }
});

const ForgotDetails = mongoose.model('forgotpass', ForgotSchema);
module.exports = ForgotDetails;
