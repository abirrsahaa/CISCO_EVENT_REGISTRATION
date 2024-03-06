const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  RegistrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  event1: {
    type: String,
  },
  event2: {
    type: String,
  },
  event: {
    type: String,
  },
  techtalk: {
    type: Boolean,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
