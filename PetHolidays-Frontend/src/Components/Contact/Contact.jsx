import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { Modal } from 'bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MapComponent from './MapComponent';

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [modalInstance, setModalInstance] = useState(null);
  const [contacto, setContacto] = useState(false);

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
    setContacto(true); // Marcar la compra como finalizada
    if (modalInstance) {
      modalInstance.show(); // Mostrar el modal al finalizar la compra
    }
  };

  return (
    <>
    <Header/>
    <div className="container4 mt-5">
      <h2>Contáctanos</h2>
      <div className="contact-container">
        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Tu nombre</label>
            <input type="text" className="form-control" style={{ width: '300px' }} id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Tu correo electrónico</label>
            <input type="email" className="form-control" style={{ width: '300px' }} id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>
              <p>Tu mensaje</p>
            </label>
            <textarea></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
          <div className="mt-3 form-check">
            <input type="checkbox" className="form-check-input" id="terms" name="termsChecked" checked={formData.termsChecked} onChange={handleChange} required />
            <label className="form-check-label" htmlFor="terms">Acepto los términos y condiciones</label>
          </div>
        </form>
        <div className='container-mapa'>
        {/* Mapa */}
        <MapComponent/>
      </div>
      </div>

      {/* Modal */}
      <div className="modal" id="termsModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Gracias!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             Tu mensaje ha sido enviado
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FormularioContacto;







