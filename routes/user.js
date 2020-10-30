const express = require("express");
const router = express.Router();

let customerController = require("../controllers/userController");

router.get("/getUsers", customerController.getUsers);
router.get("/info/:id", customerController.userInfo)

module.exports = router;
