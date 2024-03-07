const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  registration: {
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
  razorpay_order_id: {
    type: String,
  },
  razorpay_payment_id: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
