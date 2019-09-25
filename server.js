// Initialize http server
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()

// Take the body of the HTTP response and parse it
app.use(bodyParser.json())

// import post routes
const userRoute = require("./routes/users");
app.use("/user", userRoute)

// Connect to MongoDB
mongoose.connect('mongodb://localhost/instaclone',
  { useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Connected to DB!"))

// Launch the server on port 3000
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  const { address, port } = server.address()
  console.log(`Server has started on ${PORT}`)
})