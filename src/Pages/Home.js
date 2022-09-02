import React from "react";
import "./styles/Home.css";

import { NavLink, Outlet } from "react-router-dom";
import { getBebidas } from "../bebidas";
import TopSection from "../components/TopSection/TopSection";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  let bebidas = getBebidas();
  return (
    <>
      <TopSection title="Menú" />
      <div className="home">
          {bebidas.map((bebida) => (
            <div className='card'>
              <NavLink
                // style={{ margin: "1rem 0" }}
                to={`/${bebida.id}`}
                key={bebida.id}
                style={{ color: "white" }}
                >
                <ProductCard name={bebida.name} price={bebida.price} img={bebida.img} />
              </NavLink>
            </div>
          ))}
        <Outlet />
      </div>
    </>
  );
}

export default Home;
