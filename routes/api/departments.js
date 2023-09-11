const express = require("express");
const { departments } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const { postDepartmentsByFilter } = departments;
const router = express.Router();

// router.get("/", ctrlWrapper(get));
router.post("/", ctrlWrapper(postDepartmentsByFilter));

module.exports = routerDepartments = router;
