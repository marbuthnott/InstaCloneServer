const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define movie schema
var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  username: String,
  password: String
});

// Export Mongoose model
const User = mongoose.model("User", userSchema)
module.exports.User = User