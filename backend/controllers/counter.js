const { mongoose } = require("mongoose");
const User = require("../model/User");

exports.countBasic = async (req, res) => {
  console.log("inside countBasic");
  const basic = await User.find({ level: "Basic" });
  console.log("the basic is ", basic);
  const length = 0;
  if (basic.length === 0) {
    length = 0;
  } else {
    length = basic.length;
  }
  console.log("the length of basic is ", length);
  res.json({ success: true, message: length });
};

exports.countExplorer = async (req, res) => {
  console.log("inside countExplorer");
  const explorer = await User.find({ level: "Explorer" });
  const length = 0;
  if (explorer.length === 0) {
    length = 0;
  } else {
    length = explorer.length;
  }
  console.log("the length of explorer is ", length);
  res.json({ success: true, message: length });
};

exports.countEnthusiast = async (req, res) => {
  console.log("inside countEnthusiast");
  const enthusiast = await User.find({ level: "Enthusiast" });
  const length = 0;
  if (enthusiast.length === 0) {
    length = 0;
  } else {
    length = enthusiast.length;
  }
  console.log("the length of enthusiast is ", length);
  res.json({ success: true, message: length });
};
