const Movie = require('../models/movie');
const BadRequestError = require('../errors/bad-request-error');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');

const getAllMovies = (req, res, next) => {
  Movie.find({})
    .populate('owner')
    .then((movies) => {
      res.send(movies);
    })
    .catch(next);
};

const createMovie = (req, res, next) => {
  const { _id } = req.user;
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: _id,
  })
    .then((createddMovie) => {
      Movie.findOne(createddMovie)
        .populate('owner')
        .then((movie) => {
          res.send(movie);
        })
        .catch(next);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  const { _id } = req.user;
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Такой фильм не найден');
      }
      if (movie.owner.toString() !== _id) {
        throw new ForbiddenError('Нет прав для удаления фильма');
      }
      Movie.findByIdAndRemove(movieId)
        .then((deletedMovie) => {
          res.send(deletedMovie);
        })
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  getAllMovies,
  createMovie,
  deleteMovie,
};
