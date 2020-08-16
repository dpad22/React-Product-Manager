import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import OneProduct from "./Product";


const ShowContainer = (props) => {

    const [product, setProduct] = useState([])
    const [sales, setSales] = useState([])
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)


const getOneProduct = async() => {
    let result = await axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then((res)=> {
            console.log("data", res.data)
            console.log("Sales data", 1)
            setProduct(res.data)
            setSales(res.data.sales)
            setLoading(true);
            return res.data
        })
        .catch ((errors) => {
            console.log(errors)
    });
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
        .catch((errors) => console.log(errors));
};

const sumSales = (arr, type) => {

    return arr.reduce((total, obj) => {
        return total + obj[type];
    }, 0);
}
    let totalQuantity = sumSales(sales, 'sold');
        console.log("totalQuantity", totalQuantity )

useEffect(() => {
    getOneProduct(); // eslint-disable-next-line
}, []);

    return (
            
        <div>
            {loading && <OneProduct
            total= { totalQuantity }
            product= { product }
            salesList= { sales }
            deleteProduct= { deleteProduct }
            />}
        </div>
    );
};

export default ShowContainer;