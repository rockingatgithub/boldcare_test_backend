const mongoose = require("mongoose");
const Customer = require("./customer");
const Product = require("./product");

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Product,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Customer,
    },
    stars: {
      type: Number,
      default: 5,
    },
    status: {
      type: String,
      enum: ["Accepted", "Rejected"],
      default: "Accepted",
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
