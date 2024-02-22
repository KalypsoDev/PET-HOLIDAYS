import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApartmentShow from './components/card/ApartmentShow'; // Importa tu componente ApartmentShow
import FinalizarReserva from './FinalizarReserva/FinalizarReserva'; // Importa tu componente FinalizarReserva

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ApartmentShow isAdmin={false} />} />
        <Route path="/FinalizarReserva" element={<FinalizarReserva />} />
        
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
   
)
