const { Service } = require("../../models");

const deleteServices = async (req, res, next) => {
  try {
    const { user, params } = req;
    const _id = params.id;

    const services = await Service.deleteOne({ _id });
    if (services.deletedCount === 0) {
      return res.status(400).json({ message: `Bad request (id incorrect)` });
    }
    res.json({ message: "Success deleted" });
  } catch (error) {
    res.status(400).json({ message: `Bad request (id incorrect)` });
  }
};

module.exports = deleteServices;
