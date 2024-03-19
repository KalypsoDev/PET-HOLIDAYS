import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { accommodationService } from "../../service/accommodationService";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function AddAccommodation() {
  const [formData, setFormData] = useState({
    id: "0",
    title: "",
    price: "",
    city: "",
    image: "",
    description: "",
  });

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

  function handleTitle(e) {
    setFormData({ ...formData, title: e.target.value });
  }
  function handleDescripcion(e) {
    setFormData({ ...formData, description: e.target.value });
  }
  function handleCity(e) {
    setFormData({ ...formData, city: e.target.value });
  }
  function handlePrice(e) {
    setFormData({ ...formData, price: e.target.value });
  }
  function handleImage(e) {
    setFormData({ ...formData, image: e.target.value });
  }

  async function handleSaveClick() {
    let respuesta = await accommodationService.submitAccommodation(formData);

    modalBotones(
      "Enhorabuena",
      "Los datos del alojamiento se han guardado con exito.",
      "success",
      false
    );
  }

  async function AddData() {
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
      <main style={{ marginTop: "125px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card className="sombreado" style={{ width: "44rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                <label htmlFor="description" style={{ color: "black" }}>
                  Titulo
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleTitle}
                  style={{
                    border: "1px solid black",
                    outline: "none",
                    width: "100%",
                    overflowX: "auto",
                  }}
                />
              </Card.Title>

              <Card.Text>
                <label htmlFor="description" style={{ color: "black" }}>
                  Descripción:
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleDescripcion}
                  style={{
                    border: "1px solid black",
                    outline: "none",
                    width: "100%",
                    overflowX: "auto",
                  }}
                />
                <br />
                <span className="precioDestacado">
                  <label htmlFor="description" style={{ color: "black" }}>
                    Dirección
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={handleCity}
                    style={{
                      border: "1px solid black",
                      outline: "none",
                      width: "100%",
                      overflowX: "auto",
                    }}
                  />
                </span>
                <span className="precioDestacado">
                  <label htmlFor="description" style={{ color: "black" }}>
                    Precio
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handlePrice}
                    style={{
                      border: "1px solid black",
                      outline: "none",
                      width: "100%",
                      overflowX: "auto",
                    }}
                  />
                </span>
                <span>
                  <label htmlFor="img" style={{ color: "black" }}>
                    Url de la imagen
                  </label>
                  <input
                    type="text"
                    name="img"
                    value={formData.image}
                    onChange={handleImage}
                    style={{
                      border: "1px solid black",
                      outline: "none",
                      width: "100%",
                      overflowX: "auto",
                    }}
                  />
                </span>
              </Card.Text>
              <div style={{ textAlign: "center" }}>
                <Button variant="success" onClick={handleSaveClick} >
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
