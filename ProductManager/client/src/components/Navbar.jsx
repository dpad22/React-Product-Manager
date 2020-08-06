import React from "react";
import { Link } from "@reach/router";
import './Nav.css';

const Navbar = (props) => {
    return (
        <div className="nav-bar">
            <Link to="/" className="nav-link">
                Home
            </Link>{" "}
            <Link to="/new" className="nav-link">
                Add Product
            </Link>
        </div>
    )
}
export default Navbar



