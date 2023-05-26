const NotFoundError = require('../errors/not-found-error');
const { notFoundMessage } = require('../utils/constants');

const wrongPath = (res, req, next) => {
  next(new NotFoundError(notFoundMessage));
};

module.exports = { wrongPath };
