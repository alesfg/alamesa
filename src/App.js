// App es TABBAR!
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Bebidas from "./routes/Details";

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
        <Link to="/home">Home</Link> | <Link to="/cart">Cart</Link>|{" "}
        <Link to="/favs">Favs</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
