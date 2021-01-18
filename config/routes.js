"use strict";

const path = require("path");

module.exports = {
  initRoutes,
};

function initRoutes(app) {
  console.log("dirname ", __dirname);
  const routesPath = path.join(__dirname, "../app/routes");
  const routes = ["users", "accounts"];

  routes.forEach(function (route) {
    app.use(require(`${routesPath}/${route}`));
  });

  // app.use(require(`${routesPath}/users`))
}
