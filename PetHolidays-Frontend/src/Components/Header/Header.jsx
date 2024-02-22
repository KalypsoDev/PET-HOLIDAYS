import "./Header.css"
import logo from "../../assets/logo-nav.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <article className="containerBodyHeader">
      <div className="containerBodyHeaderLogos">
        <img className="logotipoHeader" src={logo} alt="logotipo Pet Holidays" />
        <h1 className="h1LogoHeader">Pet Holidays</h1>
      </div>
      <ul className="containerBodyHeaderLista">
        <li className="containerBodyHeaderListaLi"><Link to="/">INICIO</Link></li>
        <li className="containerBodyHeaderListaLi"><Link to="/User">ALOJAMIENTO</Link></li>
        <li className="containerBodyHeaderListaLi"><Link to="/Contact">CONTACTO</Link></li>
        <li className="containerBodyHeaderListaLi"><Link to="/Admin">ADMINISTRAR</Link></li>
      </ul>
    </article>
  );
}
