import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinalizarReserva from "./Components/FinalizarReserva/FinalizarReserva"; // Importa tu componente FinalizarReserva
import Home from "./Components/Home/Home";
import User from "./views/user/User";
import Admin from "./views/admin/Admin";
import Contact from "./Components/Contact/Contact";
import EditAccommodation from "./Components/EditAccommodation/EditAccommodation";
import AddAccommodation from "./Components/AddAccommodation/AddAccommodation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FinalizarReserva" element={<FinalizarReserva />} />
        <Route path="/User" element={<User />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/EditAccommodation" element={<EditAccommodation />} />
        <Route path="/AddAccommodation" element={<AddAccommodation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
