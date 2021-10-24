import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

function Main(props) {
    return (<>
        <NavTab/>
        {/* <Header isLoggedIn={false}></Header> */}
        <Promo></Promo>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <Footer></Footer>
    </>)
}

export default Main;