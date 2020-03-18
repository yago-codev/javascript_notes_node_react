const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_TOKEN;

module.exports = {
  create: async(req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });

    try {
      await user.save();
      res.status(200).json(user);
    }
    catch (err) {
      res.status(500).json({ error: 'Error registering new user!' });
    }
  },
  login: async function(req, res) {
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      if (!user)
        res.status(401).json({ error: 'Incorrect email or password' });
      else {
        user.validatePassword(password, function(err, same) {
          if (!same)
            res.status(401).json({ error: 'Incorrect email or password' });
          else {
            const token = jwt.sign({ email }, process.env.JWT_TOKEN, { expiresIn: '10d' });
            res.json({ user: user, token: token });
          }
        });
      }
    }
    catch (error) {
      res.status(500).json({ error: 'Internal error, please try again' });
    }
  }
}
