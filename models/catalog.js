const { Schema, model } = require("mongoose");

const catalogSchema = new Schema({
  ID: {
    type: String,
    required: true,
  },
  Common: {
    type: String,
    required: true,
  },
  Botanical: {
    type: String,
    required: true,
  },
  Zone: {
    type: String,
    required: true,
  },
  Light: {
    type: String,
    required: true,
  },
  OldPrice: {
    type: String,
    required: true,
  },
  NewPrice: {
    type: String,
    required: true,
  },
  Currency: {
    type: String,
    required: true,
  },
  SizeS: {
    type: String,
  },
  SizeL: {
    type: String,
  },
  SizeM: {
    type: String,
  },
  SizeXL: {
    type: String,
  },
  Img1: {
    type: String,
  },
  Img2: {
    type: String,
  },
  Img3: {
    type: String,
  },
  Img4: {
    type: String,
  },
  Img5: {
    type: String,
  },
});

const Catalog = model("Catalog", catalogSchema);

module.exports = Catalog;
