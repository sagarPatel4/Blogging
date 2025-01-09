const express = require('express');
const router = express.Router();
const User = require("../models/user");


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

  const isMatched= await User.matchPassword(email,password)

  console.log("User" ,user);

  return res.redirect("/")
  

})
router.get('/signup', (req, res) => {
    return res.render("signup");
})

router.get('/signin', (req, res) => {
    return res.render("signin");
})

router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/")
})

module.exports = router;
