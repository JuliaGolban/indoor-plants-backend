const { ValidationError } = require("../../helpers");
const { Orders } = require("../../models");

const createOrder = async (req, res, next) => {
  try {
    const fullData = { ...req.body, user_id: req.params.id};
    const resCreate = await Orders.create(fullData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createOrder;
