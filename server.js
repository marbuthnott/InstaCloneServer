// INITIALISE HTTP SERVER
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()

// MIDDLEWARES
app.use(bodyParser.json())

// IMPORT USER ROUTES
const userRoute = require("./routes/users");
app.use("/user", userRoute)

// CONNECT TO MONGODB
mongoose.connect('mongodb://localhost/instaclone',
  { useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Connected to DB!"))

// LAUNCH THE SERVER ON PORT 3000
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  const { address, port } = server.address()
  console.log(`Server has started on ${PORT}`)
})