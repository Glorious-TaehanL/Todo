const mongoose = require('mongoose');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    require: [true, 'Please provide email'],
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide email'],
    minlength: 3,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Please provide password'],
    minlength: 6,
  },
});

UserSchema.pre('save', async function (next) {
  const salt = await bcript.genSalt(10);
  this.password = await bcript.hash(this.password, salt);
  next();
});

UserSchema.methods.getName = function () {
  return this.name;
};

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcript.compare(canditatePassword, this.password);
  return isMatch;
};
module.exports = mongoose.model('User', UserSchema);
