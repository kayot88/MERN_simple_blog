const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const flash = require('connect-flash');

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
// app.use(express.session({ cookie: { maxAge: 60000 } }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
// );
// app.use(flash());
// require('./config/passport')(app);

app.use('/api/auth', require('./routes/authRouter'));


// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   res.locals.error = req.flash('error');
//   res.locals.success = req.flash('success');
//   next();
// });
// passport.use(require('./config/passportJwt'));
// passport.use(require('./config/passportLocal'));
// app.use(passport.initialize());

// passport.use(
//   new LocalStrategy(function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false);
//       }
//       if (!user.verifyPassword(password)) {
//         return done(null, false);
//       }
//       return done(null, user);

//     });
//   })
// );

// app.use(passport.initialize());
// require('./config/passport')(passport);
// const users = require('./routes/users');
// const post = require('./routes/posts');

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
