const usersRouter = require('express').Router();
const {
  validationUpdateUser,
} = require('../middlewares/validation');
const {
  getUser,
  updateUser,
} = require('../controllers/users');

usersRouter.get('/me', getUser);
usersRouter.patch('/me', validationUpdateUser, updateUser);

module.exports = usersRouter;
