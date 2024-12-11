const mongoose = require("mongoose");

const ListingsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    categoryId: {type: Number, required: true},
    images: {type: Array, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    createdAt: { type: Date, default: Date.now },
})

const Listings = mongoose.model("Listings", ListingsSchema)
module.exports = Listings;
