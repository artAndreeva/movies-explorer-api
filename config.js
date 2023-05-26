require('dotenv').config();

const {
  PORT = 3000,
  BASE_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  JWT_SECRET = 'dev-secret',
} = process.env;

module.exports = { PORT, BASE_URL, JWT_SECRET };
