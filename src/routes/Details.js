import React from 'react'

import { Link, Outlet } from "react-router-dom";
import { getBebidas } from '../bebidas'

function Details() {
    let bebidas = getBebidas()
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {bebidas.map((bebida) => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/bebidas/${bebida.id}`}
                        key={bebida.id}
                    >
                        {bebida.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>)
}

export default Details