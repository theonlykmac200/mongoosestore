const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const productController = require("./controllers/products")




require("dotenv").config()
const PORT = process.env.PORT

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

//middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use("/products", productController)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
app.use(methodOverride("_method"))





app.listen(PORT, () => {
    console.log("stay sexy don't get murdered?")
})

