import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import "./ProfileEdit.css";
import TextInput from "../TextInput/TextInput";
import api from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";

function ProfileEdit() {
  const history = useHistory();

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (currentUser === null) {
      return;
    }
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleEdit(e) {
    e.preventDefault();

    if (currentUser.name === name && currentUser.email === email) {
      return;
    }
    api
      .editCurrentUser(name, email)
      .then((res) => {
        currentUser.name = res.name;
        currentUser.email = res.email;

        history.push("/profile");
      })
      .catch((err) => console.log(err));
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className="profile-edit">
        <h1 className="profile-edit__header">Редактирование профиля</h1>
        <Form
          name="profile"
          buttonText="Сохранить"
          onSubmit={handleEdit}
          className="profile__form"
        >
          <TextInput
            label="Имя"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          <TextInput
            label="E-mail"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form>
      </section>
    </>
  );
}

export default ProfileEdit;
