const { Catalog } = require("../../models");
const { Users } = require("../../models");

const getFavorites = async (req, res, next) => {
  //   const id = req.params.id;
  //   console.log("req.params.id", req.params.id);
  //   try {
  //     const user = await Users.findById({ _id: id });
  //     let data = [];

  //     if (user.favorites !== "" && user.favorites !== undefined) {
  //       for (let key of user.favorites) {
  //          if (key !== "" && key !== undefined && key !== null) {
  //           data.push(await Catalog.findOne({ article: +key }));
  //         }
  //       }
  //     }
  //     res.status(200).json(data);
  //   } catch (error) {
  //     throw new WrongIdError(error.message);
  //   }
  // };
  const isPagination = req.query.page;
  const { page, perPage } = req.query;
  const id = req.params.id;

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
    let total = data.length;

    if (isPagination) {
      let catalog = [];
      for (
        i = page * perPage - perPage + 1;
        i < page * perPage - perPage + 13 && i < data.length;
        i++
      ) {
        catalog.push(data[i]);
      }
      res.status(200).json({ data: catalog, total });
    } else {
      res.status(200).json({ data, total });
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid characters" });
  }
};
module.exports = getFavorites;
