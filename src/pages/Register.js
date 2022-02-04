import '../styles/pages/Login.css';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../contexts/AuthContext';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    username: Yup.string()
        .min(8, 'Too Short!')
        .max(16, 'Too Long!')
        .required('Required'),
    name: Yup.string()
        .min(1, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required')
  });
 
export default function Register () {  
    const { signup } = useAuth();

    return (
        <div className="login">
            <Formik
                initialValues={{ name: '', username: '', email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    signup(values);
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                }}
            >
                {({ isSubmitting }) => (
                <Form className="loginForm">
                    <h1 className="loginPageTitle">Cadastrar</h1>
                    {/* Email */}
                    <Field 
                        className="loginTextInput"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                    <ErrorMessage
                        className="errorMsg"
                        name="email"
                        component="div"
                    />

                    {/* Username */}
                    <Field 
                        className="loginTextInput"
                        name="username"
                        placeholder="Username"
                        type="text"
                    />
                    <ErrorMessage
                        className="errorMsg"
                        name="username"
                        component="div"
                    />

                    {/* Nome */}
                    <Field 
                        className="loginTextInput"
                        name="name"
                        placeholder="Nome"
                        type="text"
                    />
                    <ErrorMessage
                        className="errorMsg"
                        name="name"
                        component="div"
                    />

                    {/* Senha */}
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
                    <button
                        type="submit"
                        className="loginBtn" 
                        disabled={isSubmitting}>
                    Submit
                    </button>
                    <div className="loginLinks">  
                        <Link to='/login' className="passFgt"><u>Já tem uma conta?</u></Link>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    )
}