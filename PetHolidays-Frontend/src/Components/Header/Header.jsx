import "./Header.css"
import logo from "../../assets/logo-nav.png";

export default function Header() {
  return (
    <article className="containerBodyHeader">
      <div className="containerBodyHeaderLogos">
        <img className="logotipoHeader" src={logo} alt="logotipo Pet Holidays" />
        <h1 className="h1LogoHeader">Pet Holydays</h1>
      </div>
      <ul className="containerBodyHeaderLista">
        <li>INICIO</li>
        <li>ALOJAMIENTO</li>
        <li>CONTACTO</li>
        <li>ADMINISTRAR</li>
      </ul>
    </article>
  );
}
