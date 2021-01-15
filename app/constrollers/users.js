"use strict";

const User = require("../models/users");

const getUsers = (req, res, next) => {
  User.find((err, result) => {
    returnError(err);

    return res.json(result);
  });
};

const getUserById = (req, res, next) => {
  const { userId } = req.params;

  User.find(
    {
      _id: userId,
    },
    (err, result) => {
      returnError(err);
      return res.json(result);
    }
  );
};

const findUserGeneric = (req, res, next) => {
  const { userId } = req.params;

  User.find({ _id: userId }, (err, result) => {
    returnError(err);

    req.resources.user = result;
    next();
  });
};

const deleteById2 = (req, res, next) => {
  const { userId } = req.params;
  const params = { _id: userId };

  User.deleteOne(params, (errDelete, resultDelete) => {
    returnError(errDelete);

    if (req.resources.user) {
      return res.json(req.resources.user);
    } else {
      return res.json(result);
    }
  });
};

const deleteById = (req, res, next) => {
  const { userId } = req.params;
  const params = { _id: userId };

  User.find(params, (err, result) => {
    returnError(err);

    User.deleteOne(params, (errDelete, resultDelete) => {
      returnError(err);
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
    returnError(err);

    return res.json(result);
  });
};

const returnError = (err) => {
  if (err) {
    return res.status(404).json(err);
  }
};

module.exports = {
  getUsers,
  getUserById,
  findUserGeneric,
  deleteById,
  deleteById2,
  putUsers,
  createUser,
};
