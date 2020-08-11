import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const SalesForm = (props) => {
    const [sold, setSold] = useState(0);
    const [date_Sold, setDate_Sold] = useState("");
    const [errors, setErrors] = useState({});


const addSale = (e) => {
    e.preventDefault();
    const sale = {
        sold,
        date_Sold
    };
    console.log(sale)
    axios
        .post(`http://localhost:8000/api/products/${props.id}`, sale)
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
        <h3>Add New Sale</h3>
        <form onSubmit={addSale}>

            <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
                Quantity Sold
            </label>
                <div className="col-sm-10">
                    <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setSold(e.target.value)}
                    value={sold}
                    />
                    {errors.sold ? (
                    <p className="text-danger">
                        {errors.sold.properties.message}
                    </p>
                    ) : (
                    ""
                    )}
                </div>
            </div>

            <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
                Date Sold
            </label>
                <div className="col-sm-10">
                    <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setDate_Sold(e.target.value)}
                    value={date_Sold}
                    />
                    {errors.date_Sold ? (
                    <p className="text-danger">
                        {errors.date_Sold.properties.message}
                    </p>
                    ) : (
                    ""
                    )}
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit" className="btn btn-primary">
                        Add Sale
                    </button>
                </div>
            </div>
        </form>
        </div>
    );
};
export default SalesForm;