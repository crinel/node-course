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
  console.log(" req.body  ", req.body);
  const user = new User(req.body);

  if (user.name.length < 3) {
    // return next("some argumesnt");
    return next({
      statusCode: 422,
      message: "The name is smaller then 3 chars !",
    });
  }

  user.save((err, result) => {
    returnError(res, err);

    return res.json(result);
  });
};

const returnError = (res, err) => {
  console.log("the res and err ", err);
  // if (err) {
  //   return res.status(404).json(err);
  // }
  if (err) {
    // the statusCode property does ot exist, we put it depending on own logic
    err.statusCode = 422;
    return next(err);
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
