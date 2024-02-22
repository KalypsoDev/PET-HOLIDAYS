import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react'; // Importa useEffect para llamar a getData una vez que el componente se ha montado
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import { apartmentService } from '../../service/apartmentService';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



function EditApartment() {
  const location = useLocation();
  const apartment = location.state?.apartment;

  


  const [editable, setEditable] = useState(false);
  const [editedApartment, setEditedAparment] = useState({ ...apartment });

  //si hacemos clic en el boton de editar entonces la variable editable es true para que se pueda editar ya que al inicio es false
  const handleEditClick = () => {
    setEditable(true);
  };

  //cuando hagamos cambios en cualquier campo, que esto se indica por name, cambiamos su value asi tomamos el nuevo valor
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedAparment({ ...editedApartment, [name]: value });
  };

  //cuando hacemos clic en el boton guardar, actualizamos los datos en el json y luego la vble editable a false para que se pongan los campos como No editables otra vez
  function modalBotones(titulo, texto, icono, danger) {
    swal({
      title: titulo,
      text: texto,
      icon: icono,
      buttons: "Continuar",
      dangerMode: danger,
      closeOnClickOutside: false,
      closeOnEsc: false,
    });
  }
  
  
  
  const handleSaveClick = () => {
    updateData();
    setEditable(false);
    modalBotones("Guardado","Sus cambios se han guardado correctamente", "success", "true")
  };

 

  async function updateData() {
    try {
      const apartments = await apartmentService.updateApartment(editedApartment, editedApartment.id);
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };

  return (
    <>
    <Header/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card className="sombreado" style={{ width: '44rem' }}>
        <div style={{ color: 'green', textAlign: 'center', backgroundColor: 'lightgray' }}>
          {/* <input type="text" name="category" value={editable ? editedProduct.category : product.category} onChange={handleInputChange} disabled={!editable}  style={{ border: 'none', outline: 'none' }}/> */}
        </div>
        <Card.Img variant="top" src={editedApartment.image || apartment.image} />
        <Card.Body>
          <Card.Title style={{ color: 'green' }}>
            <input type="text" name="name" value={editedApartment.title} onChange={handleInputChange}  style={{ border: 'none', outline: 'none' }} />
          </Card.Title>
          <Card.Text>
            <textarea name="description" value={editedApartment.description} onChange={handleInputChange}  style={{ border: 'none', outline: 'none', width: '100%', overflowX: 'auto' }} />
            <br />
            <span className="precioDestacado">
              <input type="text" value={editedApartment.city} onChange={handleInputChange} style={{ border: 'none', outline: 'none' }} />
            </span>
            <span className="precioDestacado">
              <input type="number" name="price" value={editedApartment.price} onChange={handleInputChange} style={{ border: 'none', outline: 'none' }} />
            </span>
          </Card.Text>
          <div style={{ textAlign: 'center' }}>
            {/* {editable 
              ? <Button variant="success" onClick={handleSaveClick} >Guardar</Button>
              : <Button variant="primary" onClick={handleEditClick} >Editar</Button>
            } */}
            <Button variant="success" onClick={handleSaveClick} >Guardar</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    <Footer/>
    </>
  );
}

export default EditApartment;
