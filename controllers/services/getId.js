const { Service } = require('../../models');

const getServiceById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const service = await Service.findById({ _id: id });
    res.status(200).json(service);
  } catch (error) {
    throw new WrongIdError(error.message);
  }
};

module.exports = getServiceById;
