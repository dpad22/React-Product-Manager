import React from "react";
import moment from 'moment'
import { Link } from "@reach/router";
import './Product.css'


const OneProduct = (props) => {

    const { product,
            salesList,
            total,
            deleteProduct
        } = props
        console.log("One Product salesList",salesList)
        console.log("One Product product",product)
        console.log("total",total)

    
return (
    <div className="container">
        <h1>Title: { product.title }</h1>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <p>Total Sales: {total} </p>

        
            <Link to={`/sales/${product._id}`} className="btn btn-primary">
                Add Sale
            </Link>
            <Link to={`/edit/${product._id}`} className="btn btn-success">
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
                    <th>Qty Sold</th>
                    <th>Date Sold</th>
                </tr>
                </thead>
                    <tbody>
                        {salesList.map((list, i)=> (
                        <tr key={i}>
                            <td> {list.sold}</td>
                            <td>{moment(list.dateSold).format("MMMM Do, YYYY")}</td>
                            {console.log("type", typeof(list.dateSold))}
                        </tr>
                        ))}
                    </tbody>
            </table>
    </div>
    );
};

export default OneProduct;