import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import Favs from "./routes/Favs";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* 
        <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          >
            <Route path=":id" element={<Detail />} />
          </Route>
          */}
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favs" element={<Favs />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Ruta equivocada</p>
              <p>No hay nada aqui!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
