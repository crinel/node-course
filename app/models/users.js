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
    //nested data
    address: {
      streetName: {
        type: String,
        required: true,
      },
      streetNumber: {
        type: String,
      },
      city: {
        type: String,
      },
    },
    reviews: [
      {
        description: {
          type: String,
        },
        rate: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: {
      currentTime: () => new Date(),
    },
  }
);

module.exports = mongoose.model(userModel, usersSchema, "users");
