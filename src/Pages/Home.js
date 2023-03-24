import React from "react";
import "./styles/Home.css";
import { NavLink } from "react-router-dom";

import Card from "../components/Card/Card";
import { getBebidas } from "../bebidas";
import TopSection from "../components/TopSection/TopSection";

function Home() {
  let bebidas = getBebidas();
  return (
    <>
      <TopSection title="Menú" />
      <div className="home">
        <nav
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around",
          }}
        >
          {bebidas.map((bebida) => (
            <div>
              <NavLink to={`/${bebida.id}`} key={bebida.id}>
                <Card bebida={bebida} />
              </NavLink>
            </div>
          ))}
        </nav>
        {/* <Outlet /> */}
      </div>
    </>
  );
}

export default Home;
