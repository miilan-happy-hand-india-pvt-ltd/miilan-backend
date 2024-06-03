const express = require("express");
const register = require("../controller/registerControler");
const Login = require("../controller/loginControler");
const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/Login", Login);

module.exports = userRoute;
