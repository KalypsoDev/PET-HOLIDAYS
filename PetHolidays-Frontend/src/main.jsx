import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApartmentShow from './components/card/ApartmentShow';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* modificar e indicar las rutas correctas, ahora pongo solo una pagina para pruebas */}

        <Route path="/" element={<ApartmentShow isAdmin={true}/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

