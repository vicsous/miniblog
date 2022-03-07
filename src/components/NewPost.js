import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../styles/pages/Home.css';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import {createNewPost} from '../actions/userActions';

export default function NewPost () {
    const { currentUser } = useAuth()
    const LoginSchema = Yup.object().shape({
        newpost: Yup.string()
        .min(1, 'Too Short!')
        .max(140, 'Too Long!')
        .required('Required'),
    });

    const postsCollectionRef = collection(db, 'posts');

    async function createPost(newPostText) {
        if (!currentUser) throw new Error('User not logged in');
        await addDoc(postsCollectionRef, { author: auth.currentUser.uid, text: newPostText, createdAt: (Date.now()).toString() })
    }

    return (
            <Formik
                initialValues={{ newpost: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        createNewPost(values.newpost)
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