const mongoose =require ("mongoose")

const Product = mongoose.model("Products", new mongoose.Schema({

    name: String,
    price: Number,
    images: String

}) )

module.exports = {Product}