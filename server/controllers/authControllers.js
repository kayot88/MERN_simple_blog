const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const MongoStore = require('connect-mongo')(session);
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');

const createToken = user => {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '1d' });
};
exports.registerResponse = async (req, res) => {
  const { password, email, username } = req.body;
  const candida = User.findOne({
    email, username
  });
  try {
    if (candida && candida.length>0) {
      throw Error('stupid')
    } else {
      const salt = bcrypt.genSaltSync(10);
      const user = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(password, salt)
      });
      const token = createToken(user.toJSON());
      return res.json({ token });
    }
  } catch (error) {
    return new Error('Userwas used')
  }
};

exports.loginResponse = function(req, res, next) {
  // req.flash('warninig', 'user was found')
  const { username } = req.body;
  User.findOne({ username }).then(user => {
    if (user) {
      const hash = user.password;
      console.log(req.body.password);
      const compared = bcrypt.compare(req.body.password, hash);
      console.log(compared);
      if (compared) {
        const token = jwt.sign(
          { id: user._id },
          process.env.SECRET,
          { expiresIn: '1d' },
          function(err, token) {
            return res.json({
              success: true,
              token: token
            });
          }
        );
      } else {
        console.log(req.body.password);
        console.log(user.password);
        errors.password = 'Password is incorrect';
        return res.status(404).json(errors);
      }
    }
  });
};

