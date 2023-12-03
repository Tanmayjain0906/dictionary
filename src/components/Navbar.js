import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <div>
                <h2>Dictionary App</h2>
            </div>

            <div>
                <Link to="/">Home</Link>
                <Link to="/history">History</Link>
            </div>
        </div>
    )
}

export default Navbar;