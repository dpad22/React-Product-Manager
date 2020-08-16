const mongoose = require("mongoose");


const SaleSchema = new mongoose.Schema(
    {
        sold:{type:Number,required:[true,"Sale cannot be less than 1"]},
        dateSold: {type:Date,required:[true, "Date cannot be empty"]}
    }
)

const ProductSchema = new mongoose.Schema(
{
    title: {type: String, required: [true, "Product must have a title"]},
    category: {type: String, required: [true, "Product must have a category"]},
    price: {type: Number, required: [true, "Price is required"], min: [0, "Price must be at least $1"]},
    description: {type: String, required: [true, "Please describe product."]},
    sales: [SaleSchema],
},
    {timestamps: true}
);

module.exports = {
    Product: mongoose.model("Product", ProductSchema),
    Sale: mongoose.model("Sale", SaleSchema)
};