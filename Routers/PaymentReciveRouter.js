const express = require("express");
const Auth = require("../MiddleWare/Authentication");

const {
  addPaymentRecive,
  getPaymentRecive,
  upload,
} = require("../controller/paymentReciveControler");
const paymentReciveRoute = express.Router();


paymentReciveRoute.post(
  "/createpayment",
  upload.fields([{ name: "image", maxCount: 1 }]),
  Auth,
  addPaymentRecive
);
paymentReciveRoute.get("/getdatapayment", Auth, getPaymentRecive);

module.exports = paymentReciveRoute;
