import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { apartmentService } from "../../service/apartmentService";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import Swal from 'sweetalert2';
// import styled from 'styled-components';
// import { FormGroup } from 'react-bootstrap/FormGroup';
// import { Button } from 'react-bootstrap/Button';
// import { Label } from 'react-bootstrap/FormLabel';

// const FormContainer = styled.div`
// max-width: 400px;
// margin: 0 auto;
// border: solid 1px black;
// padding: 2%;
// margin-top: 3%;
// margin-bottom: 3%;
// border-radius: 40px;`

export default function AddAlojamiento() {
  //   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "0",
    title: "",
    price: "",
    city: "",
    image: "",
    description: "",
  });

  //   const handleChange = (event) => {
  //     setFormData({ ...formData, [event.target.name]: event.target.value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await fetch("http://localhost:3000/apartments", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });
  //       navigate("/ApartamentShow");

  //       if (!response.ok) {
  //         throw new Error("Error al añadir alojamiento");
  //       }

  //       Swal.fire("Alojamiento creado exitosamente");
  //     } catch (error) {
  //       console.error("Error al crear alojamiento:", error);
  //       alert("Error al crear alojamiento");
  //     }
  //   };

  //si hacemos clic en el boton de editar entonces la variable editable es true para que se pueda editar ya que al inicio es false

  //cuando hagamos cambios en cualquier campo, que esto se indica por name, cambiamos su value asi tomamos el nuevo valor

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
    let respuesta = await apartmentService.submitApartment(formData);

    modalBotones(
      "Enhorabuena",
      "Los datos del alumno se han guardado con exito.",
      "success",
      false
    );
  }

  async function AddData() {
    try {
      const apartments = await apartmentService.updateApartment(
        editedApartment,
        editedApartment.id
      );
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  }

  return (
    <>
      <Header />
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
                  border: "1px solid black", // Agrega un borde sólido de 1px negro
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
                  border: "1px solid black", // Agrega un borde sólido de 1px negro
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
                    border: "1px solid black", // Agrega un borde sólido de 1px negro
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
                    border: "1px solid black", // Agrega un borde sólido de 1px negro
                    outline: "none",
                    width: "100%",
                    overflowX: "auto",
                  }}
                />
              </span>
              <span >
                <label htmlFor="img" style={{ color: "black" }}>
                Url de la imagen
                </label>
                <input
                  type="text"
                  name="img"
                  value={formData.image}
                  onChange={handleImage}
                  style={{
                    border: "1px solid black", // Agrega un borde sólido de 1px negro
                    outline: "none",
                    width: "100%",
                    overflowX: "auto",
                  }}
                />
              </span>
            </Card.Text>
            <div style={{ textAlign: "center" }}>
              <Button variant="success" onClick={handleSaveClick}>
                Guardar
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
    // <>
    //   <Header />
    //   <FormContainer>
    //     <h2>Añadir Alojamiento</h2>
    //     <form onSubmit={handleSubmit}>
    //       <FormGroup>
    //         <Label htmlFor="title">Nombre: </Label>
    //         <Input
    //           type="text"
    //           id="title"
    //           name="title"
    //           value={formData.title}
    //           onChange={handleChange}
    //           required
    //         />
    //       </FormGroup>
    //       <FormGroup>
    //         <Label htmlFor="price">Precio: </Label>
    //         <Input
    //           type="text"
    //           id="price"
    //           name="price"
    //           value={formData.price}
    //           onChange={handleChange}
    //           required
    //         />
    //       </FormGroup>
    //       <FormGroup>
    //         <Label htmlFor="city">Dirección: </Label>
    //         <Input
    //           type="text"
    //           id="city"
    //           name="city"
    //           value={formData.city}
    //           onChange={handleChange}
    //           required
    //         />
    //       </FormGroup>
    //       <FormGroup>
    //         <Label htmlFor="image">Imagen: </Label>
    //         <Input
    //           type="text"
    //           id="image"
    //           name="image"
    //           value={formData.image}
    //           onChange={handleChange}
    //           required
    //         />
    //       </FormGroup>
    //       <FormGroup>
    //         <Label htmlFor="description">Descripción: </Label>
    //         <Input
    //           type="text"
    //           id="description"
    //           name="description"
    //           value={formData.description}
    //           onChange={handleChange}
    //           required
    //         />
    //       </FormGroup>
    //       <Button type="submit">Añadir</Button>
    //     </form>
    //   </FormContainer>

    //   <Footer />
    // </>
  );
}
