const { serverErrorMessage } = require('../utils/constants');

const handleErrorCentralized = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode)
    .send({
      message: statusCode === 500
        ? serverErrorMessage
        : message,
    });
  next();
};

module.exports = handleErrorCentralized;
