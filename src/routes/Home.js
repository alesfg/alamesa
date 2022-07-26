import React from "react";
import "./styles/Home.css";

import { NavLink, Outlet } from "react-router-dom";
import { getBebidas } from "../bebidas";
import TopSection from "../components/TopSection";

function Home() {
  let bebidas = getBebidas();
  return (
    <>
      <TopSection title='Home' />
      <div className="home">
        <nav
          style={{
            borderRight: "solid 1px",
            // padding: "1rem",
          }}
        >
          {bebidas.map((bebida) => (
            <NavLink
              // style={{ margin: "1rem 0" }}
              to={`/${bebida.id}`}
              key={bebida.id}
            >
              {bebida.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
