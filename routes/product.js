const express = require("express");
const router = express.Router();

let productController = require("../controllers/productController");

router.get("/getProducts", productController.getProducts);
router.get("/info/:id", productController.productInfo);

module.exports = router;
