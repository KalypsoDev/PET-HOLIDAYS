import "./accommodationShow.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { accommodationService } from "../../service/accommodationService";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AccommodationShow({ isAdmin }) {
  const navigate = useNavigate();
  const [accommodationList, setAccommodationList] = useState([]);
  const [accommodationSelected, setAccommodationSelected] = useState(null);

  //esta es la función que carga los datos almacenados en el json
  async function getData() {
    try {
      const accommodations = await accommodationService.getAllAccommodations();
      setAccommodationList(accommodations);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }

  useEffect(() => {
    getData();
  }, [accommodationList]);

  function handleClick() {}

  function handleClickEdit(accommodation, id) {
    const findedAccommodation = accommodationList.find(
      (accommodation) => accommodation.id === id
    );
    setAccommodationSelected(findedAccommodation);
    navigate("/EditAccommodation", { state: { accommodation } });
  }

  async function handleClickDelete(id) {
    try {
      const accommodations = await accommodationService.deleteAccommodation(id);

      const updatedAccommodationList = accommodationList.filter(
        (accommodation, id) => id !== idToDelete
      );

      setAccommodationList(updatedAccommodationList);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }

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

  return (
    <>
    <main style={{marginTop: "125px"}}>
      <Container>
        {isAdmin ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
              marginRight: "5px",
            }}
          >
            <Button variant="primary" className="custom-button">
              <Link to={"/AddAlojamiento"} style={{textDecoration: "none", color: "inherit"}}>Añadir Alojamiento</Link>
            </Button>
            <div style={{ width: "10px" }}></div>{" "}
          </div>
        ) : (
          <br></br>
        )}
        {accommodationList.map((accommodation, id) => (
          <div
            key={id}
            className={
              id % 3 === 0 ? "amarillo" : id % 3 === 1 ? "rosa" : "verde"
            }
          >
            <Row className="mb-2">
              <Col md={4}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={accommodation.image}
                    style={{
                      width: "300px",
                      height: "300px",
                      alignSelf: "center",
                    }}
                  />
                </div>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <br></br>
                      <Card.Title style={{ color: "blue",  fontSize: 30 }}>
                        {accommodation.title}
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "blue",
                          padding: "5px",
                          marginBottom: "10px",
                        }}
                      >
                        {accommodation.city}
                      </Card.Text>
                      <Card.Text>
                        {accommodation.description}
                        <br></br>
                        <span className="precioDestacado">
                          {accommodation.price}
                        </span>
                      </Card.Text>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      {isAdmin ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "5px",
                            marginRight: "5px",
                          }}
                        >
                          <Button
                            variant="primary"
                            className="custom-button"
                            onClick={() =>
                              handleClickEdit(accommodation, accommodation.id)
                            }
                      
                          >
                            Editar
                          </Button>
                          <div style={{ width: "10px" }}></div>{" "}
                          {/* Espacio entre los botones */}
                          <Button
                            variant="primary"
                            onClick={() => handleClickDelete(accommodation.id)}
                            className="custom-button"
                          >
                            Eliminar
                          </Button>
                        </div>
                      ) : (
                        <Button variant="primary" className="custom-button">
                          <Link to={"/FinalizarReserva"} style={{textDecoration: "none", color: "inherit"}}>Reservar</Link>
                        </Button>
                      )}{" "}
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
      </main>
    </>
  );
}
export default AccommodationShow;
