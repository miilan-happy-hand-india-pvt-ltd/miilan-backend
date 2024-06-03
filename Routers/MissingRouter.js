const express = require("express");
const Auth = require("../MiddleWare/Authentication");
const {
  addMissingData,
  getMissingData,
  getMissingUserIdData,
  deleteMissingData,
  updateMissingData,
  upload,
} = require("../controller/MissingDataControler");
const missingRoute = express.Router();


missingRoute.post(
  "/create",
  Auth,
  upload.fields([
    { name: "imageone", maxCount: 1 },
    { name: "imagetwo", maxCount: 1 },
  ]),
  addMissingData
);
missingRoute.get("/getdata", getMissingData);
missingRoute.delete("/delete/:id", Auth, deleteMissingData);
missingRoute.put("/update/:id", Auth, updateMissingData);

missingRoute.get("/getdata/:userId", Auth, getMissingUserIdData);

module.exports = missingRoute;
