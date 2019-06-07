const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// const users = require('./routes/users');
// const post = require('./routes/posts');

//setup env
require('dotenv').config({ path: '.env' });

//mongodb connect
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const app = express()
// app.use(passport.initialize());
// require('./config/passport')(passport);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}` );
});
