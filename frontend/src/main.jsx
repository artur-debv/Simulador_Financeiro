import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Seu arquivo de estilos, caso tenha

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
