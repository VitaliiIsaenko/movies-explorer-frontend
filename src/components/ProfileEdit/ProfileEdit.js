import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import "./ProfileEdit.css";
import TextInput from "../TextInput/TextInput";
import api from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import { useFormWithValidation } from "../../utils/formValidation";

function ProfileEdit() {
  const history = useHistory();
  const form = useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isFormValid, setIsFormValid] = useState(form.isValid);
  const [error, setError] = useState("");

  useEffect(() => {
    if (currentUser === null) {
      return;
    }
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleEdit(e) {
    e.preventDefault();

    api
      .editCurrentUser(name, email)
      .then((res) => {
        setError("");

        currentUser.name = res.name;
        currentUser.email = res.email;

        history.push("/profile");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }

  useEffect(() => {
    setIsFormValid(
      form.isValid &&
        !(currentUser.name === name && currentUser.email === email)
    );
  }, [name, email, currentUser, form.isValid]);

  function handleNameChange(e) {
    setName(e.target.value);
    form.handleChange(e);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    form.handleChange(e);
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
          isValid={isFormValid}
          error={error}
        >
          <TextInput
            name="name"
            label="Имя"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            minLength="2"
            maxLength="20"
            error={form.errors["name"]}
          />
          <TextInput
            name="email"
            label="E-mail"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            error={form.errors["email"]}
          />
        </Form>
      </section>
    </>
  );
}

export default ProfileEdit;
