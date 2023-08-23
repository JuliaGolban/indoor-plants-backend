const { ValidationError } = require('../../helpers');
const { Owner } = require('../../models');
const { dataFilterObj } = require('../../helpers');

const updateOwner = async (req, res, next) => {
  const { id } = req.params;
  try {
    const newData = dataFilterObj(req.body);
    req.file?.path && (newData.avatar = req.file.path);
    const resUpdate = await Owner.findByIdAndUpdate(
      { _id: id },
      // { $addToSet: newData.workDays },
      newData,
      {
        new: true,
      }
    );
    const newResponse = dataFilterObj(resUpdate);
    req.file?.path && (newResponse.avatar = req.file.path);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateOwner;
