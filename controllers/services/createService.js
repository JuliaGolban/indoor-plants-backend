const { ValidationError } = require("../../helpers");
const { Service } = require("../../models");

const createService = async (req, res, next) => {
  try {
    const fullData = { ...req.body};
    const resUpdate = await Service.create(fullData);
    console.log("resUpdate",resUpdate);
    return res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createService;
