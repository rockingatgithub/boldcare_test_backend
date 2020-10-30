const mongoose = require("mongoose");

// ===============================================connecting to remote databse=======================================

mongoose.connect(`mongodb+srv://sudhendra:raja@2509@cluster0.rhtev.mongodb.net/reviewdb?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connect to database"));

db.once("open", function () {
  console.log("Connected to db");
});

module.exports = db;
