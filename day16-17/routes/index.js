var express = require('express');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user-model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user) {
    return res.render('index', { title: req.session.user.name });
  }
  res.render('index', { title: 'Full stack development' });
});

router.get('/signup', function(req, res) {
  res.render('register', { title: 'Signup for my website' });
});

router.get('/login', function(req, res) {
  res.render('login', {title: 'Login'})
});

router.post('/login', async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({ email: email });
  if(user === null) {
    return res.send('User not found');
  }

  const passHash = user.password;

  const passwordMatched = await bcrypt.compare(password, passHash);
  if(passwordMatched) {
    req.session.loggedin = true;
    req.session.user = user.toJSON();
    res.send('Login successful. Welcome ' + user.name);
  }
  else {
    res.send('Login failed. Password mismatch');
  }
});

module.exports = router;
