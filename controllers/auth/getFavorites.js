const { Catalog } = require("../../models");
const { Users } = require("../../models");

const getFavorites = async (req, res, next) => {
  const id = req.params.id;
  console.log("req.params.id", req.params.id);
  try {
    const user = await Users.findById({ _id: id });
    let data = [];

    if (user.favorites !== "" && user.favorites !== undefined) {
      for (let key of user.favorites) {
         if (key !== "" && key !== undefined && key !== null) {
          data.push(await Catalog.findOne({ article: +key }));
        }
      }
    }
    res.status(200).json(data);
  } catch (error) {
    throw new WrongIdError(error.message);
  }
};

module.exports = getFavorites;
