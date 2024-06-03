const dotenv = require("dotenv");
const cors = require("cors");
const app = require("./server.js");
const Mongodb = require("./Config/Mongodb");

dotenv.config();
Mongodb();

app.use((req, res, next) => {
  console.log("HTTP Method-" + req.method + ", URL -" + req.url);
  next();
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port "+process.env.PORT);
});

app.get("/", (req, res) => {
  res.send("server is running");
});
