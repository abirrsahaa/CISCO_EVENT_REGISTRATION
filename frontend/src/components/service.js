import { toast } from "react-hot-toast";

import { apiConnector } from "./apiconnector";
import cisco from "../assets/CiscoLogo101.png";

import { COURSE_PAYMENT_API } from "./constans";
import { COURSE_VERIFY_API } from "./constans";
import { SEND_PAYMENT_SUCCESS_EMAIL_API } from "./constans";

import { something } from "./constans";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function buyCourse(mybody, navigate) {
  console.log("inside buyCourse");
  const toastId = toast.loading("Loading...");
  try {
    //load the script
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("RazorPay SDK failed to load");
      return;
    }

    //initiate the order
    const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, {
      mybody,
    });

    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message);
    }
    // console.log(
    //   typeof orderResponse.data.message.amount,
    //   "the orderresponsewalaamount",
    //   orderResponse.data.message.amount
    // );
    // console.log(orderResponse.data.message.amount !== mybody.amount * 100);

    // console.log(typeof mybody.amount, "mybodywala amount", mybody.amount);
    if (orderResponse.data.message.amount !== mybody.amount * 100) {
      console.log("paiso ke sath bakchodi nahi ");
      return;
    }
    // give here validation for email and phone number
    // if (mybody.email === "" || mybody.phone === "") {
    //   toast.error("Please enter valid email and phone number");
    //   return;
    // }
    // if (orderResponse.data.message.email !== mybody.email) {
    //   console.log("email nahi match");
    //   return;
    // }
    console.log("PRINTING orderResponse", orderResponse);
    //options
    const options = {
      key: something,
      currency: orderResponse.data.message.currency,
      amount: `${orderResponse.data.message.amount}`,
      order_id: orderResponse.data.message.id,
      name: "CiscoXlpuIgen",
      description: "Thank You for Purchasing the Workshop",
      image: cisco,
      prefill: {
        name: `${mybody.username}`,
        email: mybody.email,
      },
      handler: function (response) {
        //send successful wala mail
        sendPaymentSuccessEmail(
          response,
          orderResponse.data.message.amount,
          mybody
        );

        //verifyPayment
        verifyPayment({ ...response, mybody }, navigate);
      },
    };
    //miss hogya tha
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      toast.error("oops, payment failed");
      console.log(response.error);
    });
  } catch (error) {
    console.log("PAYMENT API ERROR.....", error);
    toast.error("Could not make Payment");
  }
  toast.dismiss(toastId);
}

//verify payment
async function verifyPayment(bodyData) {
  console.log("inside verify payment frontend");
  const toastId = toast.loading("Verifying Payment....");
  //   dispatch(setPaymentLoading(true));
  try {
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("payment Successful, ypou are addded to the course");

    const newWebsiteUrl = "https://ciscoxlpuigen.co.in/";
    window.location.href = newWebsiteUrl;
    // dispatch(resetCart());
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR....", error);
    toast.error("Could not verify Payment");
  }
  toast.dismiss(toastId);
  //   dispatch(setPaymentLoading(false));
}

// email
async function sendPaymentSuccessEmail(response, amount, mybody) {
  try {
    await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
      orderId: response.razorpay_order_id,
      paymentId: response.razorpay_payment_id,
      amount,
      mybody,
    });
  } catch (error) {
    console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
  }
}
