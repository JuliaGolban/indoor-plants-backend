const { Schema, model } = require("mongoose");

const catalogSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  typeOfPlants: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  light: {
    type: String,
    required: true,
  },
  petFriendly: {
    type: String,
    required: true,
  },
  maintenance: {
    type: String,
    required: true,
  },
  potSize: {
    type: String,
    required: true,
  },
  waterSchedule: {
    type: String,
    required: true,
  },
  totalQuantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  options: {
    type: [
      {
        title: String,
        price: String,
        discount: String,
        total: String,
      },
    ],
    default: [],
    required: true,
  },
  images: {
    type: Array,
    default: [],
    required: true,
  },
});

const Catalog = model("Catalog", catalogSchema);

module.exports = Catalog;
