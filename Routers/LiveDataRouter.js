const express = require("express");
const Auth = require("../MiddleWare/Authentication");
const {
  addLiveData,
  getLiveData,
  deleteLiveData,
  updateLiveData,
  upload,
} = require("../controller/liveControler");
const liveRoute = express.Router();

liveRoute.post(
  "/createlive",
  upload.fields([{ name: "image", maxCount: 1 }]),
  Auth,
  addLiveData
);
liveRoute.get("/getlivedata", Auth, getLiveData);
liveRoute.delete("/delete/:id", Auth, deleteLiveData);
liveRoute.put("/update/:id", Auth, updateLiveData);

module.exports = liveRoute;
