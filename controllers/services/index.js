const getServiceById = require("./getId");
const getServices = require("./getAll");
const updateService = require("./updateService");
const deleteServices = require("./delete");
const createService = require("./createService");

module.exports = {
  getServiceById,
  getServices,
  updateService,
  deleteServices,
  createService,
};
