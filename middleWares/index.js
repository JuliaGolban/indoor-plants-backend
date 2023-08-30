const ctrlWrapper = require('./ctrlWrapper');
const upload = require('./uploadMiddleware');
const authMiddleware = require('./authMiddleware');
const tokenValidation = require('./tokenValidation');
const { validation } = require('./validation');

module.exports = {
  ctrlWrapper,
  upload,
  authMiddleware,
  tokenValidation,
  validation,
};
