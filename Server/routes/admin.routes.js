const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");

router.get("/getUsers", adminController.getUsers);

module.exports = router;
