import "../Auth/Auth.css";
import logo from "../../images/logo.png";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import { useHistory, Link } from "react-router-dom";
import api from "../../utils/MainApi";
import React from "react";

function Register() {
  const history = useHistory();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleRegistration() {
    api
      .register(name, email, password)
      .then(() => {
        history.push("/sign-in");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <>
      <section className="auth">
        <img className="auth__logo" src={logo} alt="логотип" />
        <h1 className="auth__welcome">Добро пожаловать!</h1>

        <div className="auth__form-container">
          <Form
            name="auth"
            buttonText="Зарегестрироваться"
            onSubmit={handleRegistration}
            className="auth__form"
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
            <TextInput
              label="Пароль"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form>

          <div className="auth__alternative">
            <p className="auth__capture">Уже зарегестрированы?</p>
            <Link className="button button_type_cta" to="sign-in">
              Войти
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
