import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FinalizarCompra.css';
import { Modal } from 'bootstrap';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const FormularioReserva = ({ total }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });

  const [modalInstance, setModalInstance] = useState(null);
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  useEffect(() => {
    const modalElement = document.getElementById('termsModal');
    const modalInstance = new Modal(modalElement);
    setModalInstance(modalInstance);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(formData);
    setCompraFinalizada(true); // Marcar la compra como finalizada
    if (modalInstance) {
      modalInstance.show(); // Mostrar el modal al finalizar la compra
    }
  };

  return (
    <>
    <Header/>
    <main style={{marginTop: "125px"}}>
    <div className="container3 mt-5">
      <h2>Finaliza tu Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" style={{ width: '300px' }} id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" style={{ width: '300px' }} id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>
            <p>Indicanos la raza y tamaño de tu perro</p>
          </label>
          <textarea></textarea>
        </div>
        <div className="mb-3">
          <label className="">Total</label>
          <p>{total} euros</p>
        </div>
        <button type="submit" className="btn btn-primary">Finalizar Reserva</button>
        <div className="mt-3 form-check">
          <input type="checkbox" className="form-check-input" id="terms" name="termsChecked" checked={formData.termsChecked} onChange={handleChange} required />
          <label className="form-check-label" htmlFor="terms">Acepto los términos y condiciones</label>
        </div>
      </form>

      {/* Modal */}
      <div className="modal" id="termsModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Gracias!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             Gracias por realizar su Reserva
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
};

export default FormularioReserva;








