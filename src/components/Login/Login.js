import "../Auth/Auth.css";
import logo from "../../images/logo.png";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import { Link, useHistory } from "react-router-dom";
import api from "../../utils/MainApi";
import React from "react";

function Login(props) {
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin() {
    api
      .login(email, password)
      .then((data) => {
        props.onLogin(data.token);
        history.push("/movies");
      })
      .catch((e) => console.log(e));
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <section className="auth">
      <img className="auth__logo" src={logo} alt="логотип" />
      <h1 className="auth__welcome">Рады видеть!</h1>

      <div className="auth__form-container">
        <Form
          name="auth"
          buttonText="Войти"
          onSubmit={handleLogin}
          className="auth__form"
        >
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
