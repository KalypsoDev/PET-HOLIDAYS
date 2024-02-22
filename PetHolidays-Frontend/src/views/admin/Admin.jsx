import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ApartmentShow from '../../Components/card/ApartmentShow';
import "./admin.css";

function Admin() {
  return (
    <>
      <Header />
      <ApartmentShow isAdmin={true} />
      <Footer />
    </>
  );
}
export default Admin;
