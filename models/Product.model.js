const mongoose =require ("mongoose")

const Product = mongoose.model("Products", new mongoose.Schema({

    title: String,
    price: Number,
    image: String

}) )

module.exports = {Product}