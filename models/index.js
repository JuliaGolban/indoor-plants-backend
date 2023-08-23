const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
} = require('./users');
const Event = require('./event');
const { Owner, ownerValidationSchema } = require('./owner');
const Messages = require('./message');
const { Service, serviceValidationSchema } = require('./service');
const Developers = require('./developers');

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
};
