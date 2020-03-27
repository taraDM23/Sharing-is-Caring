const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  "mongodb://user1:password1@ds123619.mlab.com:23619/heroku_w4xs3q9j"
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
    date: new Date(Date.now()),
    photo: "https://www.simplyrecipes.com/wp-content/uploads/2007/12/pearl-onions-whole2.jpg"
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
    date: new Date(Date.now()),
    photo: "https://www.brisbanekids.com.au/wp-content/uploads/2015/04/a.jpg"
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
