const Joi = require("joi");
// const { string } = require('joi');
const mongoose = require("mongoose");

const serviceValidationSchema = Joi.object({
  Id: Joi.number().min(1).max(32).required(),
  time: Joi.number().min(1).max(3).required(),
  price: Joi.number().min(1).max(6).required(),
  subject: Joi.string().min(3).max(32).required(),
});

const ServiceSchema = new mongoose.Schema(
  {
    Id: {
      type: Number,
      required: [true, "Set Id service"],
    },
    time: {
      type: Number,
      required: [true, "Set time service"],
    },
    price: {
      type: Number,
      required: [true, "Set price service"],
    },
    subject: {
      type: String,
      required: [true, "Set subject for service"],
    },
    location: {
      type: String,
      default: "all",
    },
    owner: {
      type: String,
      default: "all",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Service = mongoose.model("service", ServiceSchema);

module.exports = { Service, serviceValidationSchema };
