const express = require("express")
const User = require("../models/users")
const router = express.Router()

//GET BACK ALL THE USERS
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch(err) {
    res.json({ message: err })
  }
})

//GET BACK A SPECIFIC USER
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (err) {
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

router.post("/signup", async (req, res) => {
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

//DELETES A SPECIFIC USER
router.delete("/:userId", async (req, res) => {
  try {
    const removedUser = await User.remove( {_id: req.params.userId} )
    res.json(removedUser)
  } catch (err) {
    res.json({ message: err })
  }
})

//UPDATES A SPECIFIC USER
router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne( {_id: req.params.userId}, { $set: { username: req.body.username } } )
    res.json(updatedUser)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router