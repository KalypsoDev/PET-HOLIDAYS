import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import AccommodationShow from '../../Components/card/AccommodationShow';
import './user.css'


function User (){
    return (
        <>
        <Header/>
        <AccommodationShow isAdmin={false}/>
        <Footer/>
        </>
    );
}
export default User;