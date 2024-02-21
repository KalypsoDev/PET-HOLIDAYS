import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FormularioReserva from './FinalizarReserva/FinalizarReserva.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FormularioReserva/>
  </React.StrictMode>,
)
