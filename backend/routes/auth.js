const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require("../models/user")
const bcrypt = require("bcrypt")

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({success: false, message: "User not found"});
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({success: false, message: "Incorrect password"});
        
        const payload = { name: "Senpai", email: email, password: password};
        const secret = "jwtSecret"
        const token = jwt.sign(payload, secret)

        return res.status(200).json(token);
    } catch (error) {
        console.log("login error:", error.message)
    }

})

router.post("/register", async (req, res) => {
    try {
        const { email, password, name } = req.body.userInfo;
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPass, name });
        await newUser.save();
        return res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Email already exists. Please use a different one.",
            });
        }

        // Default error handler
        res.status(400).json({
            success: false,
            message: "An error occurred during registration. Please try again.",
        });
        console.log(error.message)
    }
})

module.exports = router;