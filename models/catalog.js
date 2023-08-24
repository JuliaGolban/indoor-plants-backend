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
  Description: {
    type: String,
    required: true,
  },
  TypeOfPlants: {
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
  PetFriendly: {
    type: String,
    required: true,
  },
  Meintenance: {
    type: String,
    required: true,
  },
  PotSize: {
    type: String,
    required: true,
  },
  WaterShadule: {
    type: String,
    required: true,
  },
  OldPriceS: {
    type: String,
    required: true,
  },
  NewPriceS: {
    type: String,
    required: true,
  },
  OldPriceL: {
    type: String,
    required: true,
  },
  NewPriceL: {
    type: String,
    required: true,
  },
  OldPriceXL: {
    type: String,
    required: true,
  },
  NewPriceXL: {
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
