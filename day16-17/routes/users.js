var express = require('express');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user-model');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await UserModel.find({ city: 'Chennai' });
    res.json(users);
    console.log('response sent successfully..');
  }
  catch(err) {
    console.log('err', err.message);
    res.send('Query failed');
  }

  // UserModel.find({})
  //   .then(users => {
  //     res.json(users);
  //   })
  //   .then(() => {
  //     console.log('response sent successfully..');
  //   })
  //   .catch(err => {
  //     console.log('err', err.message);
  //     res.send('Query failed');
  //   });
});

router.post('/create', async function(req, res) {
  const name = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;

  if(name === undefined || email === undefined || password === undefined) {
    res.send('Fill in all fields to continue');
  }

  const passwordHash = await bcrypt.hash(password, 8);

  const newUser = new UserModel({
    name: name,
    email: email,
    password: passwordHash
  });

  newUser.save()
    .then(function() {
      res.send('USer saved successfully!');
    })
    .catch(err => {
      console.log(err.message);
      return res.send('Could not save user');
    });
});

module.exports = router;
