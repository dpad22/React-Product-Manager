const {Product} = require("../models/product.model");
const {Sale} = require("../models/product.model");

module.exports = {
index(req, res) {
    Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.json(err));
},

create(req, res) {
    Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json(err));
},

addSale(req,res) {
    Sale.create(req.body)
    .then(newSale => {
        Product.findOne({
            _id: req.params.id
            })
            .then(product => {
                console.log("addSale prod",product.sales)
                product.sales.push(newSale)
                product.save()
                    .then(data => {
                        res.json(data)
                    })
            })
    })
    .catch((err) => res.json(err));
},

show(req, res) {
    Product.findOne({
        _id: req.params.id
    })
    .then(oneProduct => {
        console.log("Controller output", oneProduct)
        res.json(oneProduct) 
    })
    .catch(err => res.json(err))
},

update(req, res) {
    Product.findByIdAndUpdate({
        _id: req.params.id
    }, req.body, {
        runValidators: true
    })
    .then(editProduct => res.json({
        msg: "Success"
    }))
    .catch(err => res.json(err))
},


deleteProduct(req, res) {
    Product.deleteOne({
        _id: req.params.id
    })
    .then(msg => res.json(msg))
    .catch(err => res.json(err))
}
};