const express = require("express");
const Auth = require("../MiddleWare/Authentication");
const locationRouter = express.Router();
const {
  addLocations,
  getLocations,
} = require("../controller/locationsControler");

locationRouter.post("/addlocation",Auth, addLocations);
locationRouter.get("/getlocation",Auth, getLocations);

module.exports = locationRouter;
