const express = require('express');
const router = express.Router();
const User = require("../models/user");


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res.cookie("token", token).redirect("/")
    } catch (error) {
        console.log(error);

        return res.render("signin", {
            error: "Incorrect email or Password"
        });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token').redirect("/")
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
