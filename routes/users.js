const express = require("express")
const User = require("../models/users")
const router = express.Router()

router.get('/', function (req, res) {
  res.send('User page');
})

router.get('/:username', function (req, res) {
  res.send(`User page ${req.params.username}`);
})

router.post("/", function (req, res) {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  user.save()
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json({ message: err })
  })
})

module.exports = router