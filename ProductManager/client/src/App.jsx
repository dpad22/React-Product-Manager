import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import ProductForm from "./components/ProductForm";
import AllProducts from "./components/ProductList";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";

function App() {
    return (
        <div className="App container-fluid">
            <h1 className="text-center">Product Manager</h1>
            <AllProducts />
            <Router>
                <ProductForm path="/new" />
                <Product path="/products/:id" />
                <EditProduct path="/edit/:id" />
            </Router>
        </div>
    );
}

export default App;