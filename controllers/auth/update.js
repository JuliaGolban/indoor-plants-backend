const { ValidationError } = require("../../helpers");
const { Users } = require("../../models");
const {
  userMainField,
  userFieldReceivedFromFront,
  dataFilter,
} = require("../../helpers");

const update = async (req, res, next) => {
  const { id } = req.params;
  const newData = dataFilter(req.body, userFieldReceivedFromFront);
  if (!newData) {
    throw new ValidationError("Bad request, invalid data");
  }
  req.file?.path && (newData.avatar = req.file.path);
  const resUpdate = await Users.findOneAndUpdate({ _id: id }, newData, {
    new: true,
  });
  const newResponse = dataFilter(resUpdate, userMainField);
  req.file?.path && (newResponse.avatar = req.file.path);
  console.log("newResponse", newResponse);
  res.status(201).json(newResponse);
};
module.exports = update;
