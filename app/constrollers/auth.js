"use strict";

const login = (req, res, next) => {
  console.log("req.body ", req.body);
  console.log("req.query.isAdmin ", req.query.isAdmin);
  return req.query.isAdmin
    ? next()
    : res.send("You are not authorised to access this resource");
};

module.exports = {
  login,
};
