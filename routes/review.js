const express = require("express");
const router = express.Router();

let reviewController = require("../controllers/reviewController");

router.post("/addReview", reviewController.addReview);
router.get("/getReviews", reviewController.getReviews);
router.get("/userAll/:id", reviewController.allUserReviews);
router.get("/productAll/:id", reviewController.allProductReviews);
router.get("/reviewType/:type", reviewController.allTypeReviews);

module.exports = router;
