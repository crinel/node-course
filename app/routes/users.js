"use strict";

const express = require("express");
const authCtrl = require("./../constrollers/auth");
const usersCtrl = require("./../constrollers/users");
const router = express.Router();

router.get("/users", authCtrl.login, usersCtrl.getUsers1, usersCtrl.getUsers2);

router.post("/users", authCtrl.login, usersCtrl.postUsers);

router.put("/users", authCtrl.login, usersCtrl.putUsers);

module.exports = router;
