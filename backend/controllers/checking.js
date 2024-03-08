const { mongoose } = require("mongoose");
const User = require("../model/User");

exports.checking = async (req, res) => {
  console.log("inside checking ");

  console.log("the req body", req.body);

  const { phone, email, registration } = req.body;
  console.log("the phone", phone);
  console.log("the email", email);
  console.log("the registration", registration);

  const existing = await User.findOne({
    $or: [{ email }, { phone }, { registration }],
  });

  if (existing) {
    return res.json({ success: false, message: "User already exists" });
  }
  return res.json({ success: true, message: "User does not exist" });
};
