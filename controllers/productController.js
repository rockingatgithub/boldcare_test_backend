const Product = require("../models/product");

// ====================================handling home routes=====================================================

module.exports.getProducts = async function (req, res) {
  let product = await Product.find({}).limit(10);
  return res.status(200).json({
    message: "Here is product list",
    data: product,
  });
};


module.exports.productInfo = async function(req, res){
  let product = await Product.findById(req.params.id)
  res.status(200).json({
    message: "This is info user",
    data: product,
  });
}