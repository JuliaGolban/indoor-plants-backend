const express = require("express");
const { owner } = require("../../controllers");
const { ctrlWrapper } = require("../../middleWares");

const { get, getOwnerByIdForShadule } = owner;

const router = express.Router();

router.get("/", ctrlWrapper(get));
router.get("/:id/", ctrlWrapper(getOwnerByIdForShadule));

module.exports = routerOwner = router;
