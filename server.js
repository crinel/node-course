"use strict";

const express = require("express");
const app = express();

const config = require("./config");

require("./config/express").initExpress(app);
require("./config/routes").initRoutes(app);
require("./config/mongoose").initMongoose(app);

app.get("/users", function (req, res, next) {
  console.log("users route");
  return res.json({ text: "Hello", date: req.currentDate });
});

app.listen(config.PORT, function () {
  console.log("App is running on port 3000!");
});
