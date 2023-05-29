const router = require('express').Router();
const auth = require('../middlewares/auth');
const authRouter = require('./auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const wrongPathRouter = require('./wrongPath');

router.use('/', authRouter);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/*', wrongPathRouter);

module.exports = router;
