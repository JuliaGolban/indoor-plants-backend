const express = require("express");
const { user } = require("../../controllers");
const {
  ctrlWrapper,
  authMiddleware,
  validation,
  uploadCloud,
} = require("../../middleWares");
const { userUpdateValidationSchema } = require("../../models");

const router = express.Router();

router.get("/", ctrlWrapper(authMiddleware), ctrlWrapper(user.get));
router.get("/events/:id", ctrlWrapper(authMiddleware), ctrlWrapper(user.getUserEvents));
router.patch(
  "/:id",
  ctrlWrapper(authMiddleware),
  uploadCloud.single("avatar"),
  validation(userUpdateValidationSchema),
  ctrlWrapper(user.updateUser)
);

module.exports = routerUser = router;
