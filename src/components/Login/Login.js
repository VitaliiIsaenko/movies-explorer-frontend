import "../Auth/Auth.css";
import logo from "../../images/logo.png";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import { Link } from "react-router-dom";

function Login() {
    function handleLogin() {
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
            <TextInput label="E-mail" type="email" id="email"/>
            <TextInput label="Пароль" type="password" id="password" />
          </Form>

          <div className="auth__alternative">
            <p className="auth__capture">Ещё не зарегестрировались?</p>
            <Link className="button button_type_cta" to="sign-up">
              Регистрация
            </Link>
          </div>
        </div>
      </section>)
}

export default Login;