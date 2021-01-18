"use strict";

const express = require("express");
// const authCtrl = require("./../constrollers/auth");
const accountsCtrl = require("./../constrollers/accounts");
const router = express.Router();

router.get("/accounts", accountsCtrl.getAccounts);

router.get(
  "/accounts/:accountId",
  accountsCtrl.getAccountByIdGeneric,
  accountsCtrl.returnAccountById
);

router.post("/accounts", accountsCtrl.createAccount);

router.delete(
  "/accounts/:accountId",
  accountsCtrl.getAccountByIdGeneric,
  accountsCtrl.deleteByIdGeneric,
  accountsCtrl.returnAccountById
);

module.exports = router;
