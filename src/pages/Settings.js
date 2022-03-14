import '../styles/pages/Login.css';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    newPassword: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    email: Yup.string()
        .email('Invalid email'),
    name: Yup.string()
        .min(1, 'Too Short!')
        .max(20, 'Too Long!'),
  });
 
export default function Settings () {    
    return (
        <div className="login">
            <Formik
                initialValues={{ name: 'João Silva', email: 'jo@silva.com', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                }}
            >
                {({ isSubmitting }) => (
                <Form className="loginForm">
                    <h1 className="loginPageTitle">Configuração</h1>
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
                        placeholder="Senha atual"
                        type="password"
                    />
                    <ErrorMessage
                        className="errorMsg"
                        name="password"
                        component="div"
                    />

                    {/* Nova Senha */}
                    <Field 
                        className="loginTextInput"
                        name="newPassword"
                        placeholder="Senha nova"
                        type="password"
                    />
                    <ErrorMessage
                        className="errorMsg"
                        name="newPassword"
                        component="div"
                        />
                    <button
                        type="submit"
                        className="loginBtn" 
                        disabled={isSubmitting}>
                    Atualizar
                    </button>
                    <div className="loginLinks">  
                        <Link to='/login' className="passFgt"><u>Esqueci minha senha</u></Link>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    )
}