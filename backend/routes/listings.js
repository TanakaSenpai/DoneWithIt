const express = require('express');
const router = express.Router();
const Listings = require("../models/listings")


router.get("/", async (req, res) => {
    try {
        const listings = await Listings.find()
        return res.status(200).json(listings)
    } catch (error) {
        console.log(error)
    }
})

router.post("/", async (req, res) => {
    try {const {title, price, description, categoryId, images, createdAt} = req.body;
    const newListing = new Listings({title, price, description, categoryId, images,userId : "dskhgoshgfhsf", createdAt});
    await newListing.save();
    return res.status(200).json({message: "Successfull"});
} catch (error) {
        console.log(error)
    }
})

module.exports = router;