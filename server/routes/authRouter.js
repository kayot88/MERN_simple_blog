const route = require('express').Router();
const
  // loginResponse,
  {registerResponse}
= require('../controllers/authControllers');


// route.post('/login', loginResponse);
route.post('/register', registerResponse);
// route.get('/', indexReq);

module.exports = route