const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

//setup env
require('dotenv').config({ path: '.env' });

//mongodb connect
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log(`connected to database`);
  })
  .catch(() => {
    console.log(`error connected to database`);
  });
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/auth', require('./routes/authRouter'))
// app.use(passport.initialize());
// require('./config/passport')(passport);
// const users = require('./routes/users');
// const post = require('./routes/posts');

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
