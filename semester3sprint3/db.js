const mongoose = require("mongoose");

let mongoURL =
  "mongodb+srv://Guitarnewf:H4nds0m3R4!@cluster0.2ih5f.mongodb.net/roys-pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connected");
});

db.on("error", () => {
  console.log("MongoDB Connection Failed");
});

module.exports = mongoose;
