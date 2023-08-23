const { ValidationError } = require("../../helpers");
const { Owner } = require("../../models");

const createOwner = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.file);
    const fullData = { ...req.body };
    req.file?.path && (fullData.avatar = req.file.path);
    const resCreate = await Owner.create(fullData);
    req.file?.path && (resCreate.avatar = req.file.path);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createOwner;
