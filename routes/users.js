const express = require("express")
const User = require("../models/users")
const router = express.Router()

//GETS A USER
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch(err) {
    res.json({ message: err })
  }
})

//SUBMITS A USER
router.post("/", async (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  try {
    const savedUser = await user.save()
    res.json(savedUser)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router