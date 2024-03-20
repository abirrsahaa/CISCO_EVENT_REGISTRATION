const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    // required: true,
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

    unique: true,
  },
  university: {
    type: String,
  },
  gender: {
    type: String,
  },
  course: {
    type: String,
  },
  year: {
    type: String,
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
  Referral: {
    type: String,
    default: "none",
  },
  amount: {
    type: Number,
  },
  level: {
    type: String,
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
