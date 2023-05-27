const allowedCors = [
  'https://movies.lajolla.nomoredomains.rocks',
  'http://movies.lajolla.nomoredomains.rocks',
  'https://api.movies.lajolla.nomoredomains.rocks',
  'http://api.movies.lajolla.nomoredomains.rocks',
  'http://localhost:3000',
  'http://localhost:3001',
];

const cors = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
};

module.exports = cors;
