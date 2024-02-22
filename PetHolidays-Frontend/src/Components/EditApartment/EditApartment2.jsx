// import "./EditApartment.css";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


// function EditApartment2({ apartment }) {
//   const [apartmentList, setApartmentList] = useState([]);
//   const [apartmentSelected, setApartmentSelected] = useState([]);

//   function selectApartment() {
//     // let auxApartment = apartmentList.find(apartment => apartment.id === id);
//     setApartmentSelected(apartment);
//   }

//   useEffect(() => {
//     selectApartment();
//     setApartmentList([apartmentSelected]);
//   }, []);

//   return (
//     <>
//       <Container>
//         {apartmentList.map((apartment, index) => (
//           <div
//             key={index}
//             className={
//               index % 3 === 0 ? "amarillo" : index % 3 === 1 ? "rosa" : "verde"
//             }
//           >
//             <Row className="mb-2">
//               <Col md={4}>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     height: "100%",
//                   }}
//                 >
//                   <Card.Img
//                     variant="top"
//                     src={apartment.image}
//                     style={{
//                       width: "300px",
//                       height: "300px",
//                       alignSelf: "center",
//                     }}
//                   />
//                 </div>
//               </Col>
//               <Col md={8}>
//                 <Card.Body>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "flex-start",
//                     }}
//                   >
//                     <div>
//                       <br></br>
//                       <Card.Title style={{ color: "blue" }}>
//                         {apartment.name}
//                       </Card.Title>
//                       <Card.Text
//                         style={{
//                           color: "blue",
//                           padding: "5px",
//                           marginBottom: "10px",
//                         }}
//                       >
//                         {apartment.title}
//                       </Card.Text>
//                       <Card.Text>
//                         {apartment.description}
//                         <br></br>
//                         <span className="precioDestacado">
//                           {apartment.price}
//                         </span>
//                       </Card.Text>
//                     </div>
//                     <div style={{ textAlign: "right" }}>
//                       <Button
//                         variant="primary"
//                         className="custom-button"
//                         onClick={handleGuardar}
//                       >
//                         Guardar
//                       </Button>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Col>
//             </Row>
//           </div>
//         ))}
//       </Container>
//     </>
//   );
// }
// export default EditApartment;
