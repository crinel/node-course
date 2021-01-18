"use strict";

module.exports = {
  finalRoute,
};

function finalRoute(app) {
  app.use(function (req, res, next) {
    console.log("middleware before app.all");
    return res.status(404).json({
      status: "fail",
      message: `Can't find ${req.url} on this server !`,
    });
  });

  app.all("*", function (req, res, next) {
    console.log("app.all middleware");
    return res.status(404).json({
      status: "fail",
      message: `Can't find ${req.url} on this server !`,
    });
  });
}
