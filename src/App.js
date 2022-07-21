// App es TABBAR!
import "./App.css";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>(es solo el TABBAR)!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/home">Home</NavLink> | <NavLink to="/cart">Cart</NavLink>|{" "}
        <NavLink to="/favs">Favs</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
