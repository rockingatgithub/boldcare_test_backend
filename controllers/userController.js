const Customer = require("../models/customer");

module.exports.getUsers = async function (req, res) {
  let user = await Customer.find({}).limit(10);
  res.status(200).json({
    message: "This is the list of user",
    data: user,
  });
};

module.exports.userInfo = async function(req, res){
  let user = await Customer.findById(req.params.id)
  res.status(200).json({
    message: "This is info user",
    data: user,
  });
}