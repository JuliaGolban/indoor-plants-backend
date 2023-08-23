const express = require('express');
const { user, services, owner } = require('../../controllers');

const {
  ctrlWrapper,
  authMiddleware,
  validation,
  uploadCloud,
} = require('../../middleWares');
const {
  userUpdateValidationSchema,
  ownerValidationSchema,
} = require('../../models');

const router = express.Router();

//USERS
router.get('/users', ctrlWrapper(authMiddleware), ctrlWrapper(user.getUsers));
router.get(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(user.getUserById)
);
router.delete(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(user.deleteUsers)
);

router.patch(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  uploadCloud.single('avatar'),
  validation(userUpdateValidationSchema),
  ctrlWrapper(user.updateUser)
);

router.post(
  '/users/create',
  ctrlWrapper(authMiddleware),
  uploadCloud.single('avatar'),
  ctrlWrapper(user.createUser)
);

// SERVICES
router.get(
  '/services',
  // ctrlWrapper(authMiddleware),
  ctrlWrapper(services.getServices)
);

router.post(
  '/services/create',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(services.createService)
);

router.get(
  '/services/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(services.getServiceById)
);

router.delete(
  '/services/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(services.deleteServices)
);

router.patch(
  '/services/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(services.updateService)
);

// OWNERS
router.get('/owners', ctrlWrapper(authMiddleware), ctrlWrapper(owner.get));
router.get(
  '/owners/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(owner.getOwnerById)
);
router.delete(
  '/owners/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(owner.deleteOwners)
);

router.patch(
  '/owners/:id',
  ctrlWrapper(authMiddleware),
  validation(ownerValidationSchema),
  uploadCloud.single('avatar'),
  ctrlWrapper(owner.updateOwner)
);

router.post(
  '/owners/create',
  ctrlWrapper(authMiddleware),
  uploadCloud.single('avatar'),
  ctrlWrapper(owner.createOwner)
);

module.exports = routerAdmin = router;
