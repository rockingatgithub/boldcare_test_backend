const express = require("express");
const router = express.Router();

let homeController = require("../controllers/homecontroller");
/* GET home page. */
router.get("/", homeController.homecontroller);
router.use("/product", require("./product"));
router.use("/user", require("./user"));
router.use("/review", require("./review"));

module.exports = router;
