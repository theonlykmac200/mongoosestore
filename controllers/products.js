const express = require("express")
const productRouter = express.Router()
const Products = require("../models/products")
const productSeed = require("../models/seedData")

// Index

productRouter.get("/", (req, res) => {
    Products.find({}, (error, allProducts) => {
        res.render("index.ejs", { products: Products})
    })
})
// new
productRouter.get("/new", (req, res) => {
    res.render("new.ejs")
})
// delete
productRouter.delete("/:id", (req, res) => {
    Products.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
        res.redirect("/products")
    })
})
//update
productRouter.put("/:id", (req, res) => {
    req.body.completed = (req.body.completed === "on") ? true: false;
    Products.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedProduct) => {
            res.redirect(`/books/${req.params.id}`)
        }
    )
})

// create
productRouter.post("/", (req, res) => {
    req.body.completed = req.body.completed === "on" ? true : false;
    Products.create(req.body, (error, createdProduct) => {
        res.redirect("/products")
    })
})

//edit
productRouter.get("/:id/edit", (req, res) => {
    Products.findById(req.params.id, (err, foundProduct) => {
        res.render("edit.ejs", {Products : foundProduct})
    })
})



//show

productRouter.get("/:id", (req, res) => {
    Products.findById(req.params.id, (err, foundProduct) =>{
        res.render("show.ejs", {Products: foundProduct})
    })
})

// Seed
productRouter.get("/seed", (req, res) => {
    Products.deleteMany({}, (error, allProducts) => {})
    Products.create(productData, (error, data) => {
      res.redirect("/products");
    });
  })

module.exports = productRouter