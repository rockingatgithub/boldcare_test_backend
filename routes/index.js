const express = require("express");
const router = express.Router();

let homeController = require('../controllers/homecontroller')

/* GET home page. */
router.get("/", homeController.homecontroller);

module.exports = router;
