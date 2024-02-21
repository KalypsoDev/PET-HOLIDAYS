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
            <li>Contacto</li>
            <li>685452985 - 904768823</li>
            <li>contacto@petholidays.com</li>
            <li>C/ Embajadores, 54, 28005 Madrid</li>
          </ul>
        </div>
        <div className="contenedorH1Footer">
        <h1 className="h1Footer">Pet Holidays</h1>
        </div>
      </article>
      <hr />
      <section>
        <img src={socialMedia} alt="" />
      </section>
    </main>
  );
}
