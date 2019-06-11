const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const validateLogin = require('../validation/login')                               

const route = require('express').Router();
const {
  loginResponse,
  registerResponse
} = require('../controllers/authControllers');


route.post('/login', loginResponse);
// route.get('/login');
// route.get('/register', (req, res) => {
//   res.redirect('/register');
// });
route.post('/register', registerResponse);
// route.get('/', indexReq);

module.exports = route