import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Header from '../Header/Header'
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

function Main() {
    return (<>
        <Header></Header>
        <Promo></Promo>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
    </>)
}

export default Main;