const mongoose = require('mongoose');
const { regExUrl, badFormatMessage } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => regExUrl.test(value),
      message: badFormatMessage,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (value) => regExUrl.test(value),
      message: badFormatMessage,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (value) => regExUrl.test(value),
      message: badFormatMessage,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('movie', userSchema);
