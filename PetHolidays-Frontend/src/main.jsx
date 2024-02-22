import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinalizarReserva from "./Components/FinalizarReserva/FinalizarReserva"; // Importa tu componente FinalizarReserva
import Home from "./Components/Home/Home";
import User from "./views/user/User";
import Admin from "./views/admin/Admin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/FinalizarReserva" element={<FinalizarReserva />} />
        <Route path="/User" element={<User />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
