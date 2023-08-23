const { Owner } = require("../../models");

const get = async (req, res, next) => {
  try {
    const result = await Owner.find();
    console.log(result)
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: "Invalid search characters" });
  }
};

module.exports = get;
