const authRouter = require('express').Router();
const {
  validationRegister,
  validationAuthorize,
} = require('../middlewares/validation');
const {
  registerUser,
  authorizeUser,
} = require('../controllers/users');

authRouter.post('/signup', validationRegister, registerUser);
authRouter.post('/signin', validationAuthorize, authorizeUser);

module.exports = authRouter;
