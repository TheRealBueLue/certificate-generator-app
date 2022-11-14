const validator = require('validator');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'provide name'],
    minLength: 3,
    maxLength: 50,
  },
  surname: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'provide email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'please provide valid email',
    },
  },
  message: {
    type: String,
    maxlength: 400,
  },
  course: {
    type: String,
  },
});

module.exports = mongoose.model('Course8', UserSchema);
