const express = require("express")
const productRouter = express.Router()
const Products = require("../models/products")
const productSeed = require("../models/seedData")

// Index

productRouter.get("/", (req, res) => {
    Products.find({}, (error, allProducts) => {
        console.log(Products)
        res.render("index.ejs", { 
            products: allProducts})
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
        console.log(err)
    })
})
//update
productRouter.put("/:id", (req, res) => {
    Products.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedProduct) => {
            res.redirect(`/products/${req.params.id}`)
        }
    )
})

// create
productRouter.post("/", (req, res) => {
    Products.create(req.body, (err, createdProduct) => {
        res.redirect("/products")
    })
})

//edit
productRouter.get("/:id/edit", (req, res) => {
    Products.findById(req.params.id, (err, foundProduct) => {
        res.render("edit.ejs", {products : foundProduct})
    })
})



//show

productRouter.get("/:id", (req, res) => {
    Products.findById(req.params.id, (err, foundProduct) =>{
        res.render("show.ejs", {products: foundProduct})
    })
})

// // Seed -not needed may delete later
// productRouter.get("/seed", (req, res) => {
//     Products.create(productSeed, (error, data) => {
//       res.redirect("/products");
//     });
//   })

module.exports = productRouter