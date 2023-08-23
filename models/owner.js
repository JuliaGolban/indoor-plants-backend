const Joi = require('joi');
const { Schema, model, SchemaTypes } = require('mongoose');
require('mongoose-type-url');

const ownerValidationSchema = Joi.object({
  ownerText: Joi.string().min(3).max(32),
  Id: Joi.number(),
  ownerColor: Joi.string(),
  designation: Joi.string(),
  workDays: Joi.string(),
  startHour: Joi.string(),
  endHour: Joi.string(),
  groupId: Joi.number(),
  linkedin: Joi.string().uri(),
  twitter: Joi.string().uri(),
  instagram: Joi.string().uri(),
  facebook: Joi.string().uri(),
});

const ownerSchema = new Schema(
  {
    ownerText: {
      type: String,
      required: [true, 'OwnerText is required'],
    },
    Id: {
      type: Number,
      required: [true, 'Id is required'],
    },
    ownerColor: {
      type: String,
      required: [true, 'OwnerColor is required'],
    },
    designation: {
      type: String,
      required: [true, 'designation is required'],
    },
    workDays: {
      type: String,
    },
    startHour: {
      type: String,
    },
    endHour: {
      type: String,
    },
    groupId: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
    avatar: {
      type: String,
      required: [true, "URL can't be empty"],
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Owner = model('owner', ownerSchema);

module.exports = { Owner, ownerValidationSchema };
