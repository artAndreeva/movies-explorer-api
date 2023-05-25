const moviesRouter = require('express').Router();
const {
  validationCreateMovie,
  validationDeleteMovie,
} = require('../middlewares/validation');
const {
  getAllMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getAllMovies);
moviesRouter.post('/', validationCreateMovie, createMovie);
moviesRouter.delete('/:movieId', validationDeleteMovie, deleteMovie);

module.exports = moviesRouter;
