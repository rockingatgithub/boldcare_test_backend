const Review = require("../models/review");

// ================================handling review routes and functions===================================================

module.exports.addReview = async function (req, res) {
  // console.log(req.body);
  let review = await Review.create(req.body);
  return res.status(200).json({
    message: "review Created",
    data: review,
  });
};

module.exports.getReviews = async function (req, res) {
  let reviews = await Review.find({})
    .populate("productId")
    .populate("customerId")
    .limit(7);
  // console.log(reviews[0]);
  return res.status(200).json({
    message: "review obtained",
    data: reviews,
  });
};

module.exports.allUserReviews = async function (req, res) {
  let reviews = await Review.find({
    customerId: req.params.id,
  }).limit(7);
  return res.status(200).json({
    message: "review obtained",
    data: reviews,
  });
};

module.exports.allProductReviews = async function (req, res) {
  let reviews = await Review.find({
    productId: req.params.id,
  }).limit(7);
  return res.status(200).json({
    message: "review obtained",
    data: reviews,
  });
};

module.exports.allTypeReviews = async function (req, res) {
  if (req.params.type === "All") {
    let reviews = await Review.find({}).limit(7);
    return res.status(200).json({
      message: "review obtained",
      data: reviews,
    });
  } else {
    let reviews = await Review.find({
      status: req.params.type,
    }).limit(7);
    return res.status(200).json({
      message: "review obtained",
      data: reviews,
    });
  }
};

module.exports.getMoreReviews = async function (req, res) {
  let num = parseInt(req.params.next);
  let reviews = await Review.find({})
    .populate("productId")
    .populate("customerId")
    .skip(num)
    .limit(7);
  // console.log(reviews[0]);
  return res.status(200).json({
    message: "review obtained",
    data: reviews,
  });
};
