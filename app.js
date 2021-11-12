const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/usersDB");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const userInfoSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("users", userSchema);
const UserInfo = mongoose.model("userInfo", userInfoSchema);

const user = new User({
  name: "Presy Lord",
  email: "kidlat123@gmail.com",
});
const userInfo = new UserInfo({
  name: "Presy Lord",
  age: 24,
});

user.save();
userInfo.save();
