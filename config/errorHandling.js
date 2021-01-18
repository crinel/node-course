"use strict";

module.exports = {
  errorHandling,
};

function errorHandling(app) {
  app.use(function (err, req, res, next) {
    console.log("err ", err.message);

    return res.status(err.statusCode || 400).json(err);
  });
}
