const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  color: String,
});

const Fruit = mongoose.model("fruits", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  color: "red",
});
const banana = new Fruit({
  name: "Banana",
  color: "yellow",
});
const grapes = new Fruit({
  name: "Grapes",
  color: "violet",
});

// Fruit.insertMany([apple, banana, grapes], function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Fruits saved in the server");
//   }
// });

Fruit.find(function (err, fruits) {
  fruits.forEach(function (fruit) {
    mongoose.connection.close();

    console.log(fruit.name);
  });
});
