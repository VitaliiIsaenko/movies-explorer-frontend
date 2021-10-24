import "./Register.css";
import logo from "../../images/logo.png";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import { Link } from "react-router-dom";

function Register() {
  function handleRegistration() {}
  return (
    <>
      <section className="register">
        <img className="register__logo" src={logo} alt="логотип Место" />
        <h1 className="register__welcome">Добро пожаловать!</h1>
        <Form
          name="register"
          buttonText="Зарегестрироваться"
          onSubmit={handleRegistration}
          className="register__form"
        >
          <TextInput
          label="Имя"
          type="text"
          />
          <TextInput
          label="Email"
          type="email"
          />
          <TextInput
          label="Имя"
          type="password"
          />
        </Form>
        
        <div className="register__alternative">
          <p className="register__capture">Уже зарегестрированы?</p>
          <Link className="button button_type_cta" to="sign-in">Войти</Link>
      </div>
      </section>
    </>
  );
}

export default Register;
