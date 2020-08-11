import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Router } from "@reach/router";
import ProductForm from "./ProductForm";
import AllProducts from "./ProductList";
import EditProduct from "./EditProduct";
import SalesForm from "./SalesForm";
import ShowContainer from "./ShowContainer";


const ProductsContainer = (props) => {

    const [products, setProducts] = useState([])
    const [sales, setSales] = useState([])
    const [loading, setLoading] = useState(false)

    const getProductsAPI = async() => {
        let result = await axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log("Product Data", res.data)
                setProducts(res.data)
                // console.log("Sales Data", res.data.)
                setSales(res.data.products.sales)
                setLoading(true);
                return res.data
            })
        .catch((err) => {
            console.log(err);
        });
        console.log("result", result)
    };

const total = (arr, type) => {

    return arr.reduce((total, obj) => {
        return total + obj[type];
    }, 0);
}
    let totalQuantity = total(sales, 'sold');
        console.log("totalQuantity", totalQuantity )


    useEffect(() => {
        getProductsAPI(); // eslint-disable-next-line
    }, []);
    
    return (
        <div>
            {loading && <AllProducts
                productList= { products }
                total= { totalQuantity }
                />}
                <Router>
                    <ProductForm path="/new" />
                    <ShowContainer path="/products/:id" />
                    <EditProduct path="/edit/:id" />
                    <SalesForm path="/sales/:id" />
                </Router>
        </div>
    );
};

export default ProductsContainer;