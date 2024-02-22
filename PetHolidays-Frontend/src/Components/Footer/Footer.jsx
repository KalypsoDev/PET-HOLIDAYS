import "./Footer.css";
import logoFooter from "../../assets/logo-footer.png";
import socialMedia from "../../assets/socialMedia.png";

export default function Footer() {
  return (
    <main className="contenedorMainFooter">
      <article>
        <div className="containerContactPet">
          <img src={logoFooter} alt="logotipo Footer" />
          <ul className="listaFooter">
            <li className="lista">Contacto</li>
            <li className="lista">685452985 - 904768823</li>
            <li className="lista">contacto@petholidays.com</li>
            <li className="lista">C/ Embajadores, 54, 28005 Madrid</li>
          </ul>
        </div>
        <div className="contenedorH1Footer">
        <h1 className="h1Footer">Pet Holidays</h1>
        </div>
      </article>
      <hr />
      <section className="containerLogosSocialMedia">
        <img className="logosSocialMedia" src={socialMedia} alt="" />
        <h2 className="h2Footer">Copyright 2024 Pet Holidays.</h2>
      </section>
    </main>
  );
}
