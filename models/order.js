const Joi = require("joi");
const mongoose = require("mongoose");
require("mongoose-type-email");
require("mongoose-type-url");

const orderValidationSchema = Joi.object({
  user_id: Joi.string().min(3).max(32).required(),
  basket: Joi.array().required(),
  totalAmount: Joi.string().min(1).max(32).required(),
  totalDiscount: Joi.string().min(1).max(32).required(),
  totalPayment: Joi.string().min(1).max(32).required(),
  delivery: Joi.array().required(),
  metodPayment: Joi.array().required(),
});

const OrdersSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "Set user id"],
    },
    basket: {
      type: Array,
      required: [true, "Set basket order"],
      default: [],
    },
    totalAmount: {
      type: String,
      required: [true, "Set totalAmount"],
    },
    totalDiscount: {
      type: String,
      required: [true, "Set totalDiscount"],
    },
    totalPayment: {
      type: String,
      required: [true, "Set totalPayment"],
    },
    delivery: {
      type: Array,
      required: [true, "Set delivery"],
    },
    metodPayment: {
      type: Array,
      required: [true, "Set metodPayment"],
    },
    userName: {
      type: String,
      required: [true, "Set userName"],
    },
    userPhone: {
      type: String,
      required: [true, "Set userPhone"],
    },
    userEmail: {
      type: String,
      required: [true, "Set userEmail"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Orders = mongoose.model("order", OrdersSchema);

module.exports = { Orders, orderValidationSchema };
