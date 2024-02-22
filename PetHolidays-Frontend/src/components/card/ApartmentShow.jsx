import './apartmentShow.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { apartmentService } from '../../service/apartmentService';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';



function ApartmentShow({ isAdmin }) {

    const navigate = useNavigate();
    const [apartmentList, setApartmentList] = useState([]);
    const [apartmentSelected, setApartmentSelected] = useState(null);

    //esta es la función que carga los datos almacenados en el json
    async function getData() {
        try {

            const apartments = await apartmentService.getAllApartments();
            setApartmentList(apartments);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };


    useEffect(() => {
        getData();
    }, []);

    function handleClick() {

        

    }

    function handleClickEdit() {

        //aqui pasamos a la pagina de edicion

    }

    function handleClickDelete() {

        //aqui eliminamos el elemento de la base de datos

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
    };


    return (
        <>

            <Container>
                {apartmentList.map((apartment, index) => (
                    <div key={index} className={index % 3 === 0 ? "amarillo" : index % 3 === 1 ? "rosa" : "verde"}>
                        <Row className="mb-2">
                            <Col md={4}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                    <Card.Img variant="top" src={apartment.image} style={{ width: '300px', height: '300px', alignSelf: 'center' }} />
                                </div>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <br></br>
                                            <Card.Title style={{ color: 'blue' }}>{apartment.name}</Card.Title>
                                            <Card.Text style={{ color: 'blue', padding: '5px', marginBottom: '10px' }}>
                                                {apartment.title}
                                            </Card.Text>
                                            <Card.Text>
                                                {apartment.description}<br></br>
                                                <span className="precioDestacado">{apartment.price}</span>
                                            </Card.Text>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>


                                            {isAdmin ? (
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', marginRight: '5px' }}>
                                                    <Button variant="primary" onClick={() => handleClickEdit()} className="custom-button">Editar</Button>
                                                    <div style={{ width: '10px' }}></div> {/* Espacio entre los botones */}
                                                    <Button variant="primary" onClick={() => handleClickDelete()} className="custom-button">Eliminar</Button>
                                                </div>

                                            ) : (
                                                <Button variant="primary" className="custom-button"> <Link to={'/FinalizarReserva'}>reservarrrr</Link></Button>
                                            )}                      </div>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Container>

        </>
    );
}
export default ApartmentShow;