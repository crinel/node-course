"use strict";

const User = require("../models/users");

const getUsers = (req, res, next) => {
  User.find((err, result) => {
    if (err) {
      //console.log("GET error ", err);
      return res.status(404).json(err);
    }

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
      if (err) {
        //console.log("GET error ", err);
        return res.status(404).json(err);
      }

      return res.json(result);
    }
  );
};

const deleteById = (req, res, next) => {
  const { userId } = req.params;

  User.deleteOne(
    {
      _id: userId,
    },
    (err, result) => {
      if (err) {
        //console.log("GET error ", err);
        return res.status(404).json(err);
      }

      return res.json(result);
    }
  );
};

const putUsers = (req, res, next) => {
  return res.json({ text: "PUT call" });
};

const createUser = (req, res, next) => {
  //console.log(" req.body  ", req.body);
  const user = new User(req.body);

  user.save((err, result) => {
    if (err) {
      //console.log("POST error ", err);
      return res.status(404).json(err);
    }

    return res.json(result);
  });
};

module.exports = {
  getUsers,
  getUserById,
  deleteById,
  putUsers,
  createUser,
};
