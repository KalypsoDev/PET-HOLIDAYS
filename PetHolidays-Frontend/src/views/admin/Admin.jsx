import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import AccommodationShow from '../../Components/card/AccommodationShow';
import "./admin.css";

function Admin() {
  return (
    <>
      <Header />
      <AccommodationShow isAdmin={true} />
      <Footer />
    </>
  );
}
export default Admin;
