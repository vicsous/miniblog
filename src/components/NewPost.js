import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../styles/pages/Home.css';
import { useAuth } from '../contexts/AuthContext';

export default function NewPost () {
    const { login } = useAuth()
    const PostSchema = Yup.object().shape({
        newpost: Yup.string()
        .min(1, 'Too Short!')
        .max(140, 'Too Long!')
        .required('Required'),
    });

    return (
            <Formik
                initialValues={{ newpost: '' }}
                validationSchema={PostSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        login()
                        .then(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                        })
                        .catch((e) => {
                            alert(e.message)
                            actions.setSubmitting(false)
                        })
                    }, 400);
                    }}
            >
                {({ isSubmitting, values }) => (
                <Form className="newPostField">
                    {/* NewPost */}
                    <Field
                        name="newpost"
                        as="textarea"
                        className="postInput"
                        maxLength={140}
                        placeholder="Escreva uma nova postagem..."
                    />
                    <div className="newPostBottom">
                        <p className="postCharCounter">{values.newpost.length}/140</p>
                        <button 
                            type="submit"
                            className="loginBtn" 
                            disabled={isSubmitting}
                        >Publicar</button>
                    </div>

                </Form>
                )}
            </Formik>
    )
}