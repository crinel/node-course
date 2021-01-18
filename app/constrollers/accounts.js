"use strict";

const Account = require("../models/accounts");

const getAccounts = (req, res, next) => {
  Account.find()
    .populate("userId", "email")
    .exec((err, result) => {
      returnError(res, err);
      return res.json(result);
    });
};

const getAccountByIdGeneric = (req, res, next) => {
  const { accountId } = req.params;

  Account.find({ _id: accountId }, (err, result) => {
    returnError(res, err);

    req.resources.entity = result;
    next();
  });
};

const deleteByIdGeneric = (req, res, next) => {
  const { accountId } = req.params;
  const params = { _id: accountId };

  Account.deleteOne(params, (errDelete, resultDelete) => {
    returnError(res, errDelete);

    req.resources.resultPrevOperation = resultDelete;
    next();
  });
};

const returnAccountById = (req, res, next) => {
  if (req.resources.entity) {
    return res.json(req.resources.entity);
  } else if (req.resources.resultPrevOperation) {
    return res.json(req.resources.resultPrevOperation);
  } else {
    return res.send("No account  or no previous operation called !");
  }
};

const createAccount = (req, res, next) => {
  const account = new Account(req.body);

  account.save((err, result) => {
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
  getAccounts,
  returnAccountById,
  getAccountByIdGeneric,
  deleteByIdGeneric,
  createAccount,
};
