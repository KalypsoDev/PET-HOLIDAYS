import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ApartmentShow from '../../Components/card/ApartmentShow';
import './user.css'


function User (){
    return (
        <>
        <Header/>
        <ApartmentShow isAdmin={false}/>
        <Footer/>
        </>
    );
}
export default User;