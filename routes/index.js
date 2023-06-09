const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { createNewUser, login, logout } = require('../controllers/users');
const users = require('./users');
const movies = require('./movies');
const { auth } = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
}), createNewUser);

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
}), login);

router.post('/signout', logout);

router.use('/users', auth, users);

router.use('/movies', auth, movies);

router.all('*', auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
