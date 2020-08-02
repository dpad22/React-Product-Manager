import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import ProductForm from "./components/ProductForm";
import AllProducts from "./components/ProductList";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";
import Navbar from "./components/Navbar";
import './App.css';
import SalesForm from "./components/SalesForm";

function App() {
    return (
        <div className="App container-fluid">
            <Navbar path ="/" />
            <div className="app-header">
                <h1 className="text-center">Product Manager</h1>
            </div>
                <AllProducts />
                <Router>
                    <ProductForm path="/new" />
                    <Product path="/products/:id" />
                    <EditProduct path="/edit/:id" />
                    <SalesForm path="/sales/:id" />
                </Router>
        </div>
    );
}

export default App;