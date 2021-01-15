"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("user", usersSchema, "users");
