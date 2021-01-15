"use strict";

const express = require("express");
// const authCtrl = require("./../constrollers/auth");
const usersCtrl = require("./../constrollers/users");
const router = express.Router();

router.get("/users", usersCtrl.getUsers);
router.get("/users/:userId", usersCtrl.getUserById);
router.delete("/users/:userId", usersCtrl.deleteById);

router.post("/users", usersCtrl.createUser);

// router.get("/users", authCtrl.login, usersCtrl.getUsers);
// router.get("/users/:userId", authCtrl.login, usersCtrl.getUserById);
//
// router.post("/users", authCtrl.login, usersCtrl.createUser);
// router.put("/users", authCtrl.login, usersCtrl.putUsers);

module.exports = router;
