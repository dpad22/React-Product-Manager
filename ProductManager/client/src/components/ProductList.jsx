import React from "react";
import { Link } from "@reach/router";
import './ProductList.css'

const AllProducts = (props) => {

    const { productList,
        } = props


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    
    return (
        <div className="container">
            <h3>Available Items</h3>
            <table id="table-filter" className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Total Sales</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, i) => (
                        <tr key={i}>
                        <td>{product.category}</td>
                        <td>{product.title}</td>
                        <td>{formatter.format(product.price)}</td>
                        <td>{product.sales.reduce((currentTotal, item)=> {
                            console.log(item.sold + currentTotal)

                            return item.sold + currentTotal
                        }, 0)}
                        </td>
                        <td>
                        {formatter.format(product.sales.reduce((currentTotal, item)=> {
                            console.log("running total", item.sold + currentTotal)
                            console.log(item.sold)
                            console.log("currentTotal", currentTotal)
                            return ((item.sold * product.price) + currentTotal)
                        }, 0))}
                        </td>

                        <td className="links"><Link to={`/products/${product._id}`}>View</Link></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
};

export default AllProducts;

