const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  //user_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

/* const UserSchema = new Schema(userModel);
module.exports = mongoose.model("users", UserSchema); */