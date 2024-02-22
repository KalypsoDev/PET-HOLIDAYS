import "./BodyHome.css";
import logoHome from "../../assets/logo-home.png";

export default function BodyHome() {
  return (
    <>
      <main className="containerMainBodyHome">
        <section className="containerPBodyHome">
          <p className="pBodyHome">
            Bienvenido a Pet Holidays, tu compañero de confianza en la búsqueda
            de alojamientos vacacionales que aceptan mascotas.
          </p>
          <p className="pBodyHome">
            En Pet Holidays, creemos que las vacaciones son para todos,
            incluidos tus adorables compañeros peludos. Con una amplia selección
            de alojamientos pet-friendly y un equipo dedicado a hacer que tu
            experiencia sea perfecta, estamos aquí para garantizar que tus
            vacaciones sean memorables tanto para ti como para tu mascota.
          </p>
          <p className="pBodyHome">
            ¡Únete a nosotros y descubre un nuevo nivel de aventura en tus
            próximas vacaciones con PetHolidays!
          </p>
        </section>
        <article>
          <img src={logoHome} alt="Logotipo Home" />
        </article>
      </main>
    </>
  );
}
