"use strict";

const bodyParser = require("body-parser");
const methodOverride = require("method-override");

module.exports = {
  initExpress,
};

function initExpress(app) {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use(methodOverride("X-HTTP-Method-Override"));

  app.use(function (req, res, next) {
    console.log("general midd", req.url);
    req.resources = req.resources || {};
    next();
  });
}
