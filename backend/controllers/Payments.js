const { instance } = require("./Razorpay");
const { mongoose } = require("mongoose");
const User = require("../model/User");
const { paymentSuccessEmail } = require("../utils/paymentSuccessful");
const mailSender = require("../utils/mailsender");

exports.capturePayment = async (req, res) => {
  // body ami bair korum nijer mone koira

  console.log("inside capture payment backend");

  const { username, email, phone, registration, event, techtalk, amount } =
    req.body;

  console.log("the req body is ", req.body);
  console.log("the amount is ", amount);

  const totalAmount = req.body.mybody.amount;
  const option = req.body.mybody.option;
  if (option !== 1 && totalAmount !== 400) {
    console.log("laude paisa nahi badalna");
    return;
  }

  if (option !== 2 && totalAmount !== 500) {
    console.log("laude paisa nahi badalna");
    return;
  }

  if (option !== 3 && totalAmount !== 1000) {
    console.log("laude paisa nahi badalna");
    return;
  }

  const currency = "INR";
  const options = {
    amount: totalAmount * 100,
    currency,
    receipt: Math.random(Date.now()).toString(),
  };

  try {
    const paymentResponse = await instance.orders.create(options);
    res.json({
      success: true,
      message: paymentResponse,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, mesage: "Could not Initiate Order" });
  }
};

exports.verifyPayment = async (req, res) => {
  const crypto = require("crypto");
  console.log("inside verify payment backend");
  const razorpay_order_id = req.body?.razorpay_order_id;
  const razorpay_payment_id = req.body?.razorpay_payment_id;
  const razorpay_signature = req.body?.razorpay_signature;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(200).json({ success: false, message: "Payment Failed" });
  }

  let body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    //enroll karwao student ko
    // await enrollStudents(courses, userId, res);
    console.log("the payment is verified");
    console.log(req.body);
    console.log("razorpay_order_id", razorpay_order_id);
    console.log("razorpay_payment_id", razorpay_payment_id);
    console.log("razorpay_signature", razorpay_signature);
    const user = await User.create({
      username: req.body.mybody.username,
      email: req.body.mybody.email,
      phone: req.body.mybody.phone,
      registration: req.body.mybody.registration,
      event: req.body.mybody.event,
      event1: req.body.mybody.event1,
      event2: req.body.mybody.event2,
      techtalk: req.body.mybody.techtalk,
      razorpay_order_id: razorpay_order_id,
      razorpay_payment_id: razorpay_payment_id,
    });
    console.log("the user is ", user);
    //return res
    return res
      .status(200)
      .json({ success: true, message: "Payment Verified", user });
  }
  return res.status(200).json({ success: "false", message: "Payment Failed" });
};

exports.sendPaymentSuccessEmail = async (req, res) => {
  const { orderId, paymentId, amount } = req.body;
  console.log(req.body);

  // const userId = req.user.id;

  if (!orderId || !paymentId || !amount) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }

  try {
    //student ko dhundo
    // const enrolledStudent = await User.findById(userId);
    await mailSender(
      req.body.mybody.email,
      `Payment Recieved`,
      paymentSuccessEmail(
        `${req.body.mybody.username}`,
        `${req.body.mybody.event}`,
        `${req.body.mybody.event1}`,
        `${req.body.mybody.event2}`,
        `${req.body.mybody.registration}`,
        `${req.body.mybody.techtalk}`,
        amount / 100,
        orderId,
        paymentId
      )
    );
  } catch (error) {
    console.log("error in sending mail", error);
    return res
      .status(500)
      .json({ success: false, message: "Could not send email" });
  }
};
