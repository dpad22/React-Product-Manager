import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import './App.css';
import "react-table-filter/lib/styles.css";
import ProductContainer from "./components/ProductContainer";
import ShowContainer from "./components/ShowContainer";
import { Router } from "@reach/router";
import ProductForm from "./components/ProductForm";
import EditProduct from "./components/EditProduct";
import SalesForm from "./components/SalesForm";


function App() {
    return (
        <div className="App container-fluid">
            <Navbar path ="/" />
            <div className="app-header">
                <h1 className="text-center">Product Manager</h1>
            </div>
            <Router>
                    <ProductContainer path="/"/>
                    <ProductForm path="/new" />
                    <ShowContainer path="/products/:id" />
                    <EditProduct path="/edit/:id" />
                    <SalesForm path="/sales/:id" />
            </Router>

        </div>
    );
}

export default App;