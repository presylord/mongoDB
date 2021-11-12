const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: String,
});
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  favoriteFruit: Array,
});

const Fruit = mongoose.model("fruits", fruitSchema);
const Person = mongoose.model("persons", personSchema);

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

const person = new Person({
  name: "Gol D.",
  favoriteFruit: apple,
});

Person.updateOne({ name: "Roger" }, { favoriteFruit: grapes }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Updated succesfully.");
  }
});
// person.save();

// Fruit.insertMany([apple, banana, grapes], function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Fruits saved in the server");
//   }
// });

// Fruit.find(function (err, fruits) {
//   fruits.forEach(function (fruit) {
//     mongoose.connection.close();

//     console.log(fruit.name);
//   });
// });

// Fruit.deleteMany({ name: "Banana" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted Succesfully.");
//   }
// });
// mongoose.connection.close();
