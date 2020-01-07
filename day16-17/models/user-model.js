const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
