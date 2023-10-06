const { ValidationError } = require("../../helpers");
const { Orders } = require("../../models");

const getById = async (req, res, next) => {
  const user_id = req.params.id;
  try {
    const orders = await Orders.find({ user_id });
    res.status(200).json(orders);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = getById;
