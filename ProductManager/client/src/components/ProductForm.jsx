import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import './ProductForm.css'

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

const addProduct = (e) => {
    e.preventDefault();
    const product = {
        title,
        category,
        price,
        description,
    };
    axios
        .post("http://localhost:8000/api/products", product)
        .then((res) => {
            if (res.data.errors) {
            setErrors(res.data.errors);
            } else {
            navigate("/");
            }
        })
        .catch((err) => console.log(err));
    };

return (
    <div className="container">
        <h3>Add New Product</h3>
        <form onSubmit={addProduct}>

            <div className="row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
                Title
            </label>
                <div className="input-wrapper">
                    <input
                    type="text"
                    className="inputs"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Enter Title"
                    />
                    {errors.title ? (
                    <p className="text-danger"> {errors.title.properties.message} </p>
                    ) : (
                    ""
                    )}
                </div>
            </div>

            <div className="row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
                Category
            </label>
                <div className="input-wrapper">
                    <input
                    type="text"
                    className="inputs"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    placeholder="Enter Category"
                    />
                    {errors.category ? (
                    <p className="text-danger"> {errors.category.properties.message} </p>
                    ) : (
                    ""
                    )}
                </div>
            </div>

            <div className="row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
                Price
            </label>
                <div className="input-wrapper">
                    <input
                    type="number"
                    className="inputs"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    placeholder="Enter Price"
                    />
                    {errors.price ? (
                    <p className="text-danger"> {errors.price.properties.message} </p>
                    ) : (
                    ""
                    )}
                </div>
            </div>

            <div className="row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
                Description
            </label>
                <div className="input-wrapper">
                    <input
                    type="text"
                    className="inputs"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Enter Description"
                    />
                    {errors.description ? (
                    <p className="text-danger">
                        {errors.description.properties.message}
                    </p>
                    ) : (
                    ""
                    )}
                </div>
            </div>

            <div className="form-group row">
                <div className="button">
                    <button type="submit" className="btn btn-primary">
                        Create
                    </button>
                </div>
            </div>
        </form>
        </div>
    );
};
export default ProductForm;