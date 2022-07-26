import React from 'react'
import { NavLink } from "react-router-dom";
import "./styles/Tabbar.css";

function Tabbar() {
    return (
        <nav className="tabbar">
            <NavLink to="/">Home</NavLink> | <NavLink to="/cart">Cart</NavLink>|{" "}
            <NavLink to="/favs">Favs</NavLink>
        </nav>)
}

export default Tabbar