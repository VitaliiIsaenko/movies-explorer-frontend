import "../Auth/Auth.css";
import logo from "../../images/logo.png";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import { Link } from "react-router-dom";

function auth() {
  function handleRegistration() {}
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
            <TextInput label="Имя" type="text" id="name" />
            <TextInput label="E-mail" type="email" id="email"/>
            <TextInput label="Пароль" type="password" id="password"/>
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

export default auth;
