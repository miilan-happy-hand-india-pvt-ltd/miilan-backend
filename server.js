const userRoute = require("./Routers/userRouters");
const MissingdataRoute = require("./Routers/MissingRouter");
const paymentRouter = require("./Routers/PaymentReciveRouter");
const locationRouter = require("./Routers/LocationRouter");
const liveDataRouter = require("./Routers/LiveDataRouter");
const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors({ origin: [process.env.COR_URI, "http://localhost:5173"], credentials: true }));

server.use(express.json({ limit: "20kb" }));
server.use(express.urlencoded({ extended: true, limit: "20kb" }));

server.use("/api", userRoute);
server.use("/api", MissingdataRoute);
server.use("/api", paymentRouter);
server.use("/api", locationRouter);
server.use("/api", liveDataRouter);

module.exports = server;
