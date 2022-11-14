const validator = require('validator');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'escribe tu nombre'],
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
    required: [true, 'escribe tu email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Por favor escribe un email valido',
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

module.exports = mongoose.model('Course3Sp', UserSchema);
