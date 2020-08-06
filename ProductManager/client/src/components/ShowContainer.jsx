import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import OneProduct from "./Product";


const ShowContainer = (props) => {
    const [product, setProduct] = useState([])
    const [id,setId] = useState("")
    const [sold, setSold] = useState([])
    const [date_Sold, setDate_Sold] = useState([])
    const [errors, setErrors] = useState({});

const getOneProduct = async() => {
    let result = await axios
        .get(`http://localhost:8000/api/products/${props.id}`)
        .then((res) => {
            console.log("data", res.data)
            console.log("id",props.id)
            setId(props.id)
            setSold(res.data.sold);
            setDate_Sold(res.data.date_Sold);
            return res.data

        })
        .catch((errors) => {
            console.log(errors)
    });
        console.log("result", result)
        setProduct(result)
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


useEffect(() => {
    getOneProduct(); // eslint-disable-next-line
}, []);

return (
    <div>
        <OneProduct
        product= { product }
        id= { id }
        sold= { sold }
        date_Sold= { date_Sold }
        deleteProduct= { deleteProduct }
        />
    </div>
    );
};

export default ShowContainer;