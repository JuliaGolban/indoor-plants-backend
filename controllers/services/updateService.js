const { ValidationError } = require("../../helpers");
const { Service } = require("../../models");
const { dataFilterObj } = require("../../helpers");

const updateService = async (req, res, next) => {
  const { id } = req.params;
  try {
    const newData = dataFilterObj(req.body);
    const resUpdate = await Service.findByIdAndUpdate({ _id: id }, newData, {
      new: true,
    });
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateService;
