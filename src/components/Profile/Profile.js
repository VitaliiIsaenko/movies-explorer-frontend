import Delimiter from "../Delimiter/Delimiter";
import Header from "../Header/Header";
import "./Profile.css";
import "../Button/Button.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
function Profile() {
  const userName = "Виталий"; //todo: get from state
  const userEmail = "pochta@yandex.ru";

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className="profile">
        <div className="profile__info">
          <h1 className="profile__welcome">Привет, {userName}!</h1>
          <div className="profile__container">
            <p className="profile__text">Имя</p>
            <p className="profile__text">{userName}</p>
          </div>
          <Delimiter />
          <div className="profile__container">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">{userEmail}</p>
          </div>
        </div>
        <div className="profile__buttons">
          <Link className="button button_type_profile-edit">Редактировать</Link>
          <Link className="button button_type_profile-logout" to="/">
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
