import Delimiter from "../Delimiter/Delimiter";
import Header from "../Header/Header";
import "./Profile.css";
import "../Button/Button.css";
import { Link, useHistory } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import React, { useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const history = useHistory();
  const currentUser = React.useContext(CurrentUserContext);

  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");

  useEffect(() => {
    if (currentUser === null) {
      return;
    }
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
  }, [currentUser]);

  function handleLogout() {
    props.onLogout();
    history.push("/");
  }
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
          <Link
            className="button button_type_profile-edit"
            to="profile-edit"
          >
            Редактировать
          </Link>

          <Link
            className="button button_type_profile-logout"
            to="/"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
