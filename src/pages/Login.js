import "../styles/pages/Login.css";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../contexts/AuthContext";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
});

export default function Login() {
  const { login } = useAuth();

  const history = useHistory();

  return (
    <div className="login">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          login(values.email, values.password);
          setSubmitting(false);
        }}>
        {({ isSubmitting }) => (
          <Form className="loginForm">
            <h1 className="loginPageTitle">Login</h1>
            {/* Email */}
            <Field
              name="email"
              className="loginTextInput"
              placeholder="Email"
              type="email"
            />
            <ErrorMessage className="errorMsg" name="email" component="div" />

            {/* Password */}
            <Field
              className="loginTextInput"
              name="password"
              placeholder="Senha"
              type="password"
            />
            <ErrorMessage
              className="errorMsg"
              name="password"
              component="div"
            />
            <button type="submit" className="loginBtn" disabled={isSubmitting}>
              Submit
            </button>
            <div className="loginLinks">
              <Link to="/register" className="passFgt">
                <u>Esqueceu a senha?</u>
              </Link>
              <Link to="/register" className="passFgt">
                <u>Não tem cadastro?</u>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
