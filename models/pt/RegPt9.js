const validator = require('validator');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Escreva nome'],
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
    required: [true, 'Escreva email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Favor escrever um email valido',
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

module.exports = mongoose.model('Course9Pt', UserSchema);
