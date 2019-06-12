const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const flash = require('connect-flash');
const errorHandlers = require('./handlers/errorHandlers');

const app = express();
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
// app.use(express.session({ cookie: { maxAge: 60000 } }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

app.use(flash());
// require('./config/passport')(app);

app.use((req, res, next) => {
  // res.locals.currentUser = req.user;
  res.locals.flashes = req.flash();
  // res.locals.success = req.flash('success');
  next();
});
// passport.use(require('./config/passportJwt'));
// passport.use(require('./config/passportLocal'));
// app.use(passport.initialize());

app.use('/api/auth', require('./routes/authRouter'));

app.use(errorHandlers.notFound);
app.use(errorHandlers.flashValidationErrors);

if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
