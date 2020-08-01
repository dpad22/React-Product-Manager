const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: [true, "Product must have a title"],
},
    category: {
        type: String,
        required: [true, "Product must have a category"],
},
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be at least $1"],
},
    description: {
        type: String,
        required: [true, "Please describe product."],
},
},
    {timestamps: true,}
);

module.exports = {
    Product: mongoose.model("Product", ProductSchema),
};