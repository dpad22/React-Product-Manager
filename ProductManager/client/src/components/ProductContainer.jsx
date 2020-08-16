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
    const [loading, setLoading] = useState(false)


    const getProductsAPI = async() => {
        let result = await axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log("Product Data", res.data)
                setProducts(res.data)
                setLoading(true);
            })
        .catch((err) => {
            console.log(err);
        });

    };

    useEffect(() => {
        getProductsAPI(); // eslint-disable-next-line
    }, []);

    return (
        <div>
            {loading && <AllProducts
                productList= { products }

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