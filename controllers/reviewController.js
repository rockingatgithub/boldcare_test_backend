const Review = require("../models/review");

module.exports.addReview = async function (req, res) {
  // console.log(req.body);
  let review = await Review.create(req.body);
  return res.status(200).json({
    message: "review Created",
    data: review,
  });
};

module.exports.getReviews = async function (req, res) {
  let reviews = await Review.find({}).limit(10);
  return res.status(200).json({
    message: "review obtained",
    data: reviews,
  });
};

module.exports.allUserReviews = async function (req, res) {
  let reviews = await Review.find({
    customerId: req.params.id,
  }).limit(10);
  return res.status(200).json({
    message: "review obtained",
    data: reviews,
  });
};

module.exports.allProductReviews = async function (req, res) {
  let reviews = await Review.find({
    productId: req.params.id,
  }).limit(10);
  return res.status(200).json({
    message: "review obtained",
    data: reviews,
  });
};

module.exports.allTypeReviews = async function (req, res) {
  if (req.params.type === "All") {
    let reviews = await Review.find({}).limit(10);
    return res.status(200).json({
      message: "review obtained",
      data: reviews,
    });
  } else {
    let reviews = await Review.find({
      status: req.params.type,
    }).limit(10);
    return res.status(200).json({
      message: "review obtained",
      data: reviews,
    });
  }
};
