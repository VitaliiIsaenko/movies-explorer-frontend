import "../Auth/Auth.css";
import logo from "../../images/logo.png";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import { useHistory, Link } from "react-router-dom";
import api from "../../utils/MainApi";
import React, { useEffect } from "react";
import { useFormWithValidation } from "../../utils/formValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Register(props) {
  const history = useHistory();
  const currentUser = React.useContext(CurrentUserContext);
  const form = useFormWithValidation();

  const [error, setError] = React.useState("");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    if (currentUser !== null) {
      history.push("/");
    }
  }, [history, currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
    handleFormChange(e);
  }

  function handleFormChange(e) {
    setError("");
    form.handleChange(e);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    handleFormChange(e);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    handleFormChange(e);
  }
  function handleRegistration() {
    api
      .register(name, email, password)
      .then(() => {
        setError("");
        api
          .login(email, password)
          .then((data) => {
            setError("");
            props.onLogin(data.token);
            history.push("/movies");
          })
          .catch((e) => {
            setError(e.message);
          });
      })
      .catch((e) => {
        setError(e.message);
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
            name="register"
            buttonText="Зарегестрироваться"
            onSubmit={handleRegistration}
            className="auth__form"
            isValid={form.isValid}
            error={error}
          >
            <TextInput
              label="Имя"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
              minLength="2"
              maxLength="20"
              error={form.errors["name"]}
            />
            <TextInput
              label="E-mail"
              name="email"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              error={form.errors["email"]}
            />
            <TextInput
              label="Пароль"
              name="password"
              type="password"
              id="password"
              minLength="6"
              value={password}
              onChange={handlePasswordChange}
              required
              error={form.errors["password"]}
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
