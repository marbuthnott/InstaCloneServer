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
  console.log(req.body)
})

module.exports = router