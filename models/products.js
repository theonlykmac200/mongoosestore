const { default: mongoose } = require("mongoose")

  const mongoose = require("mongoose")

  const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    descriptions: {type: String, required: true},
    img: { type: String, required: true},
    price: { type: Number, required: true},
    qty: {type: Number, required: true},

  })
  
  const Products = mongoose.model("products", productSchema)

  // module.exports= Products
  
