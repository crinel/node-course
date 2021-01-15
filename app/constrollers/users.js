"use strict";

const User = require("../models/users");

const getUsers = (req, res, next) => {
  User.find((err, result) => {
    returnError(res, err);
    return res.json(result);
  });
};

const getUserByIdGeneric = (req, res, next) => {
  const { userId } = req.params;

  User.find({ _id: userId }, (err, result) => {
    returnError(res, err);

    req.resources.entity = result;
    next();
  });
};

const deleteByIdGeneric = (req, res, next) => {
  const { userId } = req.params;
  const params = { _id: userId };

  User.deleteOne(params, (errDelete, resultDelete) => {
    returnError(res, errDelete);

    req.resources.resultPrevOperation = resultDelete;
    next();
  });
};

const returnUserById = (req, res, next) => {
  if (req.resources.entity) {
    return res.json(req.resources.entity);
  } else if (req.resources.resultPrevOperation) {
    return res.json(req.resources.resultPrevOperation);
  } else {
    return res.send("No user or no previous operation called !");
  }
};

const deleteById = (req, res, next) => {
  const { userId } = req.params;
  const params = { _id: userId };

  User.find(params, (err, result) => {
    returnError(res, err);

    User.deleteOne(params, (errDelete, resultDelete) => {
      returnError(res, err);
      return res.json(result);
    });
  });
};

const putUsers = (req, res, next) => {
  return res.json({ text: "PUT call" });
};

const createUser = (req, res, next) => {
  //console.log(" req.body  ", req.body);
  const user = new User(req.body);

  user.save((err, result) => {
    returnError(res, err);

    return res.json(result);
  });
};

const returnError = (res, err) => {
  if (err) {
    return res.status(404).json(err);
  }
};

module.exports = {
  getUsers,
  returnUserById,
  getUserByIdGeneric,
  deleteById,
  deleteByIdGeneric,
  putUsers,
  createUser,
};
