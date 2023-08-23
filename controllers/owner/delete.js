const { Owner } = require('../../models');

const deleteOwners = async (req, res, next) => {
  try {
    const { user, params } = req;
    const _id = params.id;

    const owners = await Owner.deleteOne({ _id });
    if (owners.deletedCount === 0) {
      return res.status(400).json({ message: `Bad request (id incorrect)` });
    }
    res.json({ message: 'Success deleted' });
  } catch (error) {
    res.status(400).json({ message: `Bad request (id incorrect)` });
  }
};

module.exports = deleteOwners;
