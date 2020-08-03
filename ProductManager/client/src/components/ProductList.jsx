import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";


const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [state, setState] = useState({
        sales: 0,
        revenue: 0,
    });

    const getProductsAPI = () => {
        axios
        .get("http://localhost:8000/api/products")
        .then((res) => {
            setProducts(res.data);
            getProductsAPI();
        })
        .catch((err) => {
            console.log(err);
        });
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


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    useEffect(() => {
        getProductsAPI(); // eslint-disable-next-line
    }, [props]);
    
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
                    {products.map((product, i) => (
                        <tr key={i}>
                        <td>{product.category}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{state.sales}</td>
                        <td>{formatter.format(state.sales * product.price)}</td>
                        <td>
                            <Link to={`/products/${product._id}`}>View</Link>
                            <button onClick={ addSale }>Add Sale</button>
                            <button onClick={ removeSale } >Remove Sale</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllProducts;

