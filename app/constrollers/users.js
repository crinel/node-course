"use strict";

const getUsers1 = (req, res, next) => {
  console.log("get users midd 1 ");
  return next();
};

const getUsers2 = (req, res, next) => {
  return res.json({ text: "GET call midd 2" });
};

const postUsers = (req, res, next) => {
  return res.json({ text: "POST call midd 2" });
};

const putUsers = (req, res, next) => {
  return res.json({ text: "PUT call" });
};

module.exports = {
  getUsers1,
  getUsers2,
  postUsers,
  putUsers,
};
