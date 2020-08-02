import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

// Styling
const productStyle = {
    padding: "20px",
    marginTop: "30px",
};

const Product = (props) => {
const [title, setTitle] = useState(props.title);
const [category, setCategory] = useState(props.category);
const [price, setPrice] = useState(props.price);
const [description, setDescription] = useState(props.description);// eslint-disable-next-line
const [sales, setSales] = useState(props.sales)
const [date_Sold, setDate_Sold] = useState(props.date_Sold)
const [errors, setErrors] = useState({});

useEffect(() => {
getOneProduct();
});

const getOneProduct = () => {
    axios
        .get(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => {
            getOneProduct();
            setTitle(res.data.title);
            setCategory(res.data.category);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setSales(res.data.sales);
            setDate_Sold(res.data.date_Sold);
        })
        .catch((err) => console.log(err));
};

const deleteProduct = (e) => {
e.preventDefault();
    axios
        .delete(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => {
        if (res.data.errors) {
            setErrors(res.data.errors);
        } else {
            navigate("/");
        }})
        .catch((err) => console.log(err));
};

const salesTotal = [{sales, date_Sold}]

return (
    <div className="container bg-light" style={productStyle}>
        <h1>Title: {title}</h1>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>Description: {description}</p>
            <Link to={`/sales/${props.id}`} className="btn btn-primary">
                Add Sale
            </Link>
            <Link to={`/edit/${props.id}`} className="btn btn-success">
                Edit Product
            </Link>
        <button
            className="btn btn-danger"
            type="submit"
            onClick={deleteProduct}
            >
            Delete Product
        </button>
        <h3>Available Items</h3>
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th>Sales</th>
                    <th>Date Sold</th>
                </tr>
                </thead>
                    <tbody>
                    {salesTotal.map((sale, i) => (
                        <tr key={i}>
                        <td>{sale.sales}</td>
                        <td>{sale.date_Sold}</td>
                        </tr>
                    ))}
                    </tbody>
            </table>
    </div>
    );
};

export default Product;