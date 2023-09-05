const { Users } = require("../../models");

const addFavorite = async (req, res, next) => {
  const { user, params } = req;
  const ddd = await Users.updateOne(
    { _id: user._id },
    { $addToSet: { favorites: params.id } }
  );

  res.status(201).json({ message: 'Success added to favorites' });
};

module.exports = addFavorite;