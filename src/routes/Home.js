import React from "react";

import { NavLink, Outlet } from "react-router-dom";
import { getBebidas } from "../bebidas";

function Home() {
  let bebidas = getBebidas();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {bebidas.map((bebida) => (
          <NavLink
            style={{ display: "block", margin: "1rem 0" }}
            to={`/home/${bebida.id}`}
            key={bebida.id}
          >
            {bebida.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
