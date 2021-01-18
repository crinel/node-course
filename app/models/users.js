"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { userModel } = require("../constants");

const usersSchema = new Schema(
  {
    createdAt: Number,
    updatedAt: Number,
    email: {
      type: String,
      required: [true, "The email is required!"],
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: {
      currentTime: () => new Date(),
    },
  }
);

module.exports = mongoose.model(userModel, usersSchema, "users");
