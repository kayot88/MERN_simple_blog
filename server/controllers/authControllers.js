const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.registerResponse = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const password = req.body.password;
  console.log(password);
  const candida = await User.findOne({
    email: req.body.email
  });
  if (candida) {
    res.status(409).json({
      message: 'Her tam. Takoy zaniat'
    });
  } else {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: bcrypt.hashSync(password, salt)
    })
      .save()
      .then(res.send('user was created'));
    // res.send({ user });
  }
};


