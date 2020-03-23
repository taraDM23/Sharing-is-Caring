const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/sharingiscaring"
);

const itemSeed = [
  {
    title: "Free Onions",
    author: "John Smith",
    synopsis:
      "Due to a good harvest we have yeilded a large crop or red onions. We would Like to donate teh excess",
    quantity: "15 KG",
    expDate: "21/14/2020",
    pickupLocation: "Deakin Walker Farms 123 Old McDonald Hyw, Geelong",
    pickupTime:"At your earliest Convenience. First come first serve ",
    date: new Date(Date.now())
  },
 {
    title: "School Supplies",
    author: "Jane Doe",
    synopsis:
      "Our Schools has received a large donation of school supplies. Including single rules books, pencils and chalk",
    quantity: "see above",
    expDate: "n/a",
    pickupLocation: "Deakin Walker Elementary 500 Old McDonald Hyw, Geelong",
    pickupTime:"At your earliest Convenience. First come first serve ",
    date: new Date(Date.now())
  },
];

db.Items
  .remove({})
  .then(() => db.Items.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
