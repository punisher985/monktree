const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AcademicSchema = new Schema({
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
  }
});

const AcademicDetails = mongoose.model('academics', AcademicSchema);
module.exports = AcademicDetails;
