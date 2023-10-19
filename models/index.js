const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
} = require("./users");
const Event = require("./event");
const { Owner, ownerValidationSchema } = require("./owner");
const Messages = require("./message");
const { Service, serviceValidationSchema } = require("./service");
const Developers = require("./developers");
const Catalog = require("./catalog");
const DepartmentsNP = require("./departmentsNP");
const CitiesNP = require("./citiesNP");
const Care = require("./care");
const Basket = require("./basket");
const { Orders, orderValidationSchema } = require("./order");

module.exports = {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
  Event,
  Owner,
  ownerValidationSchema,
  Messages,
  Service,
  serviceValidationSchema,
  Developers,
  Catalog,
  DepartmentsNP,
  CitiesNP,
  Care,
  Orders,
  orderValidationSchema,
  Basket,
};
