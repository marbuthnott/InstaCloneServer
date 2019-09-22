const mongoose = require("mongoose")
const { User } = require("./models/user")

const users = [
  {
    email: "ted@ligety.com",
    username: "tligety",
    password: "12345"
  },
  {
    email: "lindsey@vonn.com",
    username: "lvonn",
    password: "54321"
  },
  {
    email: "askellund@svindal.eu",
    username: "asvindal",
    password: "09876"
  }
]

// Connect to MongoDB
mongoose.connect('mongodb://localhost/users');

// Go through each user
users.map(data => {
  // Initialize a model with movie data
  const user = new User(data);
  // and save it into the database
  user.save();
});