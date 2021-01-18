"use strict";

module.exports = {
  errorHandling,
};

function errorHandling(app) {
  app.use(function (err, req, res, next) {
    console.log("err ", err.message);
  });
}
