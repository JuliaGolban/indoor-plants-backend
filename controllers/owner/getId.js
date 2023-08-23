const { Owner } = require('../../models');

const getOwnerById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const owner = await Owner.findById({ _id: id });
    console.log(owner)
    res.status(200).json(owner);
  } catch (error) {
    throw new WrongIdError(error.message);
  }
};

module.exports = getOwnerById;
