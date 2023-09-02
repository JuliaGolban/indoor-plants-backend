const { Schema, model } = require('mongoose');

const catalogSchema = new Schema({
  article: {
    type: Number,
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
    type: Array,
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
    type: [
      {
        size: Number,
        potSizeItem: String,
      },
    ],
    default: [],
    // type:       {
    //     size: Number,
    //     unit: String,
    //   },
    // default: {},
    required: true,
  },
  waterSchedule: {
    type: String,
    required: true,
  },
  hardToKill: {
    type: String,
    required: true,
  },
  rare: {
    type: String,
    required: true,
  },
  totalQuantity: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
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
        oldPrice: Number,
        currentPrice: Number,
        discount: Number,
        total: Number,
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

const Catalog = model('Catalog', catalogSchema);

module.exports = Catalog;
