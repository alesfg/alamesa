// App es TABBAR!
import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Tabbar from "./Pages/Tabbar";

function App() {
  return (
    <div className="app">
      <Tabbar />
      <Outlet />
    </div>
  );
}

export default App;
