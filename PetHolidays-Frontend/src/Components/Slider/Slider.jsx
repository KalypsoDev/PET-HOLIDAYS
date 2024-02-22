import chair from "../../assets/chairs-2181947_1280.jpg";
import kitchen from "../../assets/kitchen-2165756_1280.jpg";
import living from "../../assets/living-room-1835923_1920.jpg";
import man from "../../assets/man-2425121_1280.jpg";
import dog from "../../assets/perro-casa.webp";
import Carousel from "react-bootstrap/Carousel";
import BodyHome from "../BodyHome/BodyHome";

export default function Slider() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={man} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={kitchen} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={living} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={chair} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dog} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <BodyHome />
    </>
  );
}
