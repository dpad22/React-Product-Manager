import React from "react";
import { Link } from "@reach/router";


const OneProduct = (props) => {

    const { product,
            id,
            sold,
            date_Sold,
            deleteProduct
        } = props


return (
    <div className="container bg-light">
        <h1>Title: {product.title}</h1>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
            <Link to={`/sales/${id}`} className="btn btn-primary">
                Add Sale
            </Link>
            <Link to={`/edit/${id}`} className="btn btn-success">
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
                    <tr>
                        <td>{product.sold}</td>
                        <td>{product.date_Sold}</td>
                    </tr>
                    </tbody>
            </table>
    </div>
    );
};

export default OneProduct;