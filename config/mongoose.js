const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/reviewmanager`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connect to database"));

db.once("open", function () {
  console.log("Connected to db");
});

module.exports = db;
