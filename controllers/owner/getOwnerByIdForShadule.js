const { Owner } = require('../../models');

const getOwnerByIdForShadule = async (req, res, next) => {
  const id = req.params.id;
  try {
    let owner = []
    owner.push(await Owner.findById({ _id: id }));

    res.status(200).json(owner);
  } catch (error) {
    throw new WrongIdError(error.message);
  }
};

module.exports = getOwnerByIdForShadule;
