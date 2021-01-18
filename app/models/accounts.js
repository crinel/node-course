"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { userModel, accountModel } = require("../constants");

const accountsSchema = new Schema(
  {
    createdAt: Number,
    updatedAt: Number,
    password: {
      type: String,
      required: [true, "The account password is required!"],
    },
    accountName: {
      type: String,
      required: [true, "The account name is required!"],
      unique: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: userModel,
      unique: false,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: {
      currentTime: () => new Date(),
    },
  }
);

module.exports = mongoose.model(accountModel, accountsSchema, "accounts");
