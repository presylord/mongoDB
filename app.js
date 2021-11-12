const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/usersDB");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("users", userSchema);

const user = new User({
  name: "Presy Lord",
  email: "kidlat123@gmail.com",
});

user.save();
