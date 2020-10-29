module.exports.homecontroller = async function (req, res) {
  return res.status(200).json({
    message: "I did it",
  });
};
