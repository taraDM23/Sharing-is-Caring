const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  quantity: {type: String},
  expDate: {type: String},
  OtherNotes: String,
  delivery: Boolean,
  pickupLocation: { type: String},
  pickupTime: { type: String },
  date: { type: Date, default: Date.now },
  photo: String
});

const Items = mongoose.model("Item", itemSchema);

module.exports = Items;

