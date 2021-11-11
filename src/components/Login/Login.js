import "../Auth/Auth.css";
import logo from "../../images/logo.png";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import { Link, useHistory } from "react-router-dom";
import api from "../../utils/MainApi";
import React, { useEffect } from "react";
import { useFormWithValidation } from "../../utils/formValidation";

function Login(props) {
  const history = useHistory();
  const form = useFormWithValidation();

  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    if (props.isLoggedIn) {
      history.push("/");
    }
  }, [props.isLoggedIn, history]);

  function handleLogin() {
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
  }

  function handleEmailChange(e) {
    setError("");

    setEmail(e.target.value);
    form.handleChange(e);
  }

  function handlePasswordChange(e) {
    setError("");

    setPassword(e.target.value);
    form.handleChange(e);
  }

  return (
    <section className="auth">
      <img className="auth__logo" src={logo} alt="логотип" />
      <h1 className="auth__welcome">Рады видеть!</h1>

      <div className="auth__form-container">
        <Form
          name="login"
          buttonText="Войти"
          onSubmit={handleLogin}
          className="auth__form"
          error={error}
          isValid={form.isValid}
        >
          <TextInput
            label="E-mail"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            error={form.errors["email"]}
          />
          <TextInput
            label="Пароль"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            minLength={6}
            error={form.errors["password"]}
          />
        </Form>

        <div className="auth__alternative">
          <p className="auth__capture">Ещё не зарегестрировались?</p>
          <Link className="button button_type_cta" to="sign-up">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
