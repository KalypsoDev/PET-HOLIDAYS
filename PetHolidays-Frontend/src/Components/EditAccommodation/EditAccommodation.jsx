import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react"; // Importa useEffect para llamar a getData una vez que el componente se ha montado
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import { accommodationService } from "../../service/accommodationService";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function EditAccommodation() {
  const location = useLocation();
  const accommodation = location.state?.accommodation;

  const [editable, setEditable] = useState(false);
  const [editedAccommodation, setEditedAccommodation] = useState({ ...accommodation });

  //si hacemos clic en el boton de editar entonces la variable editable es true para que se pueda editar ya que al inicio es false
  const handleEditClick = () => {
    setEditable(true);
  };

  //cuando hagamos cambios en cualquier campo, que esto se indica por name, cambiamos su value asi tomamos el nuevo valor
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedAccommodation({ ...editedAccommodation, [name]: value });
  };
  
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
    modalBotones(
      "Guardado",
      "Sus cambios se han guardado correctamente",
      "success",
      false
    );
  };

  async function updateData() {
    try {
      const accommodations = await accommodationService.updateAccommodation(
        editedAccommodation,
        editedAccommodation.id
      );
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  }

  return (
    <>
      <Header />
      <main style={{marginTop: "125px"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card className="sombreado" style={{ width: "44rem" }}>
          <div
            style={{
              color: "green",
              textAlign: "center",
              backgroundColor: "lightgray",
            }}
          >
            {/* <input type="text" name="category" value={editable ? editedProduct.category : product.category} onChange={handleInputChange} disabled={!editable}  style={{ border: 'none', outline: 'none' }}/> */}
          </div>
          <Card.Img
            variant="top"
            src={editedAccommodation.image || accommodation.image}
          />
          <Card.Body>
            <Card.Title style={{ color: "green" }}>
              <input
                name="title"
                value={editedAccommodation.title}
                onChange={handleInputChange}
                style={{ border: "none", outline: "none" }}
              />
            </Card.Title>
            <Card.Text>
              <textarea
                name="description"
                value={editedAccommodation.description}
                onChange={handleInputChange}
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  overflowX: "auto",
                }}
              />
              <br />
              <span className="precioDestacado">
                <input
                  type="text"
                  name="city"
                  value={editedAccommodation.city}
                  onChange={handleInputChange}
                  style={{ border: "none", outline: "none" }}
                />
              </span>
              <span className="precioDestacado">
                <input
                  type="number"
                  name="price"
                  value={editedAccommodation.price}
                  onChange={handleInputChange}
                  style={{ border: "none", outline: "none" }}
                />
              </span>
            </Card.Text>
            <div style={{ textAlign: "center" }}>
              {/* {editable 
              ? <Button variant="success" onClick={handleSaveClick} >Guardar</Button>
              : <Button variant="primary" onClick={handleEditClick} >Editar</Button>
            } */}
              <Button variant="success" onClick={handleSaveClick}>
                Guardar
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      </main>
      <Footer />
    </>
  );
}

export default EditAccommodation;
