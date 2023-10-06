const auth = require("./auth");
const user = require("./user");
const services = require("./services");
const event = require("./event");
const owner = require("./owner");
const message = require("./message");
const developers = require("./developers");
const catalog = require("./catalog");
const cities = require("./cities");
const departments = require("./departments");
const care = require("./care");
const order = require("./order");

module.exports = {
  auth,
  user,
  event,
  owner,
  message,
  services,
  developers,
  catalog,
  cities,
  departments,
  care,
  order
};
