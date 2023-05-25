const NotFoundError = require('../errors/not-found-error');

const wrongPath = (res, req, next) => {
  next(new NotFoundError('Такой страницы нет'));
};

module.exports = { wrongPath };
