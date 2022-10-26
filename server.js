const express = require("express")
const app = express()
const mongoose = require("mongoose")
const seedData =require("./models/seedData")
const product = require("./models/products")
const methodOverride = require("method-override")
const Product = require('./models/products');
// const thisController = require("./controllers/thisController")

require("dotenv").config()
const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    unseUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", (err) => console.log(err.message +" is mongo running"))
db.on("connected", () => console.log ("mongo connected"))
db.on('disconnected', () => console.log("mongo disconnected"))

app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.json())
app.use("/index", thisController)
app.use(express.static("public"))

// FOLLOW INDUCES!

// Seed
app.get("/product/seed", (req, res) => {
    product.deleteMany({}, (error, allProducts) => {})
    product.create(productData, (error, data) => {
      res.redirect("/productss");
    });
  })

app.get("/products", (req, res) => {
    res.send("my index page is working!")
})


app.listen("PORT", () => {
    console.log("stay sexy don't get murdered!")
})
