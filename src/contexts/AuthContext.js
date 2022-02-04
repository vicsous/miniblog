import React from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth () {
    return React.useContext(AuthContext);
}

export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = React.useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanget(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}