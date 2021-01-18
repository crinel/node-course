"use strict";

const express = require("express");
const app = express();

const config = require("./config");

require("./config/express").initExpress(app);
require("./config/routes").initRoutes(app);
require("./config/mongoose").initMongoose(app);
require("./config/finalRoute").finalRoute(app);

app.listen(config.PORT, function () {
  console.log("App is running on port 3000!");
});
