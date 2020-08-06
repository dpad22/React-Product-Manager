import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Router } from "@reach/router";
import ProductForm from "./ProductForm";
import AllProducts from "./ProductList";
import EditProduct from "./EditProduct";
import SalesForm from "./SalesForm";
import ShowContainer from "./ShowContainer";


const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const [state, setState] = useState({
        sales: 0,
        revenue: 0,
    });

    const getProductsAPI = async() => {
        const result = await axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                return res.data
            })
        .catch((err) => {
            console.log(err);
        });

        console.log('All Prod result', result);
        setProducts(result);
    };

    const addSale = () => {
        setState({
            sales: state.sales + 1,
            revenue: state.sales * products.price
        });
    }
    const removeSale = () => {
        setState({
            sales: state.sales - 1,
            revenue: state.sales * products.price
        });
    }


    useEffect(() => {
        getProductsAPI(); // eslint-disable-next-line
    }, []);
    
    return (
        <div>
            <AllProducts productList= { products } state={ state } addSale={ addSale } removeSale={ removeSale }/>
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