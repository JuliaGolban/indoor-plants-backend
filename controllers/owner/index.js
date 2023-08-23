const get = require("./get");
const getOwnerById = require("./getId");
const updateOwner = require("./updateOwner");
const deleteOwners = require("./delete");
const createOwner = require("./createOwner");
const getOwnerByIdForShadule = require("./getOwnerByIdForShadule");

module.exports = {
  get,
  getOwnerById,
  updateOwner,
  deleteOwners,
  createOwner,
  getOwnerByIdForShadule,
};
